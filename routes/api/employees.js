const express = require('express')
const router = express.Router()

/* cif routes */
const entity = require('../../controllers/employeeController')
// read all
router.get('/getStarted', entity.getStarted)

router.get('/getDeptForm/:department', entity.getDeptForm)

router.get('/', entity.default)

// get employee id 

// read one
router.get('/:id', entity.read)



// add one
router.post('/', entity.create)

// update one
router.put('/:id', entity.update)
// delete
router.delete('/:id', entity.delete)

router.post('/newForm', entity.newForm)

router.post('/distributionsFB', entity.distributionFB)

router.post('/sourcingsFB', entity.sourcingsFB)

router.post('/ciFB', entity.ciFB)

router.post('/prFB', entity.prFB)

module.exports = router
