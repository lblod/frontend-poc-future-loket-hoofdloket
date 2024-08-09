import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
const { productData } = require('../products');
const { subsidiesData } = require('../subsidies');

export default class DashboardFavoritesController extends Controller {
  @tracked filters = {
    tools: false,
    subsidies: false,
    burger: false,
    financieel: false,
    month: false,
    quart: false,
  };
  @tracked newsletterModalOpen = false;
  @tracked sortBy = 'deadline';
  @service toaster;

  results = [...productData, ...subsidiesData].sort((a, b) => a.name.localeCompare(b.name));

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
    const isFirstGroupActive = this.filters.tools || this.filters.subsidies;
    const isSecondGroupActive = this.filters.burger || this.filters.financieel;
    const isThirdGroupActive = this.filters.month || this.filters.quart;
  
    if (!isFirstGroupActive && !isSecondGroupActive && !isThirdGroupActive) {
      return this.results;
    }
  
    return this.results.filter((item) => {
      const matchesFirstGroup = !isFirstGroupActive || 
        (this.filters.tools && item.filter === 'tools') || 
        (this.filters.subsidies && item.filter === 'subsidies');
  
      const matchesSecondGroup = !isSecondGroupActive || 
        (this.filters.burger && item.filterTheme === 'burger') || 
        (this.filters.financieel && item.filterTheme === 'financieel');

      const matchesThirdGroup = !isThirdGroupActive || 
        (this.filters.month && item.deadline === 'burger') || 
        (this.filters.quart && item.deadline === 'financieel');
  
      return matchesFirstGroup && matchesSecondGroup && matchesThirdGroup;
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
}