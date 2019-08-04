const Employee = require('../models/Employee')
// show
exports.default = async (req, res) => {
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
    const newEmployee = await Employee.create({
      userName: req.body.name,
      email: req.body.email
    })
    return res.json({
      status: 'Success',
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
      status: 'Success'
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
