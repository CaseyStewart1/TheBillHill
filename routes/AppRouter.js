const Router = require('express').Router();
const CategoryRouter = require('./CategoryRouter');
const UserRouter = require('./UserRouter');
const BillRouter = require('./BillRouter');

Router.use('/categories', CategoryRouter);
Router.use('/users', UserRouter);
Router.use('/bills', BillRouter);

module.exports = Router