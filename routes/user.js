const {validateUser, User} = require("../models/user");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post('/api/register', async (req, res) => {
    //DB User
    let user = {
        name: "brian"
    }
    //sign token
    jwt.sign({user}, process.env.SECRET_KEY, {expiresIn: '1m'}, (err, token) => {
        res.json({
            token
        })
    })
})

router.post('/api/login', async (req, res, next) => {
    try {
        //DB User
        //  Now find the user by their phone number
        let user = await User.findOne({where: {phoneNumber: req.body.phone_number}});
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        }

        // Then validate the Credentials db
        // those provided in the request
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            return res.status(400).json({message: "Incorrect email or password."});
        }
        if (!user.status) {
            return res
                .status(400)
                .json({message: "User is Inactive in the System"});
        }
        let {id, email, first_name, last_name, phoneNumber} = user;
        // sign token
        jwt.sign({user}, `${process.env.SECRET_KEY}`, {expiresIn: '1m'}, (err, token) => {
            return res.json({
                token,
                user
            })
        });
        // res.json({ id, token, email, first_name, last_name, phone_number });
    } catch (error) {
        error.status = 400;
        console.log(error)
        next(error);
    }
})

module.exports = router;