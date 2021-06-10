const { Users } = require("../../models/Users");

const existingEmail = async (req, res, next) => {
	try {
		const { email_address } = req.body;
		await Users.findOne({
			where: {
				email_address,
			},
		}).then((user) => {
			if (user) {
				return res.status(400).json({
					error: "A user with that email address already exists.",
				});
			}

			next();
		});
	} catch (err) {
		return res.status(500).json({
			error: err.message,
		});
	}
};

const existingPhone = async (req, res, next) => {
	try {
		const { phone_number } = req.body;
		await Users.findOne({
			where: {
				phone_number,
			},
		}).then((user) => {
			if (user) {
				return res.status(400).json({
					error: "A user with that phone number already exists.",
				});
			}

			next();
		});
	} catch (err) {
		return res.status(500).json({
			error: err.message,
		});
	}
};

const existingNCKID = async (req, res, next) => {
	try {
		const { nck_id } = req.body;
		await Users.findOne({
			where: {
				nck_id,
			},
		}).then((user) => {
			if (user) {
				return res.status(400).json({
					error: "A user with that NCK ID already exists.",
				});
			}

			next();
		});
	} catch (err) {
		return res.status(500).json({
			error: err.message,
		});
	}
};

module.exports = {
	existingEmail,
	existingPhone,
	existingNCKID,
};
