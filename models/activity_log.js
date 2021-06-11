const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    log_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    subject_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    subject_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    causer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    causer_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    properties: {
      type: DataTypes.JSON,
      allowNull: true
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
    tableName: 'activity_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "activity_log_log_name_index",
        fields: [
          { name: "log_name" },
        ]
      },
      {
        name: "activity_log_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "causer",
        fields: [
          { name: "causer_id" },
          { name: "causer_type" },
        ]
      },
      {
        name: "subject",
        fields: [
          { name: "subject_id" },
          { name: "subject_type" },
        ]
      },
    ]
  });
};
