'use strict';

const { voteSeedDataArr } = require('../../generateData')
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Upvotes', voteSeedDataArr, {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Upvotes', null, {});

  }
};
