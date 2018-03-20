"use strict"
const registerService = require('../services/register.service')
const emailService = require('../services/emails.service')

let _apiPrefix

module.exports = apiPrefix => {
    _apiPrefix = apiPrefix
    return{
        read: readAll,
        readById: readById,
        create: create,
        confirmEmail:confirmEmail

    }
}

function readAll(req, res){
    registerService.read()
    .then(registration=>{
        console.log("test")
        res.status(200).json(registration)
    })
    .catch(err => {
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function readById(req, res) {
    registerService.readById(req.params.id)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function create (req, res){
    let userId
    registerService.create(req.body)
    .then(register => {
        userId = register
    const toName = `${req.body.firstName} ${req.body.lastName}`
        return emailService.sendRegistrationConfirmation(req.body.email, userId, toName)
    })
    .then(id=> {
        id=userId
        res.status(201).location(`${_apiPrefix}/${register}`).json(id)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

function confirmEmail(req,res){
    registerService.updateIsEmailConfirmed(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}