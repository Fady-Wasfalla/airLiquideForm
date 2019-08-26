const Sequelize = require('sequelize')
const db = require('../config/database')
const PdiFiles = db.define('PdiFiles', {
  pdiId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = PdiFiles
