import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { compare } from '@ember/utils';

export default class IndexRoute extends Route {
  @service('bookmarks') bookmarksService;
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    const favorites = this.bookmarksService.bookmarks
      .map((bookmark) => bookmark.object)
      .sort((a, b) => compare(a.name.default, b.name.default));
    return Promise.all(
      favorites.map(async (product) => {
        const websites = await product.websites;
        return { product, website: websites[0] };
      })
    );
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.searchTerm = null;
  }
}
