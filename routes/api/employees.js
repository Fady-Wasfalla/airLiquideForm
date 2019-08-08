const express = require('express')
const router = express.Router()
const controller = require('../../controllers/employeeController')
// get all
router.get('/', controller.default)

// add employee
router.post('/', controller.create)

// update emplyee
router.put('/:id', controller.update)
// delete
router.delete('/:id', controller.delete)
module.exports = router
