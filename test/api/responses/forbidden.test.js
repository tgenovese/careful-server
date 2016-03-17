'use strict';

var request = require('supertest');

describe('res', function() {

  before('setup route', function() {
    sails.get('/response/forbidden', function(req, res) {
      res.forbidden();
    });
  });

  describe('#forbidden()', function() {
    it('should respond with 403 Forbidden', function(done) {
      request(sails.hooks.http.app)
        .get('/response/forbidden')
        .expect(403, done);
    });
  });

});
