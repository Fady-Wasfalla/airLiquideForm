const express = require('express')
const router = express.Router()
const controller = require('../../controllers/permissionController')
// get all
router.get('/', controller.default)

// add permission
router.post('/', controller.create)

// update permission
router.put('/:id', controller.update)
// delete permission
router.delete('/:id', controller.delete)
module.exports = router
