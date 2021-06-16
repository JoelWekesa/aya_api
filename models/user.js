const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");

const User = sequelize.sequelize.define(
    "users",
    {
        id: {
            autoIncrement: true,
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        middle_name: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        last_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: "users_email_unique"
        },
        phone_number: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: "users_phone_number_unique"
        },
        nckid: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: "users_nckid_unique"
        },
        role_id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: 'roles',
                key: 'id'
            }
        },
        profile_photo: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        email_verified_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        remember_token: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        deleted_at: {
            type: Sequelize.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'users',
        schema: 'public',
        timestamps: false,
        indexes: [
            {
                name: "users_email_unique",
                unique: true,
                fields: [
                    { name: "email" },
                ]
            },
            {
                name: "users_nckid_unique",
                unique: true,
                fields: [
                    { name: "nckid" },
                ]
            },
            {
                name: "users_phone_number_unique",
                unique: true,
                fields: [
                    { name: "phone_number" },
                ]
            },
            {
                name: "users_pkey",
                unique: true,
                fields: [
                    { name: "id" },
                ]
            },
        ]
    }
);

function validateUser(user) {
    const schema = Joi.object({
        first_name: Joi.string()
            .min(3)
            .max(20)
            .required(),
        middle_name: Joi.string()
            .min(3)
            .max(20),
        last_name: Joi.string()
            .min(3)
            .max(20)
            .required(),
        phone_number: Joi.string()
            .max(15)
            .min(10)
            .required(),
        nckid: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .max(255)
            .required(),
        role_id: Joi.number()
    });

    return schema.validate(user);
}
exports.User = User;
exports.validateUser = validateUser;
