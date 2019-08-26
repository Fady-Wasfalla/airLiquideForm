const express = require('express')
const router = express.Router()
// setting of the uploads
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

/* cif routes */
const entity = require('../../controllers/employeeController')
// read all
router.get('/', entity.default)

// read one
router.get('/:id', entity.default)

// add one
router.post('/', entity.create)

// update one
router.put('/:id', entity.update)
// delete
router.delete('/:id', entity.delete)

router.post('/newForm', upload.single('formDocuments'), entity.newForm)

router.post('/distributionsFB', entity.distributionFB)

router.post('/sourcingsFB', entity.sourcingsFB)

router.post('/ciFB', entity.ciFB)

router.post('/prFB', entity.prFB)

router.post('/pdiFB', entity.pdiFB)

module.exports = router
