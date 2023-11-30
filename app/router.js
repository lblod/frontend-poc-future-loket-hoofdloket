import EmberRouter from '@ember/routing/router';
import config from 'loket/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('dashboard', function () {
    this.route('cases');
    this.route('data');
    this.route('reporting');
    this.route('search');
    this.route('messages');
    this.route('updates');
    this.route('favorites');
  });
  this.route('cases', function () {
    this.route('search');
  });
  this.route('email');
  this.route('settings', function () {
    this.route('newsletter');
  });
  this.route('updates');
  this.route('messages', function () {
    this.route('search');
  });
  this.route('data', function () {
    this.route('search');
    this.route('detail');
  });
});
