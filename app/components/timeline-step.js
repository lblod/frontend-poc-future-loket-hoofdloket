import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TimelineStep extends Component {
  get statusClass() {
    switch (this.args.status) {
      case 'ongoing':
        return 'c-timeline__item--ongoing';
      case 'done':
        return 'c-timeline__item--done';
      case 'idle':
        return 'c-timeline__item--idle';
      default:
        return 'c-timeline__item--idle';
    }
  }
}
