const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");

const Profile = sequelize.sequelize.define(
    'profile',
    {
        id: {
            autoIncrement: true,
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        reg_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        index_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        gender: {
            type: Sequelize.ENUM('MALE', 'FEMALE', 'TRANS-GENDER', 'OTHER'),
            allowNull: false
        },
        dob: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        citizenship: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        address: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        profile_photo: {
            type: Sequelize.STRING(191),
            allowNull: true
        },
        user_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        facility_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'facilities',
                key: 'id'
            }
        },
        cadre_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'cadres',
                key: 'id'
            }
        },
        department_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'departments',
                key: 'id'
            }
        },
        licence_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'licenses',
                key: 'id'
            }
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
        tableName: 'profile',
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
            {
                name: "profile_user_id_foreign",
                using: "BTREE",
                fields: [
                    {name: "user_id"},
                ]
            },
            {
                name: "profile_facility_id_foreign",
                using: "BTREE",
                fields: [
                    {name: "facility_id"},
                ]
            },
            {
                name: "profile_cadre_id_foreign",
                using: "BTREE",
                fields: [
                    {name: "cadre_id"},
                ]
            },
            {
                name: "profile_department_id_foreign",
                using: "BTREE",
                fields: [
                    {name: "department_id"},
                ]
            },
            {
                name: "profile_licence_id_foreign",
                using: "BTREE",
                fields: [
                    {name: "licence_id"},
                ]
            },
        ]
    }
);

exports.Profile = Profile;
