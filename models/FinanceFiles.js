const Sequelize = require('sequelize')
const db = require('../config/database')
const FinanceFiles = db.define('FinanceFiles', {
  financeId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = FinanceFiles
