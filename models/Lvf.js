const Sequelize = require('sequelize')
const db = require('../config/database')
const Lvf = db.define('Lvf', {
  formId: Sequelize.INTEGER,
  customerType: Sequelize.STRING,
  businessType: Sequelize.STRING,
  startDeliveryDate: Sequelize.DataTypes.DATE.toString(),
  forecastDeliveryEnd: Sequelize.DataTypes.DATE.toString(),
  product: Sequelize.STRING,
  purity: Sequelize.FLOAT,
  customerConsumption: Sequelize.STRING,
  regularMonths: Sequelize.FLOAT,
  patchDay: Sequelize.FLOAT,
  patchAvgHrs: Sequelize.FLOAT,
  productAvailability: Sequelize.BOOLEAN,
  seasonalConsumption: Sequelize.FLOAT,
  seasonPeriod: Sequelize.FLOAT,
  customerTank: Sequelize.FLOAT,
  customerDeadLevel: Sequelize.FLOAT,
  usableCapacityAboveDeadLevel: Sequelize.FLOAT,
  peakConsumption: Sequelize.FLOAT,
  frequencyOfPeakConsumption: Sequelize.STRING,
  availableDelivery: Sequelize.STRING,
  startDeliveryTime: Sequelize.STRING,
  endDeliveryTime: Sequelize.STRING,
  weightScale: Sequelize.BOOLEAN,
  tankGuage: Sequelize.BOOLEAN,
  flowMeter:Sequelize.BOOLEAN,
  lvfComment: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Lvf
