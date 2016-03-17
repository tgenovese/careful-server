'use strict';

var request = require('supertest');

describe('res', function() {

  before('setup route', function() {
    sails.get('/response/serverError', function(req, res) {
      res.serverError({code: 'TESTING'});
    });
  });

  describe('#serverError()', function() {
    it('should respond with 500 Server Error', function(done) {
      request(sails.hooks.http.app)
        .get('/response/serverError')
        .set('Accept', 'application/json')
        .expect(500, {code: 'TESTING'}, done);
    });
  });

});
