const Router = require('express').Router()
const BillRouter = require('./BillRouter')
const CategoryReouter = require('./CategoryRouter')
const UserRouter = require('./UserRouter')

Router.use('/bills', BillRouter)
Router.use('/users', UserRouter)
Router.use('/categories', CategoryReouter)



module.exports = Router  