const express = require('express')
// const cors = require('cors')
// const path = require('path')

// Require Router Handlers
const emplyees = require('./routes/api/employees')
const screens = require('./routes/api/screens')
const permissions = require('./routes/api/permissions')
const histories = require('./routes/api/histories')

const app = express()
// Init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
// Direct routes to appropriate files
app.use('/api/employees', emplyees)
app.use('/api/screens', screens)
app.use('/api/permissions', permissions)
app.use('/api/histories', histories)

// 500 internal server error handler
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
