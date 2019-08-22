const Sequelize = require('sequelize')
const db = require('../config/database')
const FireExtinguishers = db.define('FireExtinguishers', {
  pdiId: Sequelize.INTEGER,
  number: Sequelize.INTEGER,
  capacity: Sequelize.FLOAT
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = FireExtinguishers
