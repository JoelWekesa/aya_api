const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "settings_key_index",
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "settings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
