'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bill.init({
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
    latestAction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bill',
  });
  return bill;
};