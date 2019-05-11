'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    target: DataTypes.STRING,
    notificationTime: DataTypes.TIME
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};