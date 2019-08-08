const Permission = require('../models/Permission')
// show
exports.default = async (req, res) => {
  try {
    const screens = await Permission.findAll({ raw: true })
    return res.json({
      status: 'Success',
      data: screens
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
    const newPermission = await Permission.create(req.body)
    return res.json({
      status: 'New screen was added',
      data: newPermission
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
    await Permission.update(
      req.body,
      { where: { id: req.params.id } }
    )
    return res.json({
      status: 'Screen was updated'
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
    await Permission.destroy(
      { where: { id: req.params.id } }
    )
    return res.json({
      status: 'Screen was deleted'
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
