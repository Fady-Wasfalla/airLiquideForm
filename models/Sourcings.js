const Sequelize = require('sequelize')
const db = require('../config/database')
const Sourcings = db.define('Sourcings', {
  formId: Sequelize.INTEGER,
  employeeName: Sequelize.STRING,
  decision: Sequelize.STRING, /* disapprove   approve   approve with recommendation */
  decisionComment: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Sourcings
