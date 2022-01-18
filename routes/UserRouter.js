const Router = require('express').Router();
const controller = require('../controllers/User');

// Implement these routes
Router.get('/view/:user_id')
Router.post('/:user_id')
Router.put('/:user_id')
Router.delete('/:user_id')
// Implement these routes


Router.get('/view/:user_id', controller.GetAllUsers)
Router.get('/view/:user_id', controller.GetUserDetails)
Router.post('/:user_id', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router
