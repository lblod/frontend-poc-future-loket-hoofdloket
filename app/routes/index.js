import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    // TODO add filter on is-favorite
    return this.store.query('public-service', {
      page: {
        size: 10,
        number: 0
      }
    });
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.searchTerm = null;
  }
}
