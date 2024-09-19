import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TimelineStep extends Component {
  get statusClass() {
    switch (this.args.status) {
      case 'ongoing':
        return 'timeline__item--ongoing';
      case 'done':
        return 'timeline__item--done';
      case 'idle':
        return 'timeline__item--idle';
      default:
        return 'timeline__item--idle';
    }
  }
}
