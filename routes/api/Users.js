const {User, validateUser} = require("../../models/user");
const {Profile, validateProfile} = require("../../models/profile");
const {Roles} = require("../../models/roles");
const {Cadre} = require("../../models/cadres");
const bcrypt = require("bcrypt");
const express = require("express");
const {Op} = require("sequelize");
const {decode} = require('../../middleware/jwt/jwt')
const router = express.Router();

// Register a user
router.post("/register", async (req, res) => {
    try {
        // let {profile} =res.body
        let {error} = validateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const {first_name, last_name, email, msisdn, nckid, password, role_id} = req.body;
        let {username, reg_number, id_number, gender, dob, citizenship, address, facility_id, cadre_id, department_id, licence_id} = req.body
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
            licence_id
        }
        if (
            first_name &&
            last_name &&
            email &&
            msisdn &&
            password
        ) {
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
                        user_id: user.id
                    }
                    await Profile.create(profile)
                        .then(()=>{
                            res.status(200).json({
                                message: "You have successfully been registered.",
                                success: true
                            });})
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
        res.status(500).json({
            error: err.message,
        });
    }
});

//Get various roles from DB
router.get("/get/roles", async (req, res) => {
    // Exclude super admin in roles api
    await Roles.findAll({where: {id: {[Op.ne]: 1}}})
        .then((roles) => {
            res.json({roles});
        })
        .catch((error) => {
            res.status(400).json(error);
        })
})

//Get auth User
router.get('/user', decode, async (req, res) => {
    await User.findById(req.user_id)
        .then((user) => {
            return res.status(200).json(user)
        })
        .catch((err) => {
            return res.status(500).json(err.message)
        })
})
module.exports = router
