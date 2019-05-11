'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    phonenumber: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    target: DataTypes.STRING,
    notificationTime: DataTypes.INTEGER
  }, {});
  Event.associate = function (models) {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id'
    });
    Event.hasMany(models.Message, {
      foreignKey: 'eventId',
      sourceKey: 'id'
    });
  };
  return Event;
};