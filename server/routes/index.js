"use strict"

const express = require('express')
const router = express.Router()

const registerApiPrefix = '/api/users'
const eventsApiPrefix = '/api/events'

//page routes
const registerRoutes = require('./register.routes')(registerApiPrefix)

const eventRoutes = require('./events.routes')(eventsApiPrefix)
// Misc require
const authenticate = require("../filters/authenticate")
const path = require("path")
const contentPath = path.join(__dirname, "../../content")

module.exports = router
router.use(express.static(contentPath))

// check authentication for all requests
router.use(authenticate)
// API routes (group routing modules here - no empty lines between)
router.use(registerApiPrefix, registerRoutes),
router.use(eventsApiPrefix, eventRoutes)

// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router)

// register client routes
//router.use(clientRoutes)

function useAPIErrorHandlers(router) {
    // Handle API 404
    router.use("/api/*", (req, res, next) => {
        res.sendStatus(404)
    })
    // Handle API 500
    router.use((err, req, res, next) => {
        if (!err) {
            return next()
        }
        // Log it
        console.log(err.stack)

        // Redirect to error page
        res.sendStatus(500)
    })
}
