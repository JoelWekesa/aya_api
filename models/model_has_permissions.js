const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('model_has_permissions', {
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permissions',
        key: 'id'
      }
    },
    model_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    model_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'model_has_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "model_has_permissions_model_id_model_type_index",
        fields: [
          { name: "model_id" },
          { name: "model_type" },
        ]
      },
      {
        name: "model_has_permissions_pkey",
        unique: true,
        fields: [
          { name: "permission_id" },
          { name: "model_id" },
          { name: "model_type" },
        ]
      },
    ]
  });
};
