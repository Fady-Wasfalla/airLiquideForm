const Sequelize = require('sequelize')
const db = require('../config/database')
const Permission = db.define('Permission', {
  employeeId: Sequelize.INTEGER,
  screenId: Sequelize.INTEGER
},
{ timestamps: false
}
)

module.exports = Permission
