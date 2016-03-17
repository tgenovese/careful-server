'use strict';

var request = require('supertest');

describe('res', function() {

  before('setup route', function() {
    sails.get('/response/ok', function(req, res) {
      res.ok();
    });
  });

  describe('#ok()', function() {
    it('should respond with 200 OK', function(done) {
      request(sails.hooks.http.app)
        .get('/response/ok')
        .expect(200, done);
    });
  });

});
