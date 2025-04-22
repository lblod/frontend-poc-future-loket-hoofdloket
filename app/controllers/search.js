import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import constants from '../config/constants';

const { CONCEPT_SCHEMES } = constants;

export default class SearchController extends Controller {
  @service router;

  serviceTypeConceptScheme = CONCEPT_SCHEMES.SERVICE_TYPE_FILTER;
  themeConceptScheme = CONCEPT_SCHEMES.THEME_FILTER;
  authorityConceptScheme = CONCEPT_SCHEMES.COMPETENT_AUTHORITY_FILTER;

  sortingOptions = [
    { label: 'Relevantie', value: 'score' },
    { label: 'A-Z (oplopend)', value: 'name.nl' },
    { label: 'Nieuwste', value: '-date-created' },
  ];

  @tracked page = 0;
  @tracked size = 25;
  @tracked sort = 'score';
  @tracked searchTerm;
  @tracked searchTermBuffer;
  @tracked isFavorite = false;
  // Array of record ids used as query param
  @tracked types = [];
  @tracked themes = [];
  @tracked authorities = [];
  // set in Route `setupController`
  @tracked themeRecords;
  @tracked typeRecords;
  @tracked authorityRecords;

  @action
  updateSearchTermBuffer(event) {
    this.searchTermBuffer = event.target.value;
  }

  @action
  search(event) {
    event.preventDefault();
    this.searchTerm = this.searchTermBuffer;
    this.setPage(0);
  }

  @action
  resetSearch() {
    this.searchTermBuffer = null;
    this.searchTerm = null;
    this.setPage(0);
  }

  @action
  updateThemeFilter(themes) {
    this.themes = themes.map((record) => record.id);
    this.setPage(0);
  }

  @action
  updateServiceTypeFilter(types) {
    this.types = types.map((record) => record.id);
    this.setPage(0);
  }

  @action
  updateAuthorityLevelFilter(authorities) {
    this.authorities = authorities.map((record) => record.id);
    this.setPage(0);
  }

  @action
  setPage(page) {
    this.page = page;
  }

  @action
  setPageSize(size) {
    this.size = size;
    this.setPage(0);
  }

  @action
  updateSorting(event) {
    this.sort = event.target.value;
  }

  @action
  openDetail(product) {
    this.router.transitionTo('search.product', product.id);
  }
}
