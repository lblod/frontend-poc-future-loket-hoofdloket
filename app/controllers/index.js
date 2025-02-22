import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @service router;

  @tracked searchTerm;
  suggestions = ["Suggestion", "Suggestion", "Suggestion", "Suggestion"];

  @action
  search(e) {
    e.preventDefault();
    this.router.transitionTo('products', {
      queryParams: {
        page: 0,
        searchTerm: this.searchTerm,
        isFavorite: false
      }
    });
  }

  @action
  updateSearchTerm(e) {
    this.searchTerm = e.target.value;
  }

  @action
  resetSearch() {
    this.searchTerm = null;
  }
}
