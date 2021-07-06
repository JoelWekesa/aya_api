const sequelize = require("../db_config");
const Sequelize = require('sequelize');

const Countries = sequelize.sequelize.define(
    'countries',
    {
    id: {
        autoIncrement: true,
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    nice_name: {
        type: Sequelize.STRING(80),
        allowNull: true
    },
    iso: {
        type: Sequelize.CHAR(2),
        allowNull: true
    },
    iso3: {
        type: Sequelize.CHAR(3),
        allowNull: true
    },
    phone_code: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true
    },
    status: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: 1
    },
    created_by: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
    },
    updated_by: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
    },
    deleted_by: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
    },
    restored_by: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
    },
    restored_at: {
        type: Sequelize.DATE,
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
    tableName: 'countries',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        },
        {
            name: "countries_name_iso_iso3_phone_code_unique",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "name" },
                { name: "iso" },
                { name: "iso3" },
                { name: "phone_code" },
            ]
        },
    ]
}
);

exports.Countries = Countries