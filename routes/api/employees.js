const express = require('express')
const router = express.Router()
// setting of the uploads
const multer = require('multer')

const entity = require('../../controllers/employeeController')

router.get('/getStarted', entity.getStarted)

router.get('/getFormsDisplay/:department', entity.getFormsDisplay)

router.get('/getQuestions/:userName', entity.getQuestions)

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
/* ------------------------------------------------------------------------------------------------------------------- */
const formStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './formFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const formFilesUpload = multer({ storage: formStorage })
router.post('/newForm', formFilesUpload.array('file', 50), entity.newForm)
/* ------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------- */
const distributionStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './distributionFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const distributionFilesUpload = multer({ storage: distributionStorage })
router.post('/distributionsFB', distributionFilesUpload.array('file', 50), entity.distributionFB)
/* ------------------------------------------------------------------------------------------------------------------- */

router.post('/financeFB', entity.financeFB)

router.post('/sourcingsFB', entity.sourcingsFB)

router.post('/ciFB', entity.ciFB)

router.post('/prFB', entity.prFB)

router.post('/pdiFB', entity.pdiFB)

router.get('/showFormData/:id', entity.showFormData)

module.exports = router
