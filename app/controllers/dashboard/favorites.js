import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class DashboardFavoritesController extends Controller {
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

  subsidies = [
    {
      name: 'Lokaal Energie- en Klimaatpact 1.0',
      link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
      deadline: '06 december 2023',
      favorite: 'true',
      type: 'Subsidie',
      description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
    },
    {
      name: 'Opknapwerken slaapplekken Oekraïne',
      link: 'https://www.vlaanderen.be/vlaanderen-helpt-oekraine/financiering',
      deadline: '31 mei 2024',
      favorite: 'true',
      type: 'Subsidie',
      description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
    },
    {
      name: 'Subsidie voor Hoppinpunten',
      link: 'https://www.vlaanderen.be/subsidies-voor-de-aanleg-of-herinrichting-van-een-hoppinpunt',
      favorite: 'true',
      type: 'Subsidie',
      description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
    },
    {
      name: 'Subsidie voor het toegankelijk aanleggen of herinrichten van haltes en de uitrusting van haltes',
      link: 'https://www.vlaanderen.be/subsidies-voor-het-toegankelijk-aanleggen-of-herinrichten-van-haltes-en-de-uitrusting-van-haltes',
      favorite: 'true',
      type: 'Subsidie',
      description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
    },
    {
      name: 'Lokaal Energie- en Klimaatpact 2.0',
      link: 'https://www.vvsg.be/kennisitem/vvsg/lokaal-energie-en-klimaatpact',
      deadline: '06 december 2023',
      favorite: 'true',
      type: 'Subsidie',
      description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
    },
    {
      name: 'Lokaal Energie- en Klimaatpact 1.0',
      link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
      deadline: '06 december 2023',
      favorite: 'true',
      type: 'Subsidie',
      description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
    },
  ];
}
