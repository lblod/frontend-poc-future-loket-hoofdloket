import EmberRouter from '@ember/routing/router';
import config from 'loket/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('dashboard', function () {
    this.route('index');
    this.route('subsidies');
    this.route('datasources');
    this.route('reporting');
  });
});
