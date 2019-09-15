const express = require('express')
const router = express.Router()
// setting of the uploads
const multer = require('multer')

const entity = require('../../controllers/employeeController')

router.get('/getStarted', entity.getStarted)

router.get('/getFormsDisplay/:department', entity.getFormsDisplay)

router.get('/getQuestions/:userName', entity.getQuestions)
router.get('/getPermissions', entity.getPermissions)
router.post('/addEmployee', entity.addEmployee)
router.put('/editPermissions', entity.editPermissions)



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
    cb(null, './files/formFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const formFilesUpload = multer({ storage: formStorage })
router.post('/newForm', formFilesUpload.array('file', 50), entity.newForm)
/* ------------------------------------------------------------------------------------------------------------------- */
const distributionStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/distributionFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const distributionFilesUpload = multer({ storage: distributionStorage })
router.post('/distributionsFB', distributionFilesUpload.array('file', 50), entity.distributionFB)
/* ------------------------------------------------------------------------------------------------------------------- */
const sourcingStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/sourcingFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const sourcingFilesUpload = multer({ storage: sourcingStorage })
router.post('/sourcingsFB', sourcingFilesUpload.array('file', 50), entity.sourcingsFB)
/* ------------------------------------------------------------------------------------------------------------------- */
const cifStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/cifFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const cifFilesUpload = multer({ storage: cifStorage })
router.post('/ciFB', cifFilesUpload.array('file', 50), entity.ciFB)
/* ------------------------------------------------------------------------------------------------------------------- */
const prStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/prFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const prFilesUpload = multer({ storage: prStorage })
router.post('/prFB', prFilesUpload.array('file', 50), entity.prFB)
/* ------------------------------------------------------------------------------------------------------------------- */
const pdiStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/pdiFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const pdiFilesUpload = multer({ storage: pdiStorage })
router.post('/pdiFB', pdiFilesUpload.array('file', 50), entity.pdiFB)
/* ------------------------------------------------------------------------------------------------------------------- */
const financeStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/financeFiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const financeFilesUpload = multer({ storage: financeStorage })
router.post('/financeFB', financeFilesUpload.array('file', 50), entity.financeFB)
/* ------------------------------------------------------------------------------------------------------------------- */
router.get('/showFormData/:id', entity.showFormData)

module.exports = router
