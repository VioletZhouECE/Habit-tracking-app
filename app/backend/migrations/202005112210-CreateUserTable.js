module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('User', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW'),
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW'),
          allowNull: false
        },
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
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('User');
    }
  };