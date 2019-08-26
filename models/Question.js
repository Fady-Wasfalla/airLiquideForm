const Sequelize = require('sequelize')
const db = require('../config/database')
const Question = db.define('Question', {
  formId: Sequelize.INTEGER,
  asker: Sequelize.STRING,
  submitionDate: Sequelize.DataTypes.DATE.toString(),
  replayDate: Sequelize.DataTypes.DATE.toString(),
  question: Sequelize.STRING,
  answer: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Question
