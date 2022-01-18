'use strict';

const categories = [
  {
    category: 'Armed Forces and National Security',
    description:
      'Bills pertaining to the protection of the nation and its people from attack and other external dangers by maintaining armed forces and guarding state secrets.',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    category: 'Science, Technology, Communications',
    description:
      'Bills pertaining to furthering the technologocial strength and competitive edge in these fields.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'International Affairs',
    description:
      'Bills pertaining to events and activities that involve the governments, politics, economies, etc. of different countries.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Health',
    description: 'Bills pertaining to citizens health and well-being.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Government Operations and Politics',
    description: 'Local government operations as well as campaign regulations',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    category: 'Law',
    description: 'legal code to protect ciitizens and state',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Native Americans',
    description:
      'Bills pertaining to the relations with native american nations',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Crime and Law Enforcement',
    description: 'Bills pertaining to the exocution of law',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Economics and Public Finance',
    description: 'Bills pertaining to state of the nations economy and wealth',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Public Lands and Natural Resources',
    description: 'Bills pertaining to public and private lands and resources',
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', categories, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
};
