const Sequelize = require('sequelize')
const db = require('../config/database')
const IrmrFiles = db.define('IrmrFiles', {
  IrmrId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)
module.exports = IrmrFiles
