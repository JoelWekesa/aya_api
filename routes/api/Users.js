const {User, validateUser} = require("../../models/user");
const {Profile, validateProfile} = require("../../models/profile");
const {Roles} = require("../../models/roles");
const {Cadre} = require("../../models/cadres");
const bcrypt = require("bcrypt");
const express = require("express");
const {Op} = require("sequelize");
const {decode} = require('../../middleware/jwt/jwt')
// const sequelize = require("../../db_config");
const router = express.Router();

// Register a user
router.post("/register", async (req, res) => {
    let transaction;
    try {
        // get transaction
        // transaction = await sequelize.transaction();

        //username

        let {error} = validateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const {first_name, last_name, email, msisdn, nckid, password, role_id} = req.body;
        let {username, reg_number, id_number, gender, dob, citizenship, address, facility_id, cadre_id, department_id, licence_id, index_number} = req.body
        if (first_name && last_name && email && msisdn && password) {
            await User.create({
                first_name,
                last_name,
                email,
                msisdn,
                nckid,
                password: bcrypt.hashSync(password, 10),
                status: true,
                role_id: role_id
            })
                .then(async (user) => {
                    let profile = {
                        username,
                        reg_number,
                        id_number,
                        gender,
                        dob,
                        citizenship,
                        address,
                        facility_id,
                        cadre_id,
                        department_id,
                        licence_id,
                        index_number,
                        user_id: user.id
                    }
                    await Profile.create(profile)
                        .then(async () => {
                            // await transaction.commit();
                            res.status(200).json({
                                message: "You have successfully been registered.",
                                success: true
                            });
                        })
                })
                .catch((err) => {
                    res.status(500).json({
                        error: err.message,
                    });
                });
        } else {
            res.status(400).json({
                error: "Please fill all fields before registering.",
            });
        }
    } catch (err) {
        // if (transaction) await transaction.rollback();
        res.status(500).json({
            error: err.message,
        });
    }
});

//Get auth User
router.get('/user', decode, async (req, res) => {
    if (req.user) {
            return res.status(200).json(req.user)
        } else {
            return res.status(500).json({error: "An error Occurred"})
        }
})

module.exports = router
