const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faqs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answer: {
      type: DataTypes.DATE,
      allowNull: true
    },    
  }, {
    sequelize,
    tableName: 'faqs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "faqs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
