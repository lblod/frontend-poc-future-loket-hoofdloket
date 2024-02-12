import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
const { mySubsidiesData } = require('../mySubsidies');

export default class CasesSearchController extends Controller {
  @tracked dateFilter = false;

  @action toggleDateFilter() {
    this.dateFilter = !this.dateFilter;
  }

  subsidies = mySubsidiesData;
  // subsidies = [
  //   {
  //     name: 'Beurs lokaal bestuurlijk talent',
  //     link: '#!',
  //     deadline: '31 januari 2024',
  //     type: 'Premie',
  //     description: 'De toekomst is lokaal. Om die te vrijwaren moeten we het lokale bestuursniveau versterken en dat vereist een sterk management. Deze beurs financiert gedeeltelijk masteropleidingen in management voor lokale personeelsleden met managementtalent zodat zij voldoende kansen krijgen om door te groeien binnen hun lokale of provinciale bestuur',
  //     status: "Goedgekeurd"
  //   },
  //   {
  //     name: 'Klacht dossiernummer 2023.0015',
  //     link: '#!',
  //     deadline: '20 december 2023',
  //     type: 'Klacht',
  //     description: 'Klacht tegen gemeenteraadsbeslissing dd. 03/11/2023',
  //     status: "Wachten op antwoord"
  //   },
  //   {
  //     name: 'Tuchtonderzoek tegen dhr. Danneels',
  //     link: '#!',
  //     deadline: '20 januari 2023',
  //     type: 'Tucht',
  //     description: 'Tuchtonderzoek in kader van het Decreet Lokaal Bestuur',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Erfgoedpremie voor beschermde monumenten en landschappen',
  //     link: '#!',
  //     type: 'Premie',
  //     description: 'Wanneer uw onroerend goed, gelegen in het Vlaamse Gewest, beschermd is als monument of landschap, kunt u in aanmerking komen voor de Vlaamse erfgoedpremie',
  //     status: "Concept"
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 2.0',
  //     link: 'https://www.vvsg.be/kennisitem/vvsg/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     favorite: true,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 1.0',
  //     link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     favorite: true,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Opknapwerken slaapplekken Oekraïne',
  //     link: 'https://www.vlaanderen.be/vlaanderen-helpt-oekraine/financiering',
  //     deadline: '31 mei 2024',
  //     favorite: false,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Subsidie voor Hoppinpunten',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-de-aanleg-of-herinrichting-van-een-hoppinpunt',
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Subsidie voor het toegankelijk aanleggen of herinrichten van haltes en de uitrusting van haltes',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-het-toegankelijk-aanleggen-of-herinrichten-van-haltes-en-de-uitrusting-van-haltes',
  //     favorite: true,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 2.0',
  //     link: 'https://www.vvsg.be/kennisitem/vvsg/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     favorite: false,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 1.0',
  //     link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     favorite: false,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Opknapwerken slaapplekken Oekraïne',
  //     link: 'https://www.vlaanderen.be/vlaanderen-helpt-oekraine/financiering',
  //     deadline: '31 mei 2024',
  //     favorite: false,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Subsidie voor Hoppinpunten',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-de-aanleg-of-herinrichting-van-een-hoppinpunt',
  //     favorite: false,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  //   {
  //     name: 'Subsidie voor het toegankelijk aanleggen of herinrichten van haltes en de uitrusting van haltes',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-het-toegankelijk-aanleggen-of-herinrichten-van-haltes-en-de-uitrusting-van-haltes',
  //     favorite: false,
  //     type: 'Subsidie',
  //     description: 'Beheer uw lokale producten en diensten',
  //     status: "In behandeling"
  //   },
  // ];
}
