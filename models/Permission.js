const Sequelize = require('sequelize')
const db = require('../config/database')
const Permission = db.define('Permission', {
  employeeId: Sequelize.INTEGER,
  screenId: Sequelize.INTEGER
},
{ timestamps: false,
  freezeTableName: true 
}
)

module.exports = Permission
