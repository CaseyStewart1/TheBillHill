const Router = require('express').Router()
const controller = require('../controllers/UserControllers')

Router.get('/', controller.GetAllUsers)

module.exports = Router