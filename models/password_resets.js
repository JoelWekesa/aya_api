const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('password_resets', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'password_resets',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "password_resets_email_index",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
