const { Sequelize } = require("sequelize");
const { db } = require("../db/db");

const Users = db.define("users", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	first_name: {
		type: Sequelize.STRING,
	},
	last_name: {
		type: Sequelize.STRING,
	},
	email_address: {
		type: Sequelize.STRING,
	},
	phone_number: {
		type: Sequelize.STRING,
	},
	nck_id: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	},
	super_user: {
		type: Sequelize.BOOLEAN,
	},
	admin: {
		type: Sequelize.BOOLEAN,
	},
	practitioner: {
		type: Sequelize.BOOLEAN,
	},
	student: {
		type: Sequelize.BOOLEAN,
	},
});

module.exports = {
	Users,
};
