const Router = require('express').Router();
const controller = require('../controllers/UserControllers');

Router.get('/', controller.GetUser);
Router.get('/all', controller.GetAllUsers);
Router.get('/:id', controller.GetUserById);
Router.post('/', controller.CreateUser);
Router.put('/:id', controller.UpdateUser);
Router.delete('/:id', controller.DeleteUser);

module.exports = Router;
