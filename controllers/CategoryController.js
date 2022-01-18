const { Category } = require('../models')

const GetALLCategories = async (req, res) => {
    try {
        const response = await Category.findAll()
        res.send(response)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetALLCategories
}