const Router = require('express').Router()
const controller = require('../controllers/Bill')

// Router.get('/view/:bill_id')


Router.get('/view/:bill_id', controller.GetAllBills)
Router.get('/view/:bill_id', controller.GetBillsById)

module.exports = Router