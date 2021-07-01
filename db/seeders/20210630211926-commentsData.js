
'use strict';
const { commentSeedDataArr } = require('../../generateData')

const commentSeedData = commentSeedDataArr

commentSeedData.unshift(
  { content: "Hello", userId: 1, gameId: 2, createdAt: new Date(), updatedAt: new Date() },
  { content: "This game sucks!", userId: 1, gameId: 2, createdAt: new Date(), updatedAt: new Date() }
)


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
          */
      //keep userId = 1 constant to avoid reseeding id resetting
      return queryInterface.bulkInsert('Comments', commentSeedData, {});

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('Comments', null, {});

  }
};
