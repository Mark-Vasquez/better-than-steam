"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface
			.createTable("Comments", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				content: {
					allowNull: false,
					type: Sequelize.TEXT,
				},
				userId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Users" },
				},
				gameId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Games" },
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			})
			.then(() => queryInterface.addIndex("Comments", ["gameId"]));
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Comments");
	},
};
