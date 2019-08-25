const Sequelize = require('sequelize')
const db = require('../config/database')
const CifAP = db.define('CifAP', {
  CifResponseId: Sequelize.INTEGER
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = CifAP
