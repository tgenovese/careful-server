'use strict';

var expect = require('chai').expect;

describe('FillUp', function() {

  describe('#find()', function() {
    it('should return a list of fill-ups', function(done) {
      FillUp.find()
        .then(function(results) {
          expect(results).to.have.length(5);
          done();
        })
        .catch(done);
    });
  });

});
