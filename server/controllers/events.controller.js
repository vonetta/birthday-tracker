"use strict"

const eventsService = require("../services/events.service")

let _apiPrefix

module.exports = apiPrefix => {
  _apiPrefix = apiPrefix
  return {
    create: create,
    readById: readById,
    read: read,
    delete: deleteDay
  }
}

function read(req, res) {
  eventsService.read().then(events => {
    res.json(events)
  })
}

function readById(req, res) {
  eventsService
    .readById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
}

function create(req, res) {
  eventsService
    .create(req.body)
    .then(event => {
      res.status(201).json(event)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

function deleteDay(req, res) {
  eventsService
    .delete(req.params.id)
    .then(event => {
      res.status(200).json(event)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}
