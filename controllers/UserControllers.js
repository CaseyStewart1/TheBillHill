const { User, Bill } = require('../models');

const GetAllUsers = async (req, res) => {
  try {
    const response = await User.findAll({include: Bill});
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const GetUser = async (req, res) => {
  try {
    const response = await User.findOne({include: Bill})
    res.send(response)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const response = await User.findByPk(req.params.id); 
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    const response = await User.create({...req.body});
    console.log(`created ${response}`)
    res.send(response);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
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
    let userId = parseInt(req.params.id);
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
  CreateUser,
  GetUser
};
