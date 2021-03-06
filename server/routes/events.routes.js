const router = require("express").Router()
const eventsControllerFactory = require("../controllers/events.controller")
const eventsApiPrefix = "/api/events"

module.exports = apiPrefix => {
  const eventsController = eventsControllerFactory(apiPrefix)

  router.get("/", eventsController.read)
  router.get("/:id([0-9a-fA-f]{24})", eventsController.readById)
  router.post("/", eventsController.create)
  router.delete("/:id([0-9a-fA-F]{24})", eventsController.delete)
  return router
}
