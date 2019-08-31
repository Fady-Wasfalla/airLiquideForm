const express = require('express')
const router = express.Router()

/* cif routes */
const entity = require('../../controllers/permissionController')
// read all
router.get('/', entity.default)

// get all permissions
router.get('/allPermissions/:employeeId', entity.getAllPermissions)

// read one
router.get('/:id', entity.read)

// add one
router.post('/', entity.create)

// update one
router.put('/:id', entity.update)
// delete
router.delete('/:id', entity.delete)
module.exports = router
