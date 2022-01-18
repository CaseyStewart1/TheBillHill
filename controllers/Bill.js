
const { Bill } = require('../models')


const GetAllBills = async (req, res) => {
    try {
        const all = await Bill.findAll({
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
        const billsById = await Bill.findAll({ order: [['created_at', 'DESC']] })
        res.send(billsById)
    } catch (error) {
        throw error
    }
}






module.exports = {
    GetAllBills,
    GetBillsById

}

