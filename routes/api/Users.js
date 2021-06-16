const {User, validateUser} = require("../../models/user");
const {Roles} = require("../../models/roles");
const {Cadre} = require("../../models/cadres");
const bcrypt = require("bcrypt");
const express = require("express");
const {Op} = require("sequelize");

const router = express.Router();

// Register a user
router.post("/register", async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const {
            first_name,
            last_name,
            email,
            phone_number,
            nckid,
            password,
            role_id
        } = req.body;
        if (
            first_name &&
            last_name &&
            email &&
            phone_number &&
            password
        ) {
            await User.create({
                first_name,
                last_name,
                email,
                phone_number,
                nckid,
                password: bcrypt.hashSync(password, 10),
                status: true,
                role_id: role_id
            })
                .then((user) => {
                    res.status(200).json({
                        message: "You have successfully been registered.",
                        user,
                    });
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

module.exports = router
