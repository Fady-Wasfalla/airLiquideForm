const Sequelize = require('sequelize')
const db = require('../config/database')
const FinanceFiles = db.define('FinanceFiles', {
  distributionsId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = FinanceFiles
