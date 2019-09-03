const express = require('express')
const router = express.Router()
// setting of the uploads
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './formFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const formFilesUpload = multer({ storage: storage })


const entity = require('../../controllers/employeeController')

router.get('/getStarted', entity.getStarted)

router.get('/getFormsDisplay/:department', entity.getFormsDisplay)
// read all
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

router.post('/newForm', formFilesUpload.array('file', 20), entity.newForm)

router.post('/distributionsFB/:id', entity.distributionFB)

router.post('/financeFB/:id', entity.financeFB)

router.post('/sourcingsFB/:id', entity.sourcingsFB)

router.post('/ciFB/:id', entity.ciFB)

router.post('/prFB/:id', entity.prFB)

router.post('/pdiFB/:id', entity.pdiFB)

module.exports = router
