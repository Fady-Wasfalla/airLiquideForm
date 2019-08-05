const Sequelize = require('sequelize')
const db = require('../config/database')
const Permission = db.define('Permissions', {
  employeeId: Sequelize.INTEGER,
  screenId: Sequelize.INTEGER
},
{ timestamps: false
}
)

module.exports = Permission
