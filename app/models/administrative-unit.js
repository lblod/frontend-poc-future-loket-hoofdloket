import Model, { attr, belongsTo } from '@ember-data/model';

export default class AdministrativeUnit extends Model {
  @attr uri;
  @attr naam;
  @attr alternatieveNaam;

  @belongsTo('bestuurseenheid-classificatie-code', {
    async: true,
    inverse: null,
  })
  classificatie;
}
