'use strict';

const bills = [
  {
    title: 'Efficient Use of Government Spectrum Act of 2013',
    bill: 'hr2739-113',
    url: 'https://www.congress.gov/bill/113th-congress/house-bill/2739',
    subject: 'Science, Technology, Communications',
    userId: 1,
    categoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Wireless Innovation Act of 2014',
    bill: 's2473-113',
    url: 'https://www.congress.gov/bill/113th-congress/senate-bill/2473',
    subject: 'Science, Technology, Communications',
      userId: 2,
      categoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title:
      'Reducing Employer Burdens, Unleashing Innovation, and Labor Development Act of 2013',
    bill: 'hr3355-113',
    url: 'https://www.congress.gov/bill/113th-congress/house-bill/3355',
    subject: 'Economics and Public Finance',
      userId: 3,
      categoryId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Promoting Unlicensed Spectrum Act of 2015',
    bill: 's2278-114',
    url: 'https://www.congress.gov/bill/114th-congress/senate-bill/2278',
    subject: 'Science, Technology, Communications',
      userId: 4,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    title: 'MOBILE NOW Act',
    bill: 's2555-114',
    url: 'https://www.congress.gov/bill/114th-congress/senate-bill/2555',
    subject: 'Science, Technology, Communications',
      userId: 4,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    title: 'Wireless Innovation Act of 2015',
    bill: 's1618-114',
    url: 'https://www.congress.gov/bill/114th-congress/senate-bill/1618',
    subject: 'Science, Technology, Communications',
      userId: 5,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    title: 'FCC Reauthorization Act of 2016',
    bill: 's2644-114',
    url: 'https://www.congress.gov/bill/114th-congress/senate-bill/2644',
    subject: 'Science, Technology, Communications',
      userId: 1,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    title: 'Bipartisan Budget Act of 2015',
    bill: 'hr1314-114',
    url: 'https://www.congress.gov/bill/114th-congress/house-bill/1314',
    subject: 'Economics and Public Finance',
    userId: 2,
    categoryId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'MOBILE NOW Act',
    bill: 's19-115',
    url: 'https://www.congress.gov/bill/115th-congress/senate-bill/19',
    subject: 'Science, Technology, Communications',
      userId: 3,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    title: 'Coast Guard Authorization Act of 2017',
    bill: 's1129-115',
    url: 'https://www.congress.gov/bill/115th-congress/senate-bill/1129',
    subject: 'Public Lands and Natural Resources',
      userId: 4,
      categoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    title: 'FCC Reauthorization Act of 2016',
    bill: 's2644-114',
    url: 'https://www.congress.gov/bill/114th-congress/senate-bill/2644',
    subject: 'Science, Technology, Communications',
      userId: 5,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bills', bills, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bills', null, {})
  }
};