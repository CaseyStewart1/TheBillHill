const Router = require('express').Router()
const controller = require('../controllers/Category')


// Router.get('/view/:category_id')


Router.get('/view/:category_id', controller.GetAllCategories)
Router.get('/view/:category_id', controller.GetCategoriesById)
Router.put('/:category_id', controller.UpdateCategories)



module.exports = Router