"use strict";
module.exports = (sequelize, DataTypes) => {
	const Upvote = sequelize.define(
		"Upvote",
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: true,
				},
			},
			gameId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: true,
				},
			},
		},
		{}
	);
	Upvote.associate = function (models) {
		Upvote.belongsTo(models.User, { foreignKey: "userId" });
		Upvote.belongsTo(models.Game, { foreignKey: "gameId" });
	};
	return Upvote;
};
