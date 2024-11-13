import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { isPresent } from '@ember/utils';
import { startOfMonth, endOfMonth, startOfQuarter, endOfQuarter } from 'date-fns';
import constants from '../../config/constants';

const { TARGET_AUDIENCES } = constants;

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
    authorities: {
      refreshModel: true
    },
    deadline: {
      refreshModel: true
    },
    sortBy: {
      refreshModel: true
    }
  };

  async model(params) {
    const targetAudiences = await Promise.all([
      this.store.findRecordByUri('concept', TARGET_AUDIENCES.LOCAL_GOVERNMENT),
      this.store.findRecordByUri('concept', TARGET_AUDIENCES.ORGANIZATION)
    ]);

    const queryOptions = {
      include: 'type,thematic-areas,websites',
      page: {
        number: params.page,
        size: params.size
      },
      'filter[target-audiences][:id:]': targetAudiences.map((c) => c.id).join(','),
    };

    this.searchTerm = params.searchTerm;
    if (isPresent(params.searchTerm)) {
      queryOptions['filter'] = params.searchTerm;
    }

    // these params are filters for conceptSchemes that are referred to
    // by the actual concept via 'broader'
    this.themeRecords = [];
    if (params.themes.length) {
      this.themeRecords = await Promise.all(
        params.themes.map((id) => this.store.findRecord('concept', id))
      );
      queryOptions['filter[thematic-areas][broader][:id:]'] = this.themeRecords.map((c) => c.id).join(',');
    }

    this.authorityRecords = [];
    if (params.authorities.length) {
      this.authorityRecords = await Promise.all(
        params.authorities.map((id) => this.store.findRecord('concept', id))
      );
      queryOptions['filter[competent-authority-levels][broader][:id:]'] = this.authorityRecords.map((c) => c.id).join(',');
    }

    this.typeRecords = [];
    if (params.types.length) {
      this.typeRecords = await Promise.all(
        params.types.map((id) => this.store.findRecord('concept', id))
      );
      queryOptions['filter[type][broader][:id:]'] = this.typeRecords.map((c) => c.id).join(',');
    }

    if (params.deadline.length) {
      const now = new Date();
      if (params.deadline.includes('quarter')) {
        queryOptions['filter[:gte:end-date]'] = startOfQuarter(now).toISOString();
        queryOptions['filter[:lte:end-date]'] = endOfQuarter(now).toISOString();
      } else if (params.deadline.includes('month')) {
        queryOptions['filter[:gte:end-date]'] = startOfMonth(now).toISOString();
        queryOptions['filter[:lte:end-date]'] = endOfMonth(now).toISOString();
      } else if (params.deadline.includes('passed')) {
        queryOptions['filter[:lte:end-date]'] = now.toISOString();
      }
    }

    if (params.sortBy) {
      // note: sorting on stringsets in undefined behaviour in resources
      queryOptions['sort'] = params.sortBy;
    }

    return this.store.query('public-service', queryOptions);
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.themeRecords = this.themeRecords || [];
    controller.typeRecords = this.typeRecords || [];
    controller.authorityRecords = this.authorityRecords || [];
    controller.searchTermBuffer = this.searchTerm;
  }
}
