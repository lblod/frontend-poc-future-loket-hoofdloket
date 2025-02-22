import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import constants from '../../config/constants';

const { CONCEPT_SCHEMES } = constants;

export default class DashboardIndexController extends Controller {
  serviceTypeConceptScheme = CONCEPT_SCHEMES.SERVICE_TYPE_FILTER;
  themeConceptScheme = CONCEPT_SCHEMES.THEME_FILTER;
  authorityConceptScheme = CONCEPT_SCHEMES.COMPETENT_AUTHORITY_FILTER;

  sortingOptions = [
    { label: 'A-Z (oplopend)', value: ':no-case:name' },
    { label: 'Nieuwste', value: 'date-created' },
  ];

  @tracked page = 0;
  @tracked size = 25;
  @tracked sortBy;
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
    this.sortBy = event.target.value;
  }

  @action
  closePanel() {
    document.querySelector('.overlay-container').classList.add('au-u-hidden');
  }
}
