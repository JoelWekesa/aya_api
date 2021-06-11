const Sequelize = require("sequelize");
require("dotenv").config();

const database = 'aya';
const username = 'nishauri';
const password = 'nishauri';
const port = '5432';
const db_server = '197.232.82.136';

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
