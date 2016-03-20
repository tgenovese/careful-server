'use strict';

var expect = require('chai').expect;

describe('Car', function() {

  describe('#find()', function() {
    it('should return a list of cars', function(done) {
      Car.find()
        .then(function(results) {
          expect(results).to.have.length(2);
          done();
        })
        .catch(done);
    });
  });

});
