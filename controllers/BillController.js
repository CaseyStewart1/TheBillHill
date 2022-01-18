const { Bill } = require('../models')

const GetAllBills = async (req, res) => {
    try {
        const response = await Bill.findAll()
        res.send(response)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllBills
}