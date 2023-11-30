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

  subsidies = [
    {
      name: 'Lokaal Energie- en Klimaatpact 1.0',
      periode: '2022',
      'periode-detail': '01 november 2022 – 31 december 2023',
      link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
      deadline: '06 december 2023',
      category: 'Milieu',
      favorite: 'true',
      type: 'Subsidie',
    },
    {
      name: 'Opknapwerken slaapplekken Oekraïne',
      periode: 'Oproep',
      'periode-detail': '14 maart 2022 – 31 mei 2024',
      link: 'https://www.vlaanderen.be/vlaanderen-helpt-oekraine/financiering',
      deadline: '31 mei 2024',
      category: 'Sociaal',
      favorite: 'true',
      type: 'Subsidie',
    },
    {
      name: 'Subsidie voor Hoppinpunten',
      periode: 'Oproep',
      'periode-detail': 'Aanvragen doorlopend mogelijk',
      link: 'https://www.vlaanderen.be/subsidies-voor-de-aanleg-of-herinrichting-van-een-hoppinpunt',
      category: 'Sociaal',
      favorite: 'true',
      type: 'Subsidie',
    },
    {
      name: 'Subsidie voor het toegankelijk aanleggen of herinrichten van haltes en de uitrusting van haltes',
      periode: 'Oproep',
      'periode-detail': 'Aanvragen doorlopend mogelijk',
      link: 'https://www.vlaanderen.be/subsidies-voor-het-toegankelijk-aanleggen-of-herinrichten-van-haltes-en-de-uitrusting-van-haltes',
      category: 'Infrastructuur',
      favorite: 'true',
      type: 'Subsidie',
    },
    {
      name: 'Lokaal Energie- en Klimaatpact 2.0',
      periode: '2022',
      'periode-detail': '01 november 2022 – 31 december 2023',
      link: 'https://www.vvsg.be/kennisitem/vvsg/lokaal-energie-en-klimaatpact',
      deadline: '06 december 2023',
      category: 'Milieu',
      favorite: 'true',
      type: 'Subsidie',
    },
    {
      name: 'Lokaal Energie- en Klimaatpact 1.0',
      periode: '2022',
      'periode-detail': '01 november 2022 – 31 december 2023',
      link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
      deadline: '06 december 2023',
      category: 'Milieu',
      favorite: 'true',
      type: 'Subsidie',
    },
  ];
}
