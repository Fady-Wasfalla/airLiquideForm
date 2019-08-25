const Sequelize = require('sequelize')
const db = require('../config/database')
const Fluids = db.define('Fluids', {
  priId: Sequelize.INTEGER,
  fluidOrProduct: Sequelize.STRING,
  extremePressure: Sequelize.FLOAT,
  extremeTemperature: Sequelize.FLOAT,
  maximumFlow: Sequelize.FLOAT,
  volumeStored: Sequelize.FLOAT,
  characteristics: Sequelize.FLOAT,
  nature1: Sequelize.STRING,
  nature2: Sequelize.STRING,
  nature3: Sequelize.STRING,
  natureOther: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Fluids
