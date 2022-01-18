'use strict';
const category = [
  {
    primarysubject: 'Armed Forces and National Security',
    description:
      'Bills pertaining to the protection of the nation and its people from attack and other external dangers by maintaining armed forces and guarding state secrets.',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    primarysubject: 'Science, Technology, Communications',
    description:
      'Bills pertaining to furthering the technologocial strength and competitive edge in these fields.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'International Affairs',
    description:
      'Bills pertaining to events and activities that involve the governments, politics, economies, etc. of different countries.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'Health',
    description: 'Bills pertaining to citizens health and well-being.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'Government Operations and Politics',
    description: 'Local government operations as well as campaign regulations',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    primarysubject: 'Law',
    description: 'legal code to protect ciitizens and state',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'Native Americans',
    description:
      'Bills pertaining to the relations with native american nations',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'Crime and Law Enforcement',
    description: 'Bills pertaining to the exocution of law',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'Economics and Public Finance',
    description: 'Bills pertaining to state of the nations economy and wealth',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    primarysubject: 'Public Lands and Natural Resources',
    description: 'Bills pertaining to public and private lands and resources',
    createdAt: new Date(),
    updatedAt: new Date()
  },

];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', category, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
