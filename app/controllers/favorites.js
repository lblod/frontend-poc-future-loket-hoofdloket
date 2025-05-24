import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FavoritesController extends Controller {
  @action
  async openWebsite(product) {
    const websites = await product.websites;
    if (websites.length) {
      window.open(websites[0].url, '_blank');
    }
  }
}
