const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const db = new Sequelize(
	process.env.database,
	process.env.usernamedb,
	process.env.password,
	{
		host: "localhost",
		dialect: "postgres",
	}
);

module.exports = {
	db,
};
