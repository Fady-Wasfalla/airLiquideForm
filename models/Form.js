const Sequelize = require('sequelize')
const db = require('../config/database')
const Form = db.define('Form', {
  employeeName: Sequelize.STRING,
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  date: Sequelize.DataTypes.DATE.toString(),
  zone: Sequelize.STRING,
  distributionSubmition: Sequelize.BOOLEAN,
  sourcingSubmition: Sequelize.BOOLEAN,
  fleatSubmition: Sequelize.BOOLEAN,
  irmrSubmition: Sequelize.BOOLEAN,
  ciSubmition: Sequelize.BOOLEAN,
  financeSubmition: Sequelize.BOOLEAN,
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Form
