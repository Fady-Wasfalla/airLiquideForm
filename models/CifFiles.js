const Sequelize = require('sequelize')
const db = require('../config/database')
const CifFiles = db.define('CifFiles', {
  CifResponseId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = CifFiles
