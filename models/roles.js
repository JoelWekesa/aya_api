const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");

const Roles = sequelize.sequelize.define(
    'roles',
    {
        id: {
            autoIncrement: true,
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        guard_name: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'roles',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "id"},
                ]
            },
        ]
    }
);

exports.Roles = Roles;
