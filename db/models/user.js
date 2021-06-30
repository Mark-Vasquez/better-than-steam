"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			username: {
				type: DataTypes.STRING(50),
				allowNull: false,
				validate: {
					notNull: true,
				},
			},
			email: {
				type: DataTypes.STRING(50),
				allowNull: false,
				validate: {
					notNull: true,
					isEmail: true,
				},
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					notNull: true,
				},
			},
		},
		{}
	);
	User.associate = function (models) {
		User.hasMany(models.Comment, { foreignKey: "userId" });
		User.hasMany(models.Like, { foreignKey: "userId" });
		User.hasMany(models.Upvote, { foreignKey: "userId" });
	};
	return User;
};
