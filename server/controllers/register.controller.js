"use strict"
const registerService = require('../services/register.service')
//const from '../services/register.service'
let _apiPrefix

module.exports = apiPrefix => {
    _apiPrefix = apiPrefix
    return{
        read: readAll,
        create: create

    }
}

function readAll(req, res){
    registerService.read()
    .then(registration=>{
        console.log("test")
        res.status(200).send("yp")

    })
    .catch(err => {
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function create (req, res){
    registerService.create(req.body)
    .then(register => {
        res.status(200)
        .location(`${_apiPrefix}/${register}`)
        .json(req.body)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}