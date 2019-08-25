const Model = require('../models/Employee')
const entityController = require('./main')

exports.default = async (req, res) => {
  await entityController.default(res, Model)
}
// show
exports.create = async (req, res) => {
  await entityController.create(req, res, Model)
}

exports.read = async (req, res) => {
  await entityController.read(req, res, Model)
}

exports.update = async (req, res) => {
  await entityController.update(req, res, Model)
}

exports.delete = async (req, res) => {
  await entityController.delete(req, res, Model)
}
/* sales man submit a form */
exports.newForm = async (req, res) => {
const cbi = req.body.cbi
const lvf = req.body.lvf
const cif = req.body.cif
const pri = req.body.pri
}
