const Sequelize = require('sequelize')
const db = require('../config/database')
const Screen = db.define('Screen', {
  name: Sequelize.STRING },
{ timestamps: false,
  freezeTableName: true }
)

module.exports = Screen
