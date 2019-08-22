const Sequelize = require('sequelize')
const db = require('../config/database')
const Irmr = db.define('Irmr', {
  formId: Sequelize.INTEGER,
  employeeName: Sequelize.STRING,
  projectType: Sequelize.STRING,

  /* IRMR classification */
  irmrClassification: Sequelize.STRING,
  irmrDate: Sequelize.DataTypes.Date.toString(),
  irmrsignature: Sequelize.STRING,
  irmrGround: Sequelize.STRING,

  /* SIS classification */
  sisClassification: Sequelize.STRING,
  sisDate: Sequelize.DataTypes.Date.toString(),
  sisSignature: Sequelize.STRING,
  sisGround: Sequelize.STRING,
  sisSfety: Sequelize.BOOLEAN,
  sisReliability: Sequelize.BOOLEAN,
  sisEnvironmentRisk: Sequelize.BOOLEAN,
  sisProjectManagement: Sequelize.BOOLEAN,
  sisOperationRisk: Sequelize.BOOLEAN,
  /* PRA */
  praRequiring: Sequelize.BOOLEAN,
  praProject: Sequelize.BOOLEAN,
  praSfety: Sequelize.BOOLEAN,
  praReliability: Sequelize.BOOLEAN,
  praCmt: Sequelize.STRING,
  /* PHA  */
  phaRequiring: Sequelize.BOOLEAN,
  phaCmt: Sequelize.STRING,
  /* Specific quantitative assessment study */
  quantitativeAssessmentRequiring: Sequelize.BOOLEAN,
  quantitativeAssessmentCmt: Sequelize.STRING,
  /* EIS  */
  eisRequiring: Sequelize.BOOLEAN,
  eisCmt: Sequelize.STRING,

  decision: Sequelize.STRING, /* disapprove   approve   approve with recommendation */
  decisionComment: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Irmr
