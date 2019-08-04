const Form = require('../models/Form')

exports.default = async (req, res) => {
  console.log('bib')
  const entities = await Form.findAll({ raw: true })
  return res.json({
    status: 'Success',
    data: entities
  })
}
