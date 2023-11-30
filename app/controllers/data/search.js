import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DataSearchController extends Controller {
  @tracked dateFilter = false;

  @action toggleDateFilter() {
    this.dateFilter = !this.dateFilter;
  }

  data = [
    {
      name: 'Financiële gegevens',
      description: 'Alle financiële gegevens',
      date: '22/11/2023',
      person: 'Pieter',
    },
    {
      name: 'Leden provincieraad',
      description: 'Overzicht van alle leden van de provincieraad',
      date: '22/11/2023',
      person: 'Pieter',
    },
    {
      name: 'Protocollen met erediensten',
      description: 'Afspraken met anderen',
      date: '22/11/2023',
      person: 'Pieter',
    },
  ];
}
