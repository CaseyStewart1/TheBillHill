const { User } = require('../models')


const GetAllUsers = async (req, res) => {
    try {
        const all = await User.findAll()
        res.send(all)
    } catch (error) {
        throw error
    }
},

const GetUserDetails = async (req, res) => {
    try {
      const userDetails = await User.findByPk(req.params.user_id)
      res.send(userDetails)
    } catch (error) {
      throw error
    }
  },
  
  const CreateUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let userBody = {
        userId,
        ...req.body
      }
      let user = await User.create(userBody)
      res.send(user)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let updatedUser = await User.update(req.body,{
        where: {id: userId},
        returning: true
      })
      res.send(updatedUser)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      await User.destroy({where: {id: userId}})
      res.send({message:`Deleted user with an id of ${userId} `})
    } catch (error) {
      throw error
    }
  }




module.exports = {
    GetAllUsers,
    GetUserDetails,
    CreateUser,
    UpdateUser,
    DeleteUser

}

