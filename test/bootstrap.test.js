'use strict';

var Sails = require('sails');
var rc = require('rc');

// Global before hook
before(function(done) {
  // Lift Sails with test database
  Sails.lift(rc('sails'), done);
});

// Global after hook
after(function(done) {
  // here you can clear fixtures, etc.
  Sails.lower(done);
});
