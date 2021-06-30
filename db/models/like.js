"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {}
  );
  Like.associate = function (models) {
    Like.belongsTo( models.User, { foreignKey: "userId" });
    Like.belongsTo( models.Comment, { foreignKey: "commentId" });
  };
  return Like;
};
