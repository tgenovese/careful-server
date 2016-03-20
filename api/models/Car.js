'use strict';

/**
 * Server-side model for cars
 * @see {@link http://sailsjs.org/documentation/concepts/models-and-orm}
 */
module.exports = {

  attributes: {

    make: {
      type: 'string',
      required: true
    },

    model: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    },

    picture: {
      type: 'string'
    },

    firstRegistration: {
      type: 'date',
      required: true
    },

    boughtOn: {
      type: 'date',
      required: true
    },

    initialMileage: {
      type: 'integer',
      required: true
    },

    registrationNumber: {
      type: 'string',
      required: true
    },

    soldOn: {
      type: 'date'
    },

    finalMileage: {
      type: 'integer'
    },

    // Add a reference to fill-ups
    fillUps: {
      collection: 'fillUp',
      via: 'car'
    }
  }
};
