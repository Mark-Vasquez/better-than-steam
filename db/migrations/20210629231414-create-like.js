"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Likes",
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
					unique: "unique-like",
				},
				commentId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Comments" },
					unique: "unique-like",
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
					"unique-like": {
						fields: ["userId", "commentId"],
					},
				},
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Likes");
	},
};
