'use strict';

var request = require('supertest');

describe('res', function() {

  before('setup route', function() {
    sails.get('/response/badRequest', function(req, res) {
      res.badRequest();
    });
  });

  describe('#badRequest()', function() {
    it('should respond with 400 Bad Request', function(done) {
      request(sails.hooks.http.app)
        .get('/response/badRequest')
        .expect(400, done);
    });
  });

});
