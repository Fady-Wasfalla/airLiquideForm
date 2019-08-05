const Sequelize = require('sequelize')
const db = require('../config/database')
const Screen = db.define('Screens', {
  name: Sequelize.STRING },
{ timestamps: false }
)

module.exports = Screen
