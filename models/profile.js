const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");

const Profile = sequelize.sequelize.define('profile', {
    id: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    id_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    facility_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'facilities',
            key: 'id'
        }
    },
    cadre_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'cadres',
            key: 'id'
        }
    },
    department_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'departments',
            key: 'id'
        }
    },
    licence_id: {
        type: Sequelize.BIGINT,
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
}, {
    sequelize,
    tableName: 'profile',
    schema: 'public',
    timestamps: false,
    indexes: [
        {
            name: "profile_pkey",
            unique: true,
            fields: [
                {name: "id"},
            ]
        },
    ]
});

exports.Profile = Profile;
