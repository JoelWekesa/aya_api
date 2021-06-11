const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('model_has_roles', {
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
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
    tableName: 'model_has_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "model_has_roles_model_id_model_type_index",
        fields: [
          { name: "model_id" },
          { name: "model_type" },
        ]
      },
      {
        name: "model_has_roles_pkey",
        unique: true,
        fields: [
          { name: "role_id" },
          { name: "model_id" },
          { name: "model_type" },
        ]
      },
    ]
  });
};
