const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
    username: {
        type: Sequelize.DataTypes.STRING,
        unique : true,
        allowNull: false,
    }, 
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    money: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    }
}, {
  sequelize, 
  modelName: 'User',
  tableName: 'User'
});