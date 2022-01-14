'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.User, {
        foreignKey: 'userId',
      })

      Bill.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      })

    }
  };
  Bill.init({
    title: DataTypes.STRING,
    billNumber: DataTypes.STRING,
    url: DataTypes.STRING,
    sponsorName: DataTypes.STRING,
    sponsorId: DataTypes.STRING,
    sponsorParty: DataTypes.STRING,
    introduced: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    committees: DataTypes.STRING,
    primmarySubject: DataTypes.STRING,
    summary: DataTypes.STRING,
    summaryShort: DataTypes.STRING,
    latestActionDate: DataTypes.STRING,
    latestAction: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id'
      }
    },
  },
    {
      sequelize,
      modelName: 'Bill',
      tableName: 'bills'
    });
  return Bill;
};