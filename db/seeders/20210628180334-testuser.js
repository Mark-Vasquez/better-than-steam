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
      },
      {
        username: 'DemoUser',
        email: 'demouser@gmail.com',
        hashedPassword: '$2a$10$XGk45d35GmLIitWEfQQnwe/CgC3XUa5gjsV4gwZfzzvNeyHrP0MaS',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
