const Sequelize = require('sequelize')
const db = require('../config/database')
const Pdi = db.define('Pdi', {
  formId: Sequelize.INTEGER,
  employeeName: Sequelize.STRING,
  highwayEnterance: Sequelize.BOOLEAN,
  highwayEnteranceMP: Sequelize.STRING,
  highwayEnteranceCmt: Sequelize.STRING,
  areaFlat: Sequelize.BOOLEAN,
  areaFlatMP: Sequelize.STRING,
  areaFlatCmt: Sequelize.STRING,
  areaType: Sequelize.BOOLEAN,
  areaTypeMP: Sequelize.STRING,
  areaTypeCmt: Sequelize.STRING,
  dischargePoint: Sequelize.BOOLEAN,
  dischargePointMP: Sequelize.STRING,
  dischargePointCmt: Sequelize.STRING,
  carExit: Sequelize.BOOLEAN,
  carExitMP: Sequelize.STRING,
  carExitCmt: Sequelize.STRING,
  carGoBack: Sequelize.BOOLEAN,
  carGoBackDistance: Sequelize.FLOAT,
  carGoBackSafetyProcedure: Sequelize.STRING,
  tankCapacity: Sequelize.BOOLEAN,
  tankCapacityMP: Sequelize.STRING,
  tankCapacityCmt: Sequelize.STRING,
  tankCapacitySize: Sequelize.FLOAT,
  vaccumFlushing: Sequelize.BOOLEAN,
  vaccumFlushingMP: Sequelize.STRING,
  vaccumFlushingCmt: Sequelize.STRING,
  suitableElectricity: Sequelize.BOOLEAN,
  suitableElectricityMP: Sequelize.STRING,
  suitableElectricityCmt: Sequelize.STRING,
  adequateLight: Sequelize.BOOLEAN,
  adequateLightMP: Sequelize.STRING,
  adequateLightCmt: Sequelize.STRING,
  supplyTime: Sequelize.STRING, /* morning , night , all day */
  supplyTimeFrom: Sequelize.STRING,
  supplyTimeTo: Sequelize.STRING,
  supplyTimeCmt: Sequelize.STRING,
  fireExtinguishers: Sequelize.BOOLEAN,
  fireExtinguishersMP: Sequelize.STRING,
  fireExtinguishersCmt: Sequelize.STRING,
  areaObstacles: Sequelize.BOOLEAN,
  areaObstaclesMP: Sequelize.STRING,
  areaObstaclesCmt: Sequelize.STRING,
  vehicleType: Sequelize.STRING,
  inspector: Sequelize.STRING,
  approver: Sequelize.STRING,
  decision: Sequelize.STRING, /* disapprove   approve   approve with recommendation */
  decisionComment: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Pdi
