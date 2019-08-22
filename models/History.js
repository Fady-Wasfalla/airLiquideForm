const Sequelize = require('sequelize')
const db = require('../config/database')
const History = db.define('History', {
  formId: Sequelize.INTEGER,
  formSubmition: Sequelize.DataTypes.DATE.toString(),
  distributionSubmition: Sequelize.DataTypes.DATE.toString(),
  sourcingSubmition: Sequelize.DataTypes.DATE.toString(),
  fleatSubmition: Sequelize.DataTypes.DATE.toString(),
  irmrSubmition: Sequelize.DataTypes.DATE.toString(),
  ciSubmition: Sequelize.DataTypes.DATE.toString() },
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = History
