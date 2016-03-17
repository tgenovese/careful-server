'use strict';

var request = require('supertest');

describe('res', function() {

  before('setup route', function() {
    sails.get('/response/created', function(req, res) {
      res.created();
    });
  });

  describe('#created()', function() {
    it('should respond with 201 Created', function(done) {
      request(sails.hooks.http.app)
        .get('/response/created')
        .expect(201, done);
    });
  });

});
