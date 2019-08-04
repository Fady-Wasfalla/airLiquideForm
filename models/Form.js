const Sequelize = require('sequelize')
const db = require('../config/database')
const Form = db.define('Forms', {
  name: Sequelize.STRING,
  tank: Sequelize.FLOAT },
{ timestamps: false
}
)

module.exports = Form
