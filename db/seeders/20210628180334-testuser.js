'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        username: 'testuser1',
        email: 'testemail@gmail.com',
        hashedPassword: '$2a$10$Ck8fXi/HCH7Bf8j4/rE2qu9Qq3oW3iRsRjMyjHAka6wwgk/EcCZCi',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
