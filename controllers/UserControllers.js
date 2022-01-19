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

const CreateUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({ where: { id: userId } });
    res.send({ message: `Deleted user with an id of ${userId} ` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetUserById,
  UpdateUser,
  DeleteUser,
  CreateUser
};
