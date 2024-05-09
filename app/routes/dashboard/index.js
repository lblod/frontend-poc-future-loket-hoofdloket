import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { isPresent } from '@ember/utils';
import { startOfMonth, endOfMonth, startOfQuarter, endOfQuarter } from 'date-fns';
import constants from '../../config/constants';

const { TARGET_AUDIENCES, EXECUTING_AUTHORITY_LEVELS } = constants;

export default class DashboardIndexRoute extends Route {
  @service store;

  queryParams = {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    searchTerm: {
      refreshModel: true
    },
    themes: {
      refreshModel: true
    },
    types: {
      refreshModel: true
    },
    deadline: {
      refreshModel: true
    },
  };

  async model(params) {
    const targetAudiences = await Promise.all([
      this.store.findRecordByUri('concept', TARGET_AUDIENCES.LOCAL_GOVERNMENT),
      this.store.findRecordByUri('concept', TARGET_AUDIENCES.ORGANIZATION)
    ]);

    const executingAuthorityLevels = await Promise.all([
      this.store.findRecordByUri('concept', EXECUTING_AUTHORITY_LEVELS.FLEMISH),
      this.store.findRecordByUri('concept', EXECUTING_AUTHORITY_LEVELS.PROVINCE)
    ]);

    const queryOptions = {
      include: 'type,thematic-areas',
      page: {
        number: params.page,
        size: params.size
      },
      'filter[target-audiences][:id:]': targetAudiences.map((c) => c.id).join(','),
      'filter[executing-authority-levels][:id:]': executingAuthorityLevels.map((c) => c.id).join(',')
    };

    this.searchTerm = params.searchTerm;
    if (isPresent(params.searchTerm)) {
      queryOptions['filter'] = params.searchTerm;
    }

    if (params.themes.length) {
      this.themeRecords = await Promise.all(
        params.themes.map((id) => this.store.findRecord('concept', id))
      );
      queryOptions['filter[thematic-areas][:id:]'] = this.themeRecords.map((c) => c.id).join(',');
    }

    if (params.types.length) {
      this.typeRecords = await Promise.all(
        params.types.map((id) => this.store.findRecord('concept', id))
      );
      queryOptions['filter[type][:id:]'] = this.typeRecords.map((c) => c.id).join(',');
    }

    if (params.deadline.length) {
      const now = new Date();
      if (params.deadline.includes('quarter')) {
        queryOptions['filter[:gte:end-date]'] = startOfQuarter(now).toISOString();
        queryOptions['filter[:lte:end-date]'] = endOfQuarter(now).toISOString();
      } else if (params.deadline.includes('month')) {
        queryOptions['filter[:gte:end-date]'] = startOfMonth(now).toISOString();
        queryOptions['filter[:lte:end-date]'] = endOfMonth(now).toISOString();
      }
    }

    return this.store.query('public-service', queryOptions);
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.themeRecords = this.themeRecords || [];
    controller.typeRecords = this.typeRecords || [];
    controller.searchTermBuffer = this.searchTerm;
  }
}
