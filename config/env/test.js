'use strict';

/**
 * Test environment settings.
 */

module.exports = {

  /*
   * Set up an in-memory database
   */
  connections: {
    memoryDb: {
      adapter: 'sails-memory'
    }
  },

  /*
   * Use the in-memory database for all models
   */
  models: {
    connection: 'memoryDb',
    migrate: 'drop'
  },

  /*
   * Use a different port so that tests can run alongside the application
   */
  port: 5678,

  /*
   * Load fixtures on lift
   */
  bootstrap: function(cb) {
    var Barrels = require('barrels'); // eslint-disable-line global-require
    var barrels = new Barrels(process.cwd() + '/test/fixtures/models');
    barrels.populate(['car', 'fillup'], function(err) {
      if (err) {
        throw err;
      }
      cb();
    });
  }

};
