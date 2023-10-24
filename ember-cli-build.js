'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        extension: 'scss',
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
          }
        ],
      },
    },
    '@appuniversum/ember-appuniversum': {
      disableWormholeElement: true,
    },
  });

  return app.toTree();
};
