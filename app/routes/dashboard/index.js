import Route from '@ember/routing/route';
import { service } from '@ember/service';
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
    }
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

    return this.store.query('public-service', {
      include: 'type,thematic-areas',
      page: {
        number: params.page,
        size: params.size
      },
      'filter[target-audiences][:id:]': targetAudiences.map((c) => c.id).join(','),
      'filter[executing-authority-levels][:id:]': executingAuthorityLevels.map((c) => c.id).join(',')
    });
  }
}
