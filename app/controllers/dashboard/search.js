import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
const { productData } = require('../products');
const { subsidiesData } = require('../subsidies');

export default class DashboardSearchController extends Controller {
  @tracked filters = {
    tools: false,
    subsidies: false,
    burger: false,
    financieel: false,
  };

  results = [...productData, ...subsidiesData];

  get filteredResults() {
    // Check if any filter in the first group is active
    const isFirstGroupActive = this.filters.tools || this.filters.subsidies;
    // Check if any filter in the second group is active
    const isSecondGroupActive = this.filters.burger || this.filters.financieel;
  
    // If no filters are active in both groups, return all results
    if (!isFirstGroupActive && !isSecondGroupActive) {
      return this.results;
    }
  
    return this.results.filter((item) => {
      // If the first group is active, check if the item matches any of the active filters in this group
      const matchesFirstGroup = !isFirstGroupActive || 
        (this.filters.tools && item.filter === 'tools') || 
        (this.filters.subsidies && item.filter === 'subsidies');
  
      // If the second group is active, check if the item matches any of the active filters in this group
      const matchesSecondGroup = !isSecondGroupActive || 
        (this.filters.burger && item.filterTheme === 'burger') || 
        (this.filters.financieel && item.filterTheme === 'financieel');
  
      // An item is included only if it matches active filters in both groups
      return matchesFirstGroup && matchesSecondGroup;
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
