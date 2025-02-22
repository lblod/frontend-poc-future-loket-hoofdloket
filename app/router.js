import EmberRouter from '@ember/routing/router';
import config from 'loket/config/environment';
import { fallbackRoute, externalRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('products', function () {
    this.route('product', { path: '/:product_id' })
  });

  externalRoute(this);
  fallbackRoute(this);
});
