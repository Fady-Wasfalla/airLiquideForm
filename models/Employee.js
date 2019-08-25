const Sequelize = require('sequelize')
const db = require('../config/database')
const Employee = db.define('Employee', {
  userName: Sequelize.STRING,
  email: Sequelize.STRING,
  activation: Sequelize.BOOLEAN,
  name: Sequelize.STRING },
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Employee
