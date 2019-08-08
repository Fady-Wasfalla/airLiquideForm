const Employee = require('../models/Employee')
// show
exports.default = async (req, res) => {
  var os = require('os')
  console.log(os.userInfo().username)
  try {
    const entities = await Employee.findAll({ raw: true })
    return res.json({
      status: 'Success',
      data: entities
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
// create
exports.create = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      status: 'Error',
      message: `Nothing was not entered in body`
    })
  }
  try {
    const newEmployee = await Employee.create(req.body)
    return res.json({
      status: 'New emplyee was added',
      data: newEmployee
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
// update
exports.update = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      status: 'Error',
      message: `Nothing was not entered in body`
    })
  }
  try {
    await Employee.update(
      req.body,
      { where: { id: req.params.id } }
    )
    return res.json({
      status: 'updated successfully'
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
// delete
exports.delete = async (req, res) => {
  try {
    await Employee.destroy(
      { where: { id: req.params.id } }
    )
    return res.json({
      status: 'Employee was deleted'
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
