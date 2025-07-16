import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FavoritesController extends Controller {
  @tracked selectedProduct;

  @action
  async openProductDetail(product) {
    const websites = await product.websites;
    if (websites.length) {
      window.open(websites[0].url, '_blank');
    } else {
      this.selectedProduct = product;
    }
  }

  @action
  closeProductDetail() {
    this.selectedProduct = null;
  }
}
