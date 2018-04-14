"use strict"

const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

function read() {
  let currentDate = new Date()
    .toLocaleDateString("ja", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
    .replace(/\//g, "-")
  console.log(currentDate)

  return conn
    .db()
    .collection("events")
    .find({ $query: { date: currentDate } })
    .toArray()
    .then(events => {
      for (let i = 0; i < events.length; i++) {
        let event = events[i]
        event._id = event._id.toString()
        event.userId = event.userId.toString()
      }
      return events
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

function readById(id) {
  return conn
    .db()
    .collection("events")
    .find({ userId: new ObjectId(id), dateDeactivated: null })
    .toArray()
    .then(events => {
      for (let i = 0; i < events.length; i++) {
        const event = events[i]
        event._id = event._id.toString()
        event.userId = event.userId.toString()
      }
      return events
    })
    .catch(err => Promise.reject(err))
}

function create(model) {
  const doc = {
    date: model.date,
    name: model.name,
    email: model.email,
    userId: new ObjectId(model.userId)
  }
  return conn
    .db()
    .collection("events")
    .insertOne(doc)
    .then(result => result.insertedId.toString())
    .catch(err => {
      return Promise.reject(err)
    })
}

function deleteDay(id) {
  const doc = {
    $set: {
      dateDeactivated: new Date()
    }
  }

  return conn
    .db()
    .collection("events")
    .updateOne({ _id: new ObjectId(id) }, doc)
    .then(result => {
      result.matchedCount
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

module.exports = {
  create: create,
  readById: readById,
  read: read,
  delete: deleteDay
}
