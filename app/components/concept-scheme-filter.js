import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { keepLatestTask } from 'ember-concurrency';

export default class ConceptSchemeFilter extends Component {
  @service store;

  @tracked concepts = [];

  constructor() {
    super(...arguments);
    this.loadData.perform();
  }

  get selectedIds() {
    return this.args.selected.map((concept) => concept.id);
  }

  @keepLatestTask
  *loadData() {
    this.concepts = yield this.store.queryAll('concept', {
      sort: 'label',
      'filter[top-concept-schemes][:uri:]': this.args.conceptScheme
    });
  }

  @action
  updateSelection(selectedIds) {
    const records = this.concepts.filter((record) => selectedIds.includes(record.id));
    this.args.onChange(records);
  }
}
