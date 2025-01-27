import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import constants from '../../config/constants';

const { CONCEPT_SCHEMES } = constants;

export default class DashboardIndexController extends Controller {
  serviceTypeConceptScheme = CONCEPT_SCHEMES.SERVICE_TYPE_FILTER;
  themeConceptScheme = CONCEPT_SCHEMES.THEME_FILTER;
  authorityConceptScheme = CONCEPT_SCHEMES.COMPETENT_AUTHORITY_FILTER;
  deadlineOptions = [
    { label: 'Deze maand', value: 'month' },
    { label: 'Dit kwartaal', value: 'quarter' },
    { label: 'Verstreken', value: 'passed' },
  ];

  sortingOptions = [
    // { label: 'Deadline', value: 'end-date' },
    { label: 'A-Z (oplopend)', value: ':no-case:name' },
    { label: 'Z-A (aflopend)', value: '-:no-case:name' },
    { label: 'Nieuwste', value: 'date-created' },
  ];

  @tracked page = 0;
  @tracked size = 25;
  @tracked searchTerm;
  @tracked searchTermBuffer;
  @tracked types = [];
  @tracked themes = [];
  @tracked authorities = [];
  @tracked deadline = [];
  @tracked sortBy;
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
  updateDeadlineFilter(values) {
    // only one deadline is possible at a time
    // last item in array is the most recently clicked
    this.deadline = values.slice(-1);
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
}
