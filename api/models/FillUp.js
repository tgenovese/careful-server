'use strict';

/**
 * Server-side model for fill-ups
 * @see {@link http://sailsjs.org/documentation/concepts/models-and-orm}
 */
module.exports = {

  attributes: {

    car: {
      model: 'car',
      required: true
    },

    when: {
      type: 'datetime',
      required: true
    },

    volume: {
      type: 'float',
      required: true
    },

    price: {
      type: 'float'
    },

    distanceCovered: {
      type: 'float'
    },

    fullTank: {
      type: 'boolean'
    }
  }
};
