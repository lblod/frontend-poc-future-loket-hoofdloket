import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentSessionService extends Service {
  @service session;
  @service store;
  @service bookmarks;

  @tracked account;
  @tracked gebruiker;
  @tracked group;
  @tracked groupClassification;

  async load() {
    if (this.session.isAuthenticated) {
      const accountId =
        this.session.data.authenticated.relationships.account.data.id;
      this.account = await this.store.findRecord('account', accountId, {
        include: 'gebruiker.bestuurseenheden.classificatie',
      });

      this.gebruiker = await this.account.gebruiker;

      const groupId =
        this.session.data.authenticated.relationships.group.data.id;
      this.group = await this.store.findRecord('bestuurseenheid', groupId, {
        include: 'classificatie',
        reload: true,
      });
      this.groupClassification = await this.group.classificatie;

      await this.bookmarks.load();
    }
  }
}
