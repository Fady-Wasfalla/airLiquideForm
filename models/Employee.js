const Sequelize = require('sequelize')
const db = require('../config/database')
const Employee = db.define('Employees', {
  userName: Sequelize.STRING,
  email: Sequelize.STRING,
  activation: Sequelize.BOOLEAN },
{ timestamps: false
}
)

module.exports = Employee
