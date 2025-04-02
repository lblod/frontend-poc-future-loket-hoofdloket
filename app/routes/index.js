import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    return [
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/berichtencentrum",
        },
        name: { default: "Berichtencentrum" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/beleids-en-beheerscyclus-digitale-rapportering-bbc-dr",
        },
        name: { default: "BBC-DR" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/mandatenbeheer-lokale-besturen",
        },
        name: { default: "Mandatenbeheer" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/subsidiebeheer",
        },
        name: { default: "SubsidiePunt" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/data-en-tools/databank-erediensten",
        },
        name: { default: "Databank Erediensten" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/organisatie-en-werking/loket-voor-lokale-besturen",
        },
        name: { default: "Verenigingen" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/berichtencentrum",
        },
        name: { default: "Berichtencentrum" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/beleids-en-beheerscyclus-digitale-rapportering-bbc-dr",
        },
        name: { default: "BBC-DR" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/mandatenbeheer-lokale-besturen",
        },
        name: { default: "Mandatenbeheer" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/loket-voor-lokale-besturen/subsidiebeheer",
        },
        name: { default: "SubsidiePunt" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/data-en-tools/databank-erediensten",
        },
        name: { default: "Databank Erediensten" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/organisatie-en-werking/loket-voor-lokale-besturen",
        },
        name: { default: "Verenigingen" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/data-en-tools/databank-erediensten",
        },
        name: { default: "Databank Erediensten" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/organisatie-en-werking/loket-voor-lokale-besturen",
        },
        name: { default: "Verenigingen" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/data-en-tools/databank-erediensten",
        },
        name: { default: "Databank Erediensten" }
      },
      {
        website: {
          url: "https://www.vlaanderen.be/lokaal-bestuur/organisatie-en-werking/loket-voor-lokale-besturen",
        },
        name: { default: "Verenigingen" }
      },
    ];
    // TODO add filter on is-favorite
    // return this.store.query('public-service', {
    //   page: {
    //     size: 10,
    //     number: 0
    //   }
    // });
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.searchTerm = null;
  }
}
