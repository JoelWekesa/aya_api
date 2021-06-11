// require('nnode');
// require('./server');
require('dotenv').config()
require('./db_config')
const express = require('express')
const jwt = require('jsonwebtoken')


const app = express()
const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
const users = require("./routes/user");

// Test unprotected route
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome'
    })
})

// Test protected route
app.post('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
        if (err) {
            res.status(403).json({
                err
            })
        } else {
            res.json({
                message: 'Post created...',
                authData
            })
        }
    })
})

app.use("", users);

// Token Format Bearer <token>
function verifyToken(req, res, next){
    //get token
    const bearerHeader = req.headers['authorization']
    //if exists
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        //set Token
        req.token =bearerToken
        //next middleware
        next()
    } else {
        res.sendStatus(403)
    }
}

app.listen(5050, () =>{console.log('server listening on 5050')})