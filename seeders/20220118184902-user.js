'use strict';

const users = [
  {
    name: 'Bob',
    email: 'bob@bob.com',
    userName: 'bob99',
    location: 'MA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'James',
    email: 'james@bob.com',
    userName: 'james99',
    location: 'NH',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Roxanne',
    email: 'fake@bob.com',
    userName: 'RXY',
    location: 'CA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dean',
    email: 'DD@gmail.com',
    userName: 'imdone',
    location: 'NH',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Bobby',
    email: 'rickybobby@gmail.com',
    userName: 'rickyBobby',
    location: 'VA',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
