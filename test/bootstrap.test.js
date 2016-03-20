'use strict';

var Sails = require('sails');
var Barrels = require('barrels');

// Global before hook
before(function(done) {

  // Lift Sails with test database
  Sails.lift({
    port: 5678,
    hooks: {
      grunt: false,
      session: false,
      views: false
    }
  }, function(err, sails) {
    if (err) {
      return done(err);
    }

    // Load fixtures
    var barrels = new Barrels(process.cwd() + '/test/fixtures/models');

    // Populate the DB
    barrels.populate(['car', 'fillup'], function(err) {
      done(err, sails);
    });
  });
});

// Global after hook
after(function(done) {
  // here you can clear fixtures, etc.
  Sails.lower(done);
});
