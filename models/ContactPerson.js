const Sequelize = require('sequelize')
const db = require('../config/database')
const ContactPerson = db.define('ContactPerson', {
  formId: Sequelize.INTEGER,
  contactPersonName: Sequelize.STRING,
  title: Sequelize.STRING,
  phone: Sequelize.STRING,
  mail: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = ContactPerson
