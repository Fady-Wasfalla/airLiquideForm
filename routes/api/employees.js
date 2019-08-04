const express = require('express')
const router = express.Router()
const controller = require('../../controllers/employeeController')
// get all
router.get('/', controller.default)

// add employee
router.post('/', controller.create)

// update emplyee
router.put('/:id', controller.update)
module.exports = router
