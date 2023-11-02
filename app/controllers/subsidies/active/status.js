import Controller from '@ember/controller';

export default class SubsidiesActiveStatusController extends Controller {

  news = [
    {
      title: 'Aanvraag word verwerkt',
      date: '22/10/23',
      icon: 'subsidies',
      new: true,
    },
    {
      title: 'Aanvraag ingediend',
      date: '20/10/23',
      icon: 'subsidies',
      new: false,
    }
  ];
}
