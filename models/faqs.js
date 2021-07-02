const Sequelize = require('sequelize');
const sequelize = require("../db_config");

const FAQs = sequelize.sequelize.define (
  'faqs', 
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    answer: {
      type: Sequelize.DATE,
      allowNull: true
    },    
  }, {
    sequelize,
    tableName: 'faqs',
    //schema: 'public',
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

  exports.FAQs = FAQs;
