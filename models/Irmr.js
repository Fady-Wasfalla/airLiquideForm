const Sequelize = require('sequelize')
const db = require('../config/database')
const Irmr = db.define('Irmr', {
  formId: Sequelize.INTEGER,
  employeeName: Sequelize.STRING,
  projectType: Sequelize.STRING,

  /* IRMR classification */
  irmrDate: Sequelize.DataTypes.DATE.toString(),
  irmrsignature: Sequelize.STRING,
  irmrGround: Sequelize.STRING,

  /* SIS classification */
  sisDate: Sequelize.DataTypes.DATE.toString(),
  sisSignature: Sequelize.STRING,
  sisGround: Sequelize.STRING,
  criticalSfety: Sequelize.BOOLEAN,
  criticalReliability: Sequelize.BOOLEAN,
  criticalEnvironmentRisk: Sequelize.BOOLEAN,
  criticalProjectManagement: Sequelize.BOOLEAN,
  criticalOperationRisk: Sequelize.BOOLEAN,
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
