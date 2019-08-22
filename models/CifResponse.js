const Sequelize = require('sequelize')
const db = require('../config/database')
const CifResponse = db.define('CifResponse', {
  formId: Sequelize.INTEGER,
  employeeName: Sequelize.STRING,
  decision: Sequelize.STRING,
  decisionComment: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = CifResponse
