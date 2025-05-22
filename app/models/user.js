import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr voornaam;
  @attr achternaam;

  @hasMany('account', { async: true, inverse: 'user' }) account;

  @hasMany('administrative-unit', {
    async: false,
    inverse: null,
    polymorphic: true,
  })
  administrativeUnits;

  get group() {
    return this.administrativeUnits.at(0);
  }

  // used for mock login
  get fullName() {
    return `${this.voornaam} ${this.achternaam}`.trim();
  }
}
