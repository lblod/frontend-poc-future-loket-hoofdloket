import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class DashboardUpdatesController extends Controller {
  @tracked newsletterModalOpen = false;
  @service toaster;

  @action openNewsletterModal() {
    this.newsletterModalOpen = true;
  }

  @action closeNewsletterModal() {
    this.newsletterModalOpen = false;
  }

  @action confirmNewsletterModal() {
    this.newsletterModalOpen = false;
    this.toaster.success(
      'Je nieuwbrief instelling zijn aangepast',
      'Wijzingen opgeslagen',
      { timeOut: 3000, closable: false },
    );
  }

  news = [
    {
      title: 'Voor kinderen met een beperking',
      date: '22/10/23',
      icon: 'subsidies',
      new: true,
    },
    {
      title: 'KLACHT2019.000428 tegen AALTER: opvraging aan bestuur',
      date: '20/10/23',
      icon: 'mail',
      new: false,
    },
    {
      title: 'Lokaal Energie- en Klimaatpact 2.0',
      date: '17/10/23',
      icon: 'subsidies',
      new: false,
    },
    {
      title: 'Ondersteuningsmaatregelen in het meetjesland',
      date: '10/10/23',
      icon: 'star-filled',
      new: false,
    },
  ];
}
