import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { isPresent } from '@ember/utils';
import constants from '../config/constants';
import search, { langStringResourceFormat } from '../utils/mu-search';

const { TARGET_AUDIENCES } = constants;

export default class SearchRoute extends Route {
  @service store;
  @service fastboot;

  queryParams = {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    },
    searchTerm: {
      refreshModel: true
    },
    themes: {
      refreshModel: true
    },
    types: {
      refreshModel: true
    },
    authorities: {
      refreshModel: true
    },
    isFavorite: {
      refreshModel: true
    },
  };

  async model(params) {
    const targetAudiences = await Promise.all([
      this.store.findRecordByUri('concept', TARGET_AUDIENCES.LOCAL_GOVERNMENT),
      this.store.findRecordByUri('concept', TARGET_AUDIENCES.ORGANIZATION)
    ]);

    const filter = {
      'targetAudiences.uuid': targetAudiences.map((c) => c.id).join(','),
    };

    this.searchTerm = params.searchTerm;
    filter[':sqs:name.nl^3,description.nl'] = isPresent(params.searchTerm)
      ? params.searchTerm
      : '*';

    // these params are filters for conceptSchemes that are referred to
    // by the actual concept via 'broader'
    this.themeRecords = [];
    if (params.themes.length) {
      this.themeRecords = await Promise.all(
        params.themes.map((id) => this.store.findRecord('concept', id))
      );
      filter['thematicAreas.broader.uuid'] = this.themeRecords.map((c) => c.id).join(',');
    }

    this.authorityRecords = [];
    if (params.authorities.length) {
      this.authorityRecords = await Promise.all(
        params.authorities.map((id) => this.store.findRecord('concept', id))
      );
      filter['competentAuthorityLevels.broader.uuid'] = this.authorityRecords.map((c) => c.id).join(',');
    }

    this.typeRecords = [];
    if (params.types.length) {
      this.typeRecords = await Promise.all(
        params.types.map((id) => this.store.findRecord('concept', id))
      );
      filter['type.broader.uuid'] = this.typeRecords.map((c) => c.id).join(',');
    }

    if (this.fastboot.isFastBoot) {
      // TODO: make search util handle FastBoot where window.location is not available
      return [];
    } else {
      return search('public-services', params.page, params.size, params.sort, filter, ({ id, attributes }) => {
        const product = attributes;
        product.id = id;
        ['name', 'description'].forEach((attr) => {
          product[attr] = langStringResourceFormat(product[attr]);
        });
        ['dateCreated', 'dateModified', 'startDate', 'endDate'].forEach((attr) => {
          const dateStr = product[attr];
          product[attr] = dateStr ? new Date(Date.parse(dateStr)) : null;
        });
        ['thematicAreas', 'componentAuthorityLevels'].forEach((attr) => {
          const value = product[attr];
          product[attr] = value
            ? Array.isArray(value) ? value : [value]
            : [];
        });
        return product;
      });
    }
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.themeRecords = this.themeRecords || [];
    controller.typeRecords = this.typeRecords || [];
    controller.authorityRecords = this.authorityRecords || [];
    controller.searchTermBuffer = this.searchTerm;
  }
}
