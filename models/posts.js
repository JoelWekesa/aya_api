const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    post_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    post_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    featured_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'posts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "posts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
