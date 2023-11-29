import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CasesController extends Controller {
  @service router;
  @tracked dateFilter = false;

  get activeRoute() {
    return this.router.currentRouteName;
  }

  @action toggleDateFilter() {
    this.dateFilter = !this.dateFilter;
  }
}
