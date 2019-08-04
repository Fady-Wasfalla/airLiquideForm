const express = require('express')
const router = express.Router()
const controller = require('../../controllers/formController')
// get all forms

router.get('/', controller.default)

module.exports = router
