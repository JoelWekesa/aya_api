const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facilities', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OfficialName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Registration_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    'Keph level': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Facility_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Facility_type_category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Owner: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Owner_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Regulatory_body: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Beds: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Cots: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    County: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Sub_county: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Ward: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    'Operation status': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Open_whole_day: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Open_public_holidays: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Open_weekends: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Open_late_night: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Service_names: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Approved: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    'Public visible': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Closed: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Active: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'facilities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "facilities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
