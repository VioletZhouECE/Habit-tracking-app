module.exports = function( sequelize, DataTypes ) {
  var User = sequelize.define(
   'user',
   {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW'),
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW'),
      allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique : true,
        allowNull: false,
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  console.log(sequelize.models)

  return User;
};