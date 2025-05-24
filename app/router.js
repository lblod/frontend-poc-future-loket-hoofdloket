import EmberRouter from '@ember/routing/router';
import config from 'loket/config/environment';
import { fallbackRoute, externalRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('mock-login');
  this.route('auth', function () {
    this.route('logout');
  });
  this.route('search', function () {
    this.route('product', { path: '/:product_id' })
  });
  this.route('products', function () {
    this.route('product', { path: '/:product_id' })
  });
  this.route('favorites');

  externalRoute(this);
  fallbackRoute(this);
});
