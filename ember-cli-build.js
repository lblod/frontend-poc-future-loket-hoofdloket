'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    '@appuniversum/ember-appuniversum': {
      dutchDatePickerLocalization: true,
      disableWormholeElement: true,
    },
    svgJar: {
      sourceDirs: [
        'node_modules/@appuniversum/ember-appuniversum/public/icons',
        'public/icons',
      ],
    },
    sassOptions: {
      includePaths: ['node_modules/@appuniversum/ember-appuniversum'],
    },
  });

  return app.toTree();
};
