const express = require('express')
const cors = require('cors')
// const path = require('path')

// Require Router Handlers
const emplyees = require('./routes/api/employees')
const screens = require('./routes/api/screens')
const permissions = require('./routes/api/permissions')
const histories = require('./routes/api/histories')
const forms = require('./routes/api/forms')
const formFiles = require('./routes/api/formFiles')
const contactPersons = require('./routes/api/contactPersons')
const lvfs = require('./routes/api/lvfs')
const cifs = require('./routes/api/cifs')
const cifResponses = require('./routes/api/cifResponses')
const cifAPs = require('./routes/api/cifAPs')
const cifFiles = require('./routes/api/cifFiles')
const pris = require('./routes/api/pris')
const utilities = require('./routes/api/utilities')
const fluids = require('./routes/api/fluids')
const irmrs = require('./routes/api/irmrs')
const irmrAPs = require('./routes/api/irmrAPs')
const irmrFiles = require('./routes/api/irmrFiles')
const distributions = require('./routes/api/distributions')
const distributionAPs = require('./routes/api/distributionAPs')
const distributionFiles = require('./routes/api/distributionFiles')
const finance = require('./routes/api/finance')
const financeAPs = require('./routes/api/financeAPs')
const financeFiles = require('./routes/api/financeFiles')
const sourcings = require('./routes/api/sourcings')
const sourcingAPs = require('./routes/api/sourcingAPs')
const sourcingFiles = require('./routes/api/sourcingFiles')
const pdis = require('./routes/api/pdis')
const pdiAPs = require('./routes/api/pdiAPs')
const pdiFiles = require('./routes/api/pdiFiles')
const questions = require('./routes/api/questions')
const fireExtinguishers = require('./routes/api/fireExtinguishers')
const app = express()
// Init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/files', express.static('files'))
app.use('/files/distributionFiles', express.static('distributionFiles'))
app.use('/files/formFiles', express.static('formFiles'))
app.use('/files/cifFiles', express.static('cifFiles'))
app.use('/files/sourcingFiles', express.static('sourcingFiles'))
app.use('/files/pdiFiles', express.static('pdiFiles'))
app.use('/files/prFiles', express.static('prFiles'))
app.use('/files/financeFiles', express.static('financeFiles'))



// DB authenticate
const db = require('./config/database')
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
// Direct routes to appropriate files
app.use('/api/employees', emplyees)
app.use('/api/screens', screens)
app.use('/api/permissions', permissions)
app.use('/api/histories', histories)
app.use('/api/forms', forms)
app.use('/api/formFiles', formFiles)
app.use('/api/contactPersons', contactPersons)
app.use('/api/lvfs', lvfs)
app.use('/api/cifs', cifs)
app.use('/api/cifResponses', cifResponses)
app.use('/api/cifAPs', cifAPs)
app.use('/api/cifFiles', cifFiles)
app.use('/api/pris', pris)
app.use('/api/fluids', fluids)
app.use('/api/utilities', utilities)
app.use('/api/irmrs', irmrs)
app.use('/api/irmrAPS', irmrAPs)
app.use('/api/irmrFiles', irmrFiles)
app.use('/api/distributions', distributions)
app.use('/api/distributionsAPs', distributionAPs)
app.use('/api/distributionsFiles', distributionFiles)
app.use('/api/finance', finance)
app.use('/api/financeAps', financeAPs)
app.use('/api/financeFiles', financeFiles)
app.use('/api/sourcings', sourcings)
app.use('/api/sourcingAPs', sourcingAPs)
app.use('/api/sourcingFiles', sourcingFiles)
app.use('/api/pdis', pdis)
app.use('/api/pdiAps', pdiAPs)
app.use('/api/pdiFiles', pdiFiles)
app.use('/api/questions', questions)
app.use('/api/fireExtinguishers', fireExtinguishers)
// // 500 internal server error handler
app.use((err, _req, res, next) => {
  if (err.statusCode === 400) {
    return next(err)
  }

  return res.status(500).json({
    data: null,
    err: process.env === 'production'
      ? null
      : err,
    msg: process.env === 'production'
      ? 'Error!'
      : '500 Internal Server Error'
  })
})

// 400 error handler
app.use((err, _req, res, next) => {
  if (err.statusCode === 404) {
    return next()
  }

  return res.status(400).json({
    data: null,
    err: process.env === 'production'
      ? null
      : err,
    msg: '400 Bad Request'
  })
})

// 404 error handler
app.use((_req, res) => res.status(404)
  .json({
    data: null,
    status: 'Error',
    msg: 'Error 404: We can not find what you are looking for'
  }))

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8000

app.listen(port, () => { console.log(`Server is up and running on port ${port}`) })
