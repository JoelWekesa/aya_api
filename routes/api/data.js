const { User, validateUser } = require("../../models/user");
const { Profile, validateProfile } = require("../../models/profile");
const { Countries } = require("../../models/countries");
const { Roles } = require("../../models/roles");
const { Cadre } = require("../../models/cadres");
const bcrypt = require("bcrypt");
const express = require("express");
const { Op } = require("sequelize");
const { decode } = require("../../middleware/jwt/jwt");
const router = express.Router();

//Get various countries from DB
router.get("/get/countries", async (req, res) => {
	// Exclude super admin in roles api
	await Countries.findAll()
		.then((countries) => {
			res.json(countries);
		})
		.catch((error) => {
			res.status(400).json(error);
		});
});

//Get various roles from DB
router.get("/get/roles", async (req, res) => {
	// Exclude super admin in roles api
	await Roles.findAll({ where: { id: { [Op.ne]: 1 } } })
		.then((roles) => {
			res.json(roles);
		})
		.catch((error) => {
			res.status(400).json(error);
		});
});

module.exports = router;
