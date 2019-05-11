'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      region: DataTypes.STRING,
      birthday: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
