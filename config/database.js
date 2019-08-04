const dbAdmin = require('./dbAdmin')
const Sequelize = require('sequelize')
module.exports = new Sequelize('Air_Liquide', dbAdmin.user,
  dbAdmin.password, {
    host: dbAdmin.host,
    port: '1433',
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })
