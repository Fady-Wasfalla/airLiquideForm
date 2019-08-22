const Sequelize = require('sequelize')
const db = require('../config/database')
const SourcingsFiles = db.define('SourcingsFiles', {
  sourcingsId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = SourcingsFiles
