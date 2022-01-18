
const { User, Bill, Category } = require('../models')
const { Op, literal, fn, col, EmptyResultError } = require('sequelize')

const GetAllBills = async (req, res) => {
    try {
        const all = await bills.findAll({
            attributes: [
                'id',
                'title',
                'primarySubject',
                'latestActionDate'

            ],
        })
        res.send(all)
    } catch (error) {
        throw error
    }
},

const GetBillsById = async (req, res) => {
    try {
        const billsById = await bills.findAll({ order: [['created_at', 'DESC']] })
        res.send(billsById)
    } catch (error) {
        throw error
    }
}






module.exports = {
    GetAllBills,
    GetBillsById

}

module.exports = {}