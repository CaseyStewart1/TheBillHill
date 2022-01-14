'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      billNumber: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      sponsorName: {
        type: Sequelize.STRING
      },
      sponsorId: {
        type: Sequelize.STRING
      },
      sponsorParty: {
        type: Sequelize.STRING
      },
      introduced: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      committees: {
        type: Sequelize.STRING
      },
      primmarySubject: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      summaryShort: {
        type: Sequelize.STRING
      },
      latestActionDate: {
        type: Sequelize.STRING
      },
      latestAction: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bills');
  }
};