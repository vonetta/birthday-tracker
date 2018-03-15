"use strict"

const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId


function read() {
    return conn.db().collection('users').find({}).toArray()
        .then(users => {
            for (let i = 0; i < users.length; i++) {
                let user = users[i]
                user._id = user._id.toString()
            }
            return users
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

function create(model) {
    const safeDoc = {
        firstName: model.firstName,
        lastName: model.lastName,
        email: model.email,
        password: model.password
    }
    return conn.db().collection('users').insertOne(safeDoc)
        .then(result => result.insertedId.toString)
        .catch(err => {
            return Promise.reject(err)
        })
}

module.exports={
    read: read,
    create:create
}