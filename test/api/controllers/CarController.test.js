'use strict';

var expect = require('chai').expect;
var request = require('supertest');

describe('CarController', function() {

  describe('#find()', function() {
    it('should respond with a list of cars', function(done) {
      request(sails.hooks.http.app)
        .get('/car')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).to.be.instanceof(Array)
            .and.have.length(2);
        })
        .end(done);
    });
  });

  describe('#populate()', function() {
    it('should respond with a list of fill-ups', function(done) {
      request(sails.hooks.http.app)
        .get('/car/2/fillUps')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).to.be.instanceof(Array)
            .and.have.length(3);
        })
        .end(done);
    });
  });

  describe('#addTo()', function() {
    it('should add a fill-up to the list and respond with a car', function(done) {
      request(sails.hooks.http.app)
        .post('/car/1/fillUps')
        .send({
          car: 1,
          when: '2016-03-16T21:54:00.000Z',
          volume: 32,
          price: 45,
          distanceCovered: 400,
          fullTank: true
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).to.be.an('object')
            .and.contain.all.keys('make', 'model', 'firstRegistration');
          expect(res.body.fillUps).to.be.instanceof(Array)
            .and.have.length(2);
        })
        .end(done);
    });
  });

});
