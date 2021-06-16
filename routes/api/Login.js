const {Router} = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {User} = require("../../models/user");

const router = Router();

router.post("/login", async (req, res) => {
        try {
            //DB User
            //  Now find the user by their phone number
            let user = await User.findOne({where: {phone_number: req.body.phone_number}});
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
                return res.status(400).json({message: "Incorrect phone Number or password."});
            }
            if (!user.status) {
                return res
                    .status(400)
                    .json({message: "User is Inactive in the System"});
            }

            //sign token
            let {id, email, first_name, last_name, phoneNumber, role_id} = user;
            jwt.sign({id, email, first_name, last_name, phoneNumber, role_id}, process.env.SECRET_KEY,
                {
                    expiresIn: 43200 //Lasts 12 hours
                }, (err, token) => {
                    if (err) return res.status(400).json({err})
                    return res.json({
                        token,
                        user
                    });
                });
        } catch (err) {
            res.status(500).json({
                error: err.message,
            });
        }
    }
);

module.exports = router;
