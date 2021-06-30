'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
          */
      return queryInterface.bulkInsert('Comments', [
        { content: "Hello", userId: 3, gameId: 23, createdAt: new Date(), updatedAt: new Date() },
        { content: "This game sucks!", userId: 3, gameId: 23, createdAt: new Date(), updatedAt: new Date() }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
