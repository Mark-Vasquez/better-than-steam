"use strict";
module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define(
		"Game",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
				},
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: { notNull: true },
			},
			imageUrl: DataTypes.STRING(400),
			publisher: DataTypes.STRING,
			genre: DataTypes.STRING(50),
			snippet: DataTypes.STRING,
		},
		{}
	);
	Game.associate = function (models) {
		// associations can be defined here
	};
	return Game;
};
