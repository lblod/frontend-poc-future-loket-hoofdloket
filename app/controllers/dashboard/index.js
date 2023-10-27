import Controller from '@ember/controller';

export default class DashboardSearchController extends Controller {
  news = [
    {
      title: 'Voor kinderen met een beperking',
      date: '22/10/23',
      icon: 'subsidies',
      new: true,
    },
    {
      title: 'This is an important message you want to read',
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