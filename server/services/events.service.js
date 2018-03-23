"use strict"

const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId


function readById(id) {
    return conn.db().collection('events').find({ userId: new ObjectId(id) }).toArray()
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
        date: new Data(model.selectedDate),
        name: model.name,
        email: model.email,
        userId: new ObjectId(model.userId)
    }

    return conn.db().collection('events').insertOne(doc)
        .then(result => result.insertedId.toString())
        .catch(err => { Promise.reject(err) })

}

module.exports = {
    create: create,
    readById: readById
}