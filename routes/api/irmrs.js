const express = require('express')
const router = express.Router()

/* cif routes */
const entity = require('../../controllers/irmrController')
// read all
router.get('/', entity.default)

// read one
router.get('/:id', entity.read)

// add one
router.post('/', entity.create)

// update one
router.put('/:id', entity.update)
// delete
router.delete('/:id', entity.delete)
module.exports = router
