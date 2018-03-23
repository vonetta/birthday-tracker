const router = require('express').Router()
const registerControllerFactory = require('../controllers/register.controller')
const registerApiPrefix = '/api/users'

module.exports = apiPrefix =>{
    const registerController = registerControllerFactory(apiPrefix)

    router.get('/', registerController.read)
    router.get('/confirm-email/:id([0-9a-fA-F]{24})', registerController.readById)
    router.post('/', registerController.create)
    router.post("/confirm-email/:id([0-9a-fA-F]{24})", registerController.confirmEmail)
    router.post("/login", registerController.login)
    router.post("/logout", registerController.logout)
    return router
}