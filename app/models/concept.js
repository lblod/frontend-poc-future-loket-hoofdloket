import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptModel extends Model {
  @attr('string') label;

  @hasMany('concept', { async: true, inverse: null }) broader;
}
