const Sequelize = require('sequelize')
const db = require('../config/database')
const DistributionsFiles = db.define('DistributionsFiles', {
  distributionsId: Sequelize.INTEGER,
  path: Sequelize.STRING,
  name: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = DistributionsFiles
