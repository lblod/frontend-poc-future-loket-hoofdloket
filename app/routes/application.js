import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { warn } from '@ember/debug';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentSession;
  @service router;
  @service intl;

  async beforeModel() {
    await this.session.setup();
    this.intl.setLocale(['nl-be']);

    try {
      await this.currentSession.load();
    } catch (error) {
      warn(error, { id: 'current-session-load-failure' });
      this.router.transitionTo('auth.logout');
    }

  }
}
