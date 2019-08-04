const express = require('express')
const router = express.Router()
const controller = require('../../controllers/screenController')
// get all
router.get('/', controller.default)

// add screen
router.post('/', controller.create)

// update screen
router.put('/:id', controller.update)

// delete
router.delete('/:id', controller.delete)
module.exports = router
