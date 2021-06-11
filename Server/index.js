const express = require("express");
const { urlencoded, json } = require("express");
// const { db } = require("./db/db");
// APIs
const { usersAPI } = require("./routes/api/Users");
const { loginAPI } = require("./routes/api/Login");
const { addAdminAPI } = require("./routes/api/AddAdminRole");
const { addPractitionerAPI } = require("./routes/api/AddPractitionerRole");

// Middleware
const {
	existingEmail,
	existingPhone,
	existingNCKID,
} = require("./middleware/auth/unique");
const { superAdmin, admin } = require("./middleware/roles/roles");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

//? Auth APIs
app.use(
	"/api/auth/register",
	[existingEmail, existingPhone, existingNCKID],
	usersAPI
);
app.use("/api/auth/login", loginAPI);
//? End of Auth APIs

//? Roles APIs
app.use("/api/add/admin", [superAdmin], addAdminAPI);
app.use("/api/add/practitioner", [admin], addPractitionerAPI);
//? End of Roles APIs

// db.authenticate()
// 	.then(() => {
// 		console.log("Successfully connected");
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server running on port ${PORT}`);
});
