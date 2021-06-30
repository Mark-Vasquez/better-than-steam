"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Upvotes",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				userId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Users" },
					unique: "unique-upvote",
				},
				gameId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Games" },
					unique: "unique-upvote",
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			},
			{
				uniqueKeys: {
					"unique-upvote": {
						fields: ["userId", "gameId"],
					},
				},
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Upvotes");
	},
};
