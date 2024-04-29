import Model, { attr } from '@ember-data/model';

export default class ConceptModel extends Model {
  @attr('string') label;
}
