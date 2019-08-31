const Model = require('../models/Form')
const entityController = require('./main')
const FormFiles = require('../models/FormFiles')

exports.default = async (req, res) => {
  await entityController.default(req, res, Model)
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
// exports.uploadFiles = async (req, res) => {
//   try {
//     console.log('formmmmmmmmmms')
//     console.log(req.body)
//     const formId = req.body.formId
//     const n = await FormFiles.create({ formId, name: req.body.fileName, path: req.file.path })
//     return res.status(200).json({
//       status: 'Success',
//       message: 'uploaded success',
//       data: n
//     })
//   } catch (error) {
//     return res.status(200).json({
//       status: 'Faild',
//       message: error.message

//     })
//   }
// }
