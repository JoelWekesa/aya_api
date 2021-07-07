require("dotenv").config();
require("./db_config");
const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { mkdir } = require("fs");
const { join } = require("path");

const app = express();
const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const users = require("./routes/api/Users");
const login = require("./routes/api/Login");
const listFAQs = require("./routes/api/listFAQs");
const posts = require("./routes/api/posts");
const data = require("./routes/api/data");
const profile = require("./routes/api/profile");

app.use("/api/listFAQs", listFAQs);
app.use("/api/posts", posts);
app.use("/api/data", data);
app.use("/api/auth", users);
app.use("/api/auth", login);
app.use("/api/profile", profile);

app.get("/", (req, res) => {
	res.send("Aya platform apis");
});

//Creating an images folder
try {
	if (!fs.existsSync("images")) {
		mkdir(join(__dirname, "images"), {}, (err) => {
			if (err) throw err;
			console.log("Your file was successfully created.");
		});
	}
} catch (err) {
	console.error(err);
}

app.listen(5050, () => {
	console.log("server listening on 5050");
});
