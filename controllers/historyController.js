const History = require('../models/History')
// show
exports.default = async (req, res) => {
  try {
    const entities = await History.findAll({ raw: true })
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
    const newHistory = await History.create(req.body)
    return res.json({
      status: 'New History was added',
      data: newHistory
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
    await History.update(
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
    await History.destroy(
      { where: { id: req.params.id } }
    )
    return res.json({
      status: 'Hidtory was deleted'
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
