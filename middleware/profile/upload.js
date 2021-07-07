const multer = require("multer");

const engine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./images");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	},
});

exports.upload = multer({ storage: engine });
