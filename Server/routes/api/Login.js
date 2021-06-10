const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Users } = require("../../models/Users");
const { secrets } = require("../../config/secrets");

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { email_address, password } = req.body;
		if (!email_address || !password) {
			return res.status(400).json({
				error: "Please fill all fields before logging in.",
			});
		}
		await Users.findOne({
			where: {
				email_address,
			},
		})
			.then((user) => {
				if (!user) {
					return res.status(404).json({
						error:
							"We could not find a user matching the email address you provided.",
					});
				}

				const validPassword = bcrypt.compareSync(password, user.password);

				if (validPassword) {
					const token = jwt.sign({ id: user.id }, secrets, {
						expiresIn: 43200, //12 hours
					});

					res.json({
						user,
						accessToken: token,
					});
				} else {
					res.status(400).json({
						error: "Invalid password.",
					});
				}
			})
			.catch((err) => {
				return res.status(500).json({
					error: err.message,
				});
			});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
});

module.exports = {
	loginAPI: router,
};
