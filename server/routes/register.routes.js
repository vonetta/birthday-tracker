const router = require('express').Router()
const registerControllerFactory = require('../controllers/register.controller')
const registerApiPrefix = '/api/users'

module.exports = apiPrefix =>{
    const registerController = registerControllerFactory(apiPrefix)

    router.get('/', registerController.read)
    router.post('/', registerController.create)
    return router
}