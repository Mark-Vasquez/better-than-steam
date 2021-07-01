"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
          */
		return queryInterface.bulkInsert(
			"Comments",
			[
				{
					content: "Hello",
					userId: 1,
					gameId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					content: "This game sucks!",
					userId: 1,
					gameId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
	  */
		return queryInterface.bulkDelete("Comments", null, {});
	},
};
