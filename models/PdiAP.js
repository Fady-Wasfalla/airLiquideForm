const Sequelize = require('sequelize')
const db = require('../config/database')
const PdiAP = db.define('PdiAP', {
  pdiId: Sequelize.INTEGER,
  actions: Sequelize.STRING

},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = PdiAP
