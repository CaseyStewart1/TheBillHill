const Router = require('express').Router();
const controller = require('../controllers/BillController');

Router.get('/', controller.GetAllBills);

module.exports = Router;
