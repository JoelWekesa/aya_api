const { Router } = require("express");
const { Users } = require("../../models/Users");
const bcrypt = require("bcryptjs");

const router = Router();

// Register a user

router.post("/", async (req, res) => {
	try {
		const {
			first_name,
			last_name,
			email_address,
			phone_number,
			nck_id,
			password,
		} = req.body;
		if (
			first_name &&
			last_name &&
			email_address &&
			phone_number &&
			nck_id &&
			password
		) {
			await Users.create({
				first_name,
				last_name,
				email_address,
				phone_number,
				nck_id,
				password: bcrypt.hashSync(password, 10),
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

module.exports = {
	usersAPI: router,
};
