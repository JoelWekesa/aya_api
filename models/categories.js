const sequelize = require("../db_config");
const Sequelize = require('sequelize');

const Categories = sequelize.sequelize.define(
    'categories',
    {
      id: {
        autoIncrement: true,
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      category_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
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
    },
    {
      sequelize,
      tableName: 'categories',
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
          name: "categories_user_id_foreign",
          using: "BTREE",
          fields: [
            {name: "user_id"},
          ]
        },
      ]
    }
);

exports.Categories = Categories