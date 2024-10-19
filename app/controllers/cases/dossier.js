import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
const { mySubsidiesData } = require('../mySubsidies');

export default class DossierController extends Controller {
  @tracked dateFilter = false;

  @action toggleDateFilter() {
    this.dateFilter = !this.dateFilter;
  }

  subsidies = mySubsidiesData;
}
