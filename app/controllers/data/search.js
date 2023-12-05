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
      name: 'Primaire Contactgegevens',
      description: 'Alle contactgegevens',
      date: '22/11/2023',
      person: 'Pieter',
    },
    {
      name: 'Financiële gegevens',
      description: 'Alle financiële gegevens',
      date: '22/11/2023',
      person: 'Pieter',
    },
    {
      name: 'Leden gemeenteraad',
      description: 'Overzicht van alle leden van de gemeenteraad',
      date: '22/11/2023',
      person: 'Pieter',
    },
    {
      name: 'Protocol tussen Agentschap Zorg en Gezondheid en het gemeentebestuur voor de elektronische melding van persoonsgegevens',
      description: 'Afspraken met anderen',
      date: '22/11/2023',
      person: 'Pieter',
    },
    {
      name: 'Protocol tussen gemeentebestuur en politiezone voor de elektronische mededeling van persoonsgegevens',
      description: 'Afspraken met anderen',
      date: '22/11/2023',
      person: 'Pieter',
    },
  ];
}
