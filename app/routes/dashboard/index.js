import Route from '@ember/routing/route';
import { service } from '@ember/service';

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

  model(params) {
    return this.store.query('public-service', {
      include: 'type,thematic-areas',
      page: {
        number: params.page,
        size: params.size
      }
    });
  }
}
