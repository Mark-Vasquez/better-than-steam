'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(50),
      validate: {
        // notNull: true,
      }
    },
    email: {
      type: DataTypes.STRING(50),
      validate: {
        // notNull: true,
        isEmail: true,
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      validate: {
        // notNull: true,
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
