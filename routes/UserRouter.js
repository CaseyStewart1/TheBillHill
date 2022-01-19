const Router = require('express').Router();
const controller = require('../controllers/UserControllers');

Router.get('/', controller.GetAllUsers);

Router.get('/', controller.GetUserById);

Router.post('/:user_id', controller.CreateUser);

Router.put('/:user_id', controller.UpdateUser);

Router.delete('/:user_id', controller.DeleteUser);

module.exports = Router;
