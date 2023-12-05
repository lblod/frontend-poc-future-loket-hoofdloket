import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MessagesSearchController extends Controller {
  @tracked dateFilter = false;

  @action toggleDateFilter() {
    this.dateFilter = !this.dateFilter;
  }

  data = [
    {
      name: 'Oproep gebruik TikTok bij lokale besturen',
      date: '22/11/2023',
    },
    {
      name: 'Nieuwe omzendbrief kinderopvang',
      date: '22/11/2023',
    },
    {
      name: 'Resultaten Cyber-Audit van uw gemeente',
      date: '22/11/2023',
    },
    {
      name: 'Opvragingsbrief klacht Jan Desmet',
      date: '22/11/2023',
    },
    {
      name: 'Richtlijnen rond Corona',
      date: '22/11/2023',
    },
  ];
}
