const Sequelize = require('sequelize')
const db = require('../config/database')
const SourcingsAP = db.define('SourcingsAP', {
  sourcingsId: Sequelize.INTEGER,
  actions: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = SourcingsAP
