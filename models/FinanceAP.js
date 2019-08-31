const Sequelize = require('sequelize')
const db = require('../config/database')
const FinanceAP = db.define('FinanceAP', {
  distributionsId: Sequelize.INTEGER,
  actions: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = FinanceAP
