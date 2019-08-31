const express = require('express')
const router = express.Router()

/* cif routes */
const entity = require('../../controllers/contactPersonController')
// read all
router.get('/', entity.default)

// read one
router.get('/:id', entity.read)

// read by formId
router.get('/form/:id', entity.readByFormId)

// add one
router.post('/', entity.create)

// update one
router.put('/:id', entity.update)
// delete
router.delete('/:id', entity.delete)
module.exports = router
