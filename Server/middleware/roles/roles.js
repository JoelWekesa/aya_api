const jwt = require("jsonwebtoken");
const { Users } = require("../../models/Users");
const { secrets } = require("../../config/secrets");

const superAdmin = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];
		if (!token) {
			return res.status(403).json({
				error: "No access token provided.",
			});
		}

		await jwt.verify(token, secrets, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					error: "Invalid token provided",
				});
			}

			const { id } = decoded;
			Users.findByPk(id).then((user) => {
				if (!user.super_user) {
					return res.status(403).json({
						error: "You do not have permission to perform this action.",
					});
				}

				next();
			});
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
};

const admin = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];
		if (!token) {
			return res.status(403).json({
				error: "No access token provided.",
			});
		}

		await jwt.verify(token, secrets, async (err, decoded) => {
			if (err) {
				return res.status(401).json({
					error: "Invalid token provided",
				});
			}

			const { id } = decoded;
			await Users.findByPk(id).then((user) => {
				if (user.super_user) {
					next();
				}

				if (user.admin) {
					next();
				}

				if (!user.super_user && !user.admin) {
					return res.status(403).json({
						error: "You do not have permission to perform this action.",
					});
				}
			});
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
};

const practitioner = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];
		if (!token) {
			return res.status(403).json({
				error: "No access token provided.",
			});
		}

		await jwt.verify(token, secrets, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					error: "Invalid token provided",
				});
			}

			const { id } = decoded;
			Users.findByPk(id).then((user) => {
				if (!user.super_user) {
					return res.status(403).json({
						error: "You do not have permission to perform this action.",
					});
				}

				next();
			});
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
};

const student = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];
		if (!token) {
			return res.status(403).json({
				error: "No access token provided.",
			});
		}

		await jwt.verify(token, secrets, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					error: "Invalid token provided",
				});
			}

			const { id } = decoded;
			Users.findByPk(id).then((user) => {
				if (!user.super_user) {
					return res.status(403).json({
						error: "You do not have permission to perform this action.",
					});
				}

				next();
			});
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
};

module.exports = {
	superAdmin,
	admin,
};
