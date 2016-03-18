'use strict';

/**
 * Test environment settings.
 */

module.exports = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/

  connections: {
    memoryDb: {
      adapter: 'sails-memory'
    }
  },

  /***************************************************************************
   * Set the default database connection for models in the test              *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'memoryDb',
    migrate: 'drop'
  }

};
