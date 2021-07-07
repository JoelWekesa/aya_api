const jwt = require("jsonwebtoken");
// models
// const {User} = require('../../models/User');

const SECRET_KEY = process.env.SECRET_KEY;

exports.profiler = (req, res, next) => {
	if (!req.headers["authorization"]) {
		return res
			.status(400)
			.json({ success: false, message: "No access token provided" });
	}
	const accessToken = req.headers["authorization"];
	try {
		const decoded = jwt.verify(accessToken, SECRET_KEY);
		const user_id = decoded.id;
		if (req.params.id !== user_id) {
			return res.status(403).json({
				error: "You cannot edit another person's profile.",
			});
		}
		return next();
	} catch (error) {
		return res.status(401).json({ success: false, message: error.message });
	}
};
