import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ipdcServiceCard extends Component {

  @action
  toggleSidebar() {
    const sideBar = document.getElementById("sidebar-container")

    sideBar.classList.toggle("hidden")
  }
}
