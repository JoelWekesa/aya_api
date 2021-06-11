const Sequelize = require("sequelize");
require("dotenv").config();

const database = process.env.DB_USER;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT;
const db_server = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password, {
    host: db_server,
    port: port,
    dialect: "postgres"
});

const connect = async () => {
    await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch(err => {
            console.log("Unable to connect to the database:", err.message);
        });
};
const db = {
    sequelize: sequelize,
    connect
};

module.exports = db;
