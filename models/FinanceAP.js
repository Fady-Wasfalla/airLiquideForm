const Sequelize = require('sequelize')
const db = require('../config/database')
const FinanceAP = db.define('FinanceAP', {
  financeId: Sequelize.INTEGER,
  actions: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = FinanceAP
