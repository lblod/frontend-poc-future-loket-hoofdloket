import Model, { attr, belongsTo } from '@ember-data/model';

export default class PublicServiceModel extends Model {
  @attr('language-string-set') title;
  @attr('language-string-set') description;
  @attr('string') url;
  @belongsTo('public-service', { async: true, inverse: 'websites' }) publicService;
}
