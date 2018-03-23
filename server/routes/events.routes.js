const router = require('express').Router()
const eventsControllerFactory = require('../controllers/events.controller')
const eventsApiPrefix = '/api/events'

module.exports = apiPrefix =>{
    const eventsController = eventsControllerFactory(apiPrefix)


    router.get('/:id([0-9a-fA-f]{24})', eventsController.readById)
    router.post('/', eventsController.create)
    return router
}