import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductsProductController extends Controller {
  @service router;

  @action
  closeDetail() {
    this.router.transitionTo('products');
  }
}
