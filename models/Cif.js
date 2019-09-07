const Sequelize = require('sequelize')
const db = require('../config/database')
const Cif = db.define('Cif', {
  formId: Sequelize.INTEGER,
  product: Sequelize.STRING,
  applicationProduct: Sequelize.STRING,
  requiredPhase: Sequelize.STRING,
  flowUnit: Sequelize.STRING,
  averageFlowRateValue: Sequelize.FLOAT,
  averagePressure: Sequelize.FLOAT,
  averageDuration: Sequelize.FLOAT,
  maximumFlowRrateValue: Sequelize.FLOAT,
  maximumPressure: Sequelize.FLOAT,
  maximumDurationUnit: Sequelize.STRING,
  maximumDurationValue: Sequelize.FLOAT,
  repetitionPerDay: Sequelize.FLOAT,
  futureExpansionNotes: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Cif
