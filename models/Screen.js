const Sequelize = require('sequelize')
const db = require('../config/database')
const View = db.define('Views', {
  name: Sequelize.STRING },
{ timestamps: false }
)

module.exports = View
