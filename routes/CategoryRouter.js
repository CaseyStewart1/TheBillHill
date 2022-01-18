const Router = require('express').Router()

const controller = require('../controllers/CategoryController')

Router.get('/', controller.GetALLCategories)


module.exports = Router