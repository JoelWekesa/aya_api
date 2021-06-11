const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profile', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    facility_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'facilities',
        key: 'id'
      }
    },
    cadre_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cadres',
        key: 'id'
      }
    },
    department_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    },
    licence_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'licenses',
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
    tableName: 'profile',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "profile_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
