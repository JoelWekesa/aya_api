const sequelize = require("../db_config");
const Sequelize = require('sequelize');
const Joi = require("joi");

const Posts = sequelize.sequelize.define('posts', {
    id: {
        autoIncrement: true,
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    post_title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    post_body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    featured_image: {
        type: Sequelize.STRING(191),
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    category_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
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
    tableName: 'posts',
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
            name: "posts_category_id_foreign",
            using: "BTREE",
            fields: [
                {name: "category_id"},
            ]
        },
        {
            name: "posts_user_id_foreign",
            using: "BTREE",
            fields: [
                {name: "user_id"},
            ]
        },
    ]
});

exports.Posts = Posts