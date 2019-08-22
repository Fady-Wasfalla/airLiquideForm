const Sequelize = require('sequelize')
const db = require('../config/database')
const Utilities = db.define('Utilities', {
  priId: Sequelize.INTEGER,
  utility: Sequelize.STRING,
  details: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Utilities
