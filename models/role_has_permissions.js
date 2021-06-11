const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role_has_permissions', {
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permissions',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'role_has_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "role_has_permissions_pkey",
        unique: true,
        fields: [
          { name: "permission_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
