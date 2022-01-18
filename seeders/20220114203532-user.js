'use strict';
const user = [
  {
    name: 'Bob',
    email: 'bob@bob.com',
    username: 'bob99',
    state: 'MA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'James',
    email: 'james@bob.com',
    username: 'james99',
    state: 'NH',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Roxanne',
    email: 'fake@bob.com',
    username: 'RXY',
    state: 'CA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dean',
    email: 'DD@gmail.com',
    username: 'imdone',
    state: 'NH',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Bobby',
    email: 'rickybobby@gmail.com',
    username: 'rickyBobby',
    state: 'VA',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', user, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
