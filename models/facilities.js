const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");

const Facilities = sequelize.sequelize.define('facilities',
    {
        id: {
            autoIncrement: true,
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        Code: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Name: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        OfficialName: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Registration_number: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        'Keph level': {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Facility_type: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Facility_type_category: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Owner: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Owner_type: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Regulatory_body: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Beds: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Cots: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        County: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Sub_county: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Ward: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        'Operation status': {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Open_whole_day: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Open_public_holidays: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Open_weekends: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Open_late_night: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Service_names: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Approved: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        'Public visible': {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Closed: {
            type: Sequelize.STRING(191),
            allowNull: false
        },
        Active: {
            type: Sequelize.STRING(191),
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'facilities',
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
    });

exports.Facilities = Facilities
