const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");
const User = sequelize.sequelize.define(
    "users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: Sequelize.STRING,
        middle_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        profile_photo: Sequelize.STRING,
        email: Sequelize.STRING,
        nckid: Sequelize.STRING,
        role_id: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN,
        phoneNumber: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        email_verified_at: Sequelize.DATE,
        password: Sequelize.TEXT,
    },
    {
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: "users"
    }
);

function validateUser(user) {
    const schema = {
        first_name: Joi.string()
            .min(3)
            .max(10)
            .required(),
        middle_name: Joi.string()
            .min(3)
            .max(10),
        last_name: Joi.string()
            .min(3)
            .max(10)
            .required(),
        phone_number: Joi.string()
            .max(10)
            .min(10)
            .required(),
        email: Joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        status: Joi.string().required(),
        password: Joi.string()
            .min(5)
            .max(255),
        role_id: Joi.number()
    };

    return Joi.validate(user, schema);
}
exports.User = User;
exports.validateUser = validateUser;
