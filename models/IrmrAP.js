const Sequelize = require('sequelize')
const db = require('../config/database')
const IrmrAP = db.define('IrmrAP', {
  IrmrId: Sequelize.INTEGER,
  actions: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = IrmrAP
