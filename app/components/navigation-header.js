import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class NavigationHeader extends Component {
  @service router;
  get activeRoute() {
    return this.router.currentRouteName;
  }
}
