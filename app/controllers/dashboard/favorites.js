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

  results = [...productData, ...subsidiesData].sort((a, b) => a.name.localeCompare(b.name));

  get filteredResults() {
    // Check if any filter in the first group is active
    const isFirstGroupActive = this.filters.tools || this.filters.subsidies;
    // Check if any filter in the second group is active
    const isSecondGroupActive = this.filters.burger || this.filters.financieel;
    const isThirdGroupActive = this.filters.month || this.filters.quart;
  
    // If no filters are active in both groups, return all results
    if (!isFirstGroupActive && !isSecondGroupActive && !isThirdGroupActive) {
      return this.results.sort((a, b) => {
        if (a.deadline && b.deadline) {
          return new Date(a.deadline) - new Date(b.deadline);
        }
        if (a.deadline && !b.deadline) return -1;
        if (!a.deadline && b.deadline) return 1;
        if (a.deadline === '' && b.deadline !== '') return -1;
        if (a.deadline !== '' && b.deadline === '') return 1;
        return 0;
      });
    }
  
    return this.results
      .filter((item) => {
        // If the first group is active, check if the item matches any of the active filters in this group
        const matchesFirstGroup = !isFirstGroupActive || 
          (this.filters.tools && item.filter === 'tools') || 
          (this.filters.subsidies && item.filter === 'subsidies');
    
        // If the second group is active, check if the item matches any of the active filters in this group
        const matchesSecondGroup = !isSecondGroupActive || 
          (this.filters.burger && item.filterTheme === 'burger') || 
          (this.filters.financieel && item.filterTheme === 'financieel');

        const matchesThirdGroup = !isThirdGroupActive || 
          (this.filters.month && item.deadline === 'burger') || 
          (this.filters.quart && item.deadline === 'financieel');
    
        // An item is included only if it matches active filters in both groups
        return matchesFirstGroup && matchesSecondGroup && matchesThirdGroup;
      })
      .sort((a, b) => {
        if (a.deadline && b.deadline) {
          return new Date(a.deadline) - new Date(b.deadline);
        }
        if (a.deadline && !b.deadline) return -1;
        if (!a.deadline && b.deadline) return 1;
        if (a.deadline === '' && b.deadline !== '') return -1;
        if (a.deadline !== '' && b.deadline === '') return 1;
        return 0;
      });
  }

  @action
  updateFilter(filterName) {
    this.filters = {
      ...this.filters,
      [filterName]: !this.filters[filterName],
    };
  }
}
