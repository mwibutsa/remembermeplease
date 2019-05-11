'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'Message',
    {
      content: DataTypes.STRING,
      time: { type: DataTypes.DATE, defaultValue: new Date() },
      eventId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      draft: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {}
  );
  Message.associate = function(models) {
    Message.belongsTo(models.Event, {
      foreignKey: 'eventId',
      targetKey: 'id',
    });
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };
  return Message;
};
