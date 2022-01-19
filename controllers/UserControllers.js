const { User } = require('../models');

const GetAllUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const GetUserById = async (req, res) => {
  try {
    const response = await User.findById();
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    const response = await User.update();
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    const response = await User.delete();
    res.send(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetUserById,
  UpdateUser,
  DeleteUser
};
