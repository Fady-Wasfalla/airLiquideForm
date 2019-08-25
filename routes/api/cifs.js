const express = require('express')

const router = express.Router()

/* cif routes */
const Cif = require('../../controllers/cifController')
// read all
router.get('/', Cif.default)

// read one
router.get('/:id', Cif.default)

// add one
router.post('/', Cif.create)

// update one
router.put('/:id', Cif.update)
// delete
router.delete('/:id', Cif.delete)
module.exports = router
