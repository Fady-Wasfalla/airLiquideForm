const Sequelize = require('sequelize')
const db = require('../config/database')
const Form = db.define('Form', {
  employeeId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  date: Sequelize.DataTypes.date.toString(),
  zone: Sequelize.STRING,
  distributionSubmition: Sequelize.BOOLEAN,
  sourcingSubmition: Sequelize.BOOLEAN,
  fleatSubmition: Sequelize.BOOLEAN,
  irmrSubmition: Sequelize.BOOLEAN,
  ciSubmition: Sequelize.BOOLEAN
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Form
