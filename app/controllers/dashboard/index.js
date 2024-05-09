import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import constants from '../../config/constants';

const { CONCEPT_SCHEMES } = constants;

export default class DashboardSearchController extends Controller {
  serviceTypeConceptScheme = CONCEPT_SCHEMES.SERVICE_TYPE;
  themeConceptScheme = CONCEPT_SCHEMES.THEME;
  deadlineOptions = [
    { label: 'Deze maand', value: 'month' },
    { label: 'Dit kwartaal', value: 'quarter' },
  ];

  @tracked page = 0;
  @tracked size = 25;
  @tracked searchTerm;
  @tracked searchTermBuffer;
  @tracked types = [];
  @tracked themes = [];
  @tracked deadline = [];

  @tracked newsletterModalOpen = false;
  @service toaster;

  @action openNewsletterModal() {
    this.newsletterModalOpen = true;
  }

  @action closeNewsletterModal() {
    this.newsletterModalOpen = false;
  }

  @action confirmNewsletterModal() {
    this.newsletterModalOpen = false;
    this.toaster.success(
      'Je nieuwbrief instelling zijn aangepast',
      'Wijzingen opgeslagen',
      { timeOut: 3000, closable: false },
    );
  }

  @action
  updateSearchTermBuffer(event) {
    this.searchTermBuffer = event.target.value;
  }

  @action
  search(event) {
    event.preventDefault();
    this.searchTerm = this.searchTermBuffer;
  }

  @action
  resetSearch() {
    this.searchTermBuffer = null;
    this.searchTerm = null;
  }

  @action
  updateThemeFilter(themes) {
    this.themes = themes.map((record) => record.id);
  }

  @action
  updateServiceTypeFilter(types) {
    this.types = types.map((record) => record.id);
  }

  @action
  updateDeadlineFilter(values) {
    this.deadline = values;
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
}
