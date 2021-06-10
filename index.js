// require('nnode');
// require('./server');
require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

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

app.post('/api/login', (req, res) => {
    //DB User
    const user = {
        id: 1,
        username: 'beia',
        msisdn: '0722229999'
    }
    //sign token
    jwt.sign({ user}, process.env.SECRET_KEY, { expiresIn: '1m' },  (err, token) => {
        res.json({
            token
        })
    })
})

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