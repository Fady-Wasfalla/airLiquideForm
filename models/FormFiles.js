const Sequelize = require('sequelize')
const db = require('../config/database')
const FormFiles = db.define('FormFiles', {
  formId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  path: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = FormFiles
