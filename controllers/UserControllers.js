const { User } = require('../models')

const GetAllUsers = async (req, res) => {
    try {
        const response = await User.findAll()
        res.send(response)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllUsers
}