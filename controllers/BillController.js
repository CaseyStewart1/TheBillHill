const { Bill, User } = require('../models');

const GetAllBills = async (req, res) => {
  try {
    const response = await Bill.findAll({include: User});
    res.send(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllBills
};

// FAKE CODE!!!!!
