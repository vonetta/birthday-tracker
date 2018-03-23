'use strict'

const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongo = require('./mongodb')
const mainRouter = require('./routes') //index.js by default
const configMongoDB = require('./config/mongodb.config')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const auth = require('./filters/auth')
const cookieSession = require('cookie-session')

auth(passport)

app.use(passport.initialize());

//cookie-session
app.use(cookieSession({
    name: 'session',
    keys: ['123']
}))

// enable cookie-parser
app.use(cookieParser())

//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `${process.env.ORIGIN}`)
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
})

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    if(req.session.token){
        res.cookie('token', req.session.token)
        res.json({
            status: 'session cookie set'
        })
    }
    else{
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        })
    }
})

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}))

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        console.log(req.user.profile.name.givenName)
      req.session.token = req.user.token
        res.redirect(`http://localhost:3001/login`)
    })

    app.get('/logout', (req, res)=>{
        rew.logout()
        req.session = null
        res.redirect('/')
    })


// initialize dotenv
dotenv.config()

// set our port
const port = process.env.PORT || 8080

// register routes
app.use(mainRouter)

// start mongo connection pool, then start express app
mongo.connect(process.env.MONGODB_URL)
    .then(() => configMongoDB(app))
    .then(() => app.listen(port))
    .then(() => console.log(`Magic happens on port: ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
