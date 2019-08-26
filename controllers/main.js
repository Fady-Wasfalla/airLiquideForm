// show all
exports.default = async (req, res, model) => {
  try {
    const entities = await model.findAll({ raw: true })
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
// show one
exports.read = async (req, res, model) => {
  if (Object.keys(req.body.cbi).length === 1) {
    res.status(400).json({
      status: 'Error',
      message: `Nothing was not entered in body`
    })
  }
  try {
    const entitiy = await model.findOne({ where: { id: req.params.id } })
    return res.json({
      status: 'Success',
      data: entitiy
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
// create
exports.create = async (req, res, model) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      status: 'Error',
      message: `Nothing was not entered in body`
    })
  }
  try {
    const newmodel = await model.create(req.body)
    return res.json({
      status: 'New emplyee was added',
      data: newmodel
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
// update
exports.update = async (req, res, model) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      status: 'Error',
      message: `Nothing was not entered in body`
    })
  }
  try {
    await model.update(
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
exports.delete = async (req, res, model) => {
  try {
    await model.destroy(
      { where: { id: req.params.id } }
    )
    return res.json({
      status: 'model was deleted'
    })
  } catch (error) {
    return res.status(400).json({
      status: 'Failed',
      data: error.message
    })
  }
}
