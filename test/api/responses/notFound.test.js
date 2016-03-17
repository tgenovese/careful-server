'use strict';

var request = require('supertest');

describe('res', function() {

  before('setup route', function() {
    sails.get('/response/notFound', function(req, res) {
      res.notFound();
    });
  });

  describe('#notFound()', function() {
    it('should respond with 404 Not Found', function(done) {
      request(sails.hooks.http.app)
        .get('/response/notFound')
        .expect(404, done);
    });
  });

});
