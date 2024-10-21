import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
const { productData } = require('../products');
const { subsidiesData } = require('../subsidies');

export default class DashboardSearchController extends Controller {
  @tracked sortBy = 'deadline';

  @tracked filters = {
    tools: false,
    subsidies: false,
    burger: false,
    financieel: false,
    month: false,
    quart: false,
  };

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

  product = productData;
  subsidies = subsidiesData;

  results = [...productData, ...subsidiesData].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  sortByDeadline(a, b) {
    if (a.deadline && b.deadline) {
      return new Date(a.deadline) - new Date(b.deadline);
    }
    if (a.deadline && !b.deadline) return -1;
    if (!a.deadline && b.deadline) return 1;
    if (a.deadline === '' && b.deadline !== '') return -1;
    if (a.deadline !== '' && b.deadline === '') return 1;
    return 0;
  }

  get filteredResults() {
    // Check if any filter in each group is active
    const isFirstGroupActive = this.filters.documenten || this.filters.vergunningen || this.filters.steunmaatregelen || this.filters.advies || this.filters.infrastructuur || this.filters.belastingen;
    const isSecondGroupActive = this.filters.burger || this.filters.werken || this.filters.welzijn || this.filters.bouwen || this.filters.mobiliteit || this.filters.omgeving || this.filters.vrijeTijd || this.filters.onderwijs || this.filters.landbouw || this.filters.gemeente || this.filters.onderzoek || this.filters.jeugd || this.filters.veiligheid || this.filters.europa;
    const isThirdGroupActive = this.filters.month || this.filters.quart;
    const isFourthGroupActive = this.filters.europese || this.filters.federale || this.filters.vlaamse || this.filters.provinciale || this.filters.lokale;

    // If no filters are active in both groups, return all results
    if (!isFirstGroupActive && !isSecondGroupActive && !isThirdGroupActive && !isFourthGroupActive) {
      return this.results.slice();
    }

    return this.results.filter((item) => {
      // If the first group is active, check if the item matches any of the active filters in this group
      const matchesFirstGroup =
        !isFirstGroupActive ||
        (this.filters.documenten && item.filter === 'documenten') ||
        (this.filters.vergunningen && item.filter === 'vergunningen') ||
        (this.filters.steunmaatregelen && item.filter === 'steunmaatregelen') ||
        (this.filters.advies && item.filter === 'advies') ||
        (this.filters.infrastructuur && item.filter === 'infrastructuur') ||
        (this.filters.belastingen && item.filter === 'belastingen');

      // If the second group is active, check if the item matches any of the active filters in this group
      const matchesSecondGroup =
        !isSecondGroupActive ||
        (this.filters.burger && item.filterTheme === 'burger') ||
        (this.filters.werken && item.filterTheme === 'werken') ||
        (this.filters.welzijn && item.filterTheme === 'welzijn') ||
        (this.filters.bouwen && item.filterTheme === 'bouwen') ||
        (this.filters.mobiliteit && item.filterTheme === 'mobiliteit') ||
        (this.filters.omgeving && item.filterTheme === 'omgeving') ||
        (this.filters.vrijeTijd && item.filterTheme === 'vrijeTijd') ||
        (this.filters.onderwijs && item.filterTheme === 'onderwijs') ||
        (this.filters.landbouw && item.filterTheme === 'landbouw') ||
        (this.filters.gemeente && item.filterTheme === 'gemeente') ||
        (this.filters.onderzoek && item.filterTheme === 'onderzoek') ||
        (this.filters.jeugd && item.filterTheme === 'jeugd') ||
        (this.filters.veiligheid && item.filterTheme === 'veiligheid') ||
        (this.filters.europa && item.filterTheme === 'europa')
      ;

      const matchesThirdGroup =
        !isThirdGroupActive ||
        (this.filters.month && item.deadline === 'burger') ||
        (this.filters.quart && item.deadline === 'financieel');

      const matchesFourthGroup =
        !isFourthGroupActive ||
        (this.filters.europese && item.aanbieder === 'europese') ||
        (this.filters.federale && item.aanbieder === 'federale') ||
        (this.filters.vlaamse && item.aanbieder === 'vlaamse') ||
        (this.filters.provinciale && item.aanbieder === 'provinciale') ||
        (this.filters.lokale && item.aanbieder === 'lokale');

      // An item is included only if it matches active filters in both groups
      return matchesFirstGroup && matchesSecondGroup && matchesThirdGroup && matchesFourthGroup;
    });
  }

  get sortedResults() {
    const results = this.filteredResults;

    switch (this.sortBy) {
      case 'nameAsc':
        return results.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return results.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'deadline':
      default:
        return results.slice().sort(this.sortByDeadline);
    }
  }

  @action
  updateFilter(filterName) {
    this.filters = {
      ...this.filters,
      [filterName]: !this.filters[filterName],
    };
  }

  @action
  updateSorting(event) {
    this.sortBy = event.target.value;
  }
}
