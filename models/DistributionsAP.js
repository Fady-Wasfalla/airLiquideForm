const Sequelize = require('sequelize')
const db = require('../config/database')
const DistributionsAP = db.define('DistributionsAP', {
  distributionsId: Sequelize.INTEGER,
  actions: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = DistributionsAP
