const Model = require('../models/Employee')
const Permission = require('../models/Permission')
const Screen = require('../models/Screen')
const entityController = require('./main')
const Form = require('../models/Form')
const ConrtactPerson = require('../models/ContactPerson')
const History = require('../models/History')
const Pri = require('../models/Pri')
const Lvf = require('../models/Lvf')
const Cif = require('../models/Cif')
const Fluids = require('../models/Fluids')
const Utilities = require('../models/Utilities')
const Distributions = require('../models/Distributions')
const DistributionsAP = require('../models/DistributionsAP')
const Sourcings = require('../models/Sourcings')
const SourcingsAP = require('../models/SourcingsAP')
const CifResponse = require('../models/CifResponse')
const cifAPs = require('../models/CifAP')
const Irmr = require('../models/Irmr')
const IrmrAP = require('../models/IrmrAP')
const os = require('os')
const employeeName = os.userInfo().username

exports.default = async (req, res) => {
  await entityController.default(req, res, Model)
}
// show
exports.create = async (req, res) => {
  await entityController.create(req, res, Model)
}

exports.read = async (req, res) => {
  await entityController.read(req, res, Model)
}

exports.readByUserName = async (req, res) => {
  await entityController.readByUserName(req, res, Model)
}

exports.update = async (req, res) => {
  await entityController.update(req, res, Model)
}

exports.delete = async (req, res) => {
  await entityController.delete(req, res, Model)
}

/* sales man submit a form */
exports.newForm = async (req, res) => {
  try {
    const cbi = req.body.cbi
    let cbiData = Object.assign({}, cbi)
    delete cbiData.contactPerson
    const newForm = await Form.create({ ...cbi, employeeName })
    const formId = newForm.id

    const tzoffset = (new Date()).getTimezoneOffset() * 60000
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)

    await History.create({ formId, formSubmition: localISOTime })
    // inserting the conatct perosns
    if (cbi.contactPerson) {
      for (let i = 0; i < cbi.contactPerson.contactPersonName.length; i++) {
        let conrtactPersonData = {
          formId,
          contactPersonName: cbi.contactPerson.contactPersonName[i],
          title: cbi.contactPerson.title[i],
          phone: cbi.contactPerson.phone[i],
          mail: cbi.contactPerson.mail[i]
        }
        await ConrtactPerson.create(conrtactPersonData)
      }
    }
    // creating the lvf of the form
    await Lvf.create({ formId, ...req.body.lvf })
    // creating the cif of the form
    await Cif.create({ formId, ...req.body.cif })
    // creating the pri of the form
    const pri = req.body.pri
    let priData = Object.assign({}, pri)
    delete priData.fluids
    delete priData.utilities
    const newPri = await Pri.create({ formId, ...priData })
    const priId = newPri.id
    if (pri.fluids) {
      for (let i = 0; i < pri.fluids.characteristics.length; i++) {
        let fluidData = {
          priId,
          characteristics: pri.fluids.characteristics[i],
          extremePressure: pri.fluids.extremePressure[i],
          extremeTemperature: pri.fluids.extremeTemperature[i],
          fluidOrProduct: pri.fluids.fluidOrProduct[i],
          maximumFlow: pri.fluids.maximumFlow[i],
          nature1: pri.fluids.nature1[i],
          nature2: pri.fluids.nature2[i],
          nature3: pri.fluids.nature3[i],
          natureOther: pri.fluids.natureOther[i],
          volumeStored: pri.fluids.volumeStored[i]
        }
        await Fluids.create(fluidData)
      }
    }
    if (pri.utilities) {
      for (let i = 0; i < pri.utilities.utility.length; i++) {
        let fluidData = {
          priId,
          utility: pri.utilities.utility[i],
          details: pri.utilities.details[i]
        }
        await Utilities.create(fluidData)
      }
    }
    return res.status(200).json({
      status: 'Success',
      message: 'new form submitted with id ' + formId,
      data: newForm
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
// distribution feedback
exports.distributionFB = async (req, res) => {
  try {
    let finalDecisionData = Object.assign({}, req.body.finalDecision)
    delete finalDecisionData.actionPlan
    const fb = await Distributions.create({ formId: 1, ...finalDecisionData, employeeName })
    if (finalDecisionData.decision === 'Approve with recommendation') {
      for (let i = 0; i < req.body.finalDecision.actionPlan.length; i++) {
        let distributionsAPData = {
          distributionsId: fb.id,
          actions: req.body.finalDecision.actionPlan[i]
        }
        await DistributionsAP.create(distributionsAPData)
      }
    }
    return res.status(200).json({
      status: 'Success',
      message: 'Distribution Feedback sumbmitted ',
      data: fb
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
// sourcings feedback
exports.sourcingsFB = async (req, res) => {
  try {
    let finalDecisionData = Object.assign({}, req.body.finalDecision)
    delete finalDecisionData.actionPlan
    const fb = await Sourcings.create({ formId: 1, ...finalDecisionData, employeeName })
    if (finalDecisionData.decision === 'Approve with recommendation') {
      for (let i = 0; i < req.body.finalDecision.actionPlan.length; i++) {
        let sourcingsAPData = {
          sourcingsId: fb.id,
          actions: req.body.finalDecision.actionPlan[i]
        }
        await SourcingsAP.create(sourcingsAPData)
      }
    }
    return res.status(200).json({
      status: 'Success',
      message: 'Sourcings Feedback sumbmitted ',
      data: fb
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
// ci feedback
exports.ciFB = async (req, res) => {
  try {
    let finalDecisionData = Object.assign({}, req.body.finalDecision)
    delete finalDecisionData.actionPlan
    const fb = await CifResponse.create({ formId: 1, ...finalDecisionData, employeeName })
    if (finalDecisionData.decision === 'Approve with recommendation') {
      for (let i = 0; i < req.body.finalDecision.actionPlan.length; i++) {
        let sourcingsAPData = {
          CifResponseId: fb.id,
          actions: req.body.finalDecision.actionPlan[i]
        }
        await cifAPs.create(sourcingsAPData)
      }
    }
    return res.status(200).json({
      status: 'Success',
      message: 'CIF Feedback sumbmitted',
      data: fb
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.prFB = async (req, res) => {
  try {
    const irmr = req.body.irmr
    const finalDecision = req.body.finalDecision
    const irmrFb = { ...irmr,
      decision: finalDecision.decision,
      decisionComment: finalDecision.decisionComment }
    let finalDecisionData = Object.assign({}, irmrFb)
    delete finalDecisionData.actionPlan
    const fb = await Irmr.create({ formId: 1, ...finalDecisionData, employeeName })
    if (finalDecisionData.decision === 'Approve with recommendation') {
      for (let i = 0; i < finalDecision.actionPlan.length; i++) {
        let irmrsAPData = {
          IrmrId: fb.id,
          actions: finalDecision.actionPlan[i]
        }
        await IrmrAP.create(irmrsAPData)
      }
    }
    return res.status(200).json({
      status: 'Success',
      message: 'PR Feedback sumbmitted',
      data: fb
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.getStarted = async (req, res) => {
  try {
    const employee = await Model.findOne({ where: { userName: employeeName } })

    if (employee.activation === 0) {
      return res.json({
        status: 'Failed',
        message: 'Your account is deactivated 🤦 , Contact IT departement '
      })
    }
    const permissions = await Permission.findAll({ where: { employeeId: employee.id } })

    if (permissions.length === 0) {
      return res.json({
        status: 'Failed',
        message: 'You do not have any permissions 🙄 , Contact IT departement '
      })
    }

    let screensIds = []
    for (let i = 0; i < permissions.length; i++) {
      screensIds = screensIds.concat(permissions[i].screenId)
    }

    let screensNames = []
    for (let i = 0; i < screensIds.length; i++) {
      const screenName = await Screen.findOne({ where: { id: screensIds[i] } })
      screensNames = screensNames.concat(screenName.name)
    }

    return res.json({
      status: 'Success',
      data: screensNames,
      employeeId:employee.id,
      employeeName:employeeName
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

// get the forms that are not submitted by the selected departement
exports.getFormsDisplay = async (req, res) => {
  try {
    const dept = req.params.department
    const forms = await Form.findAll()

    let pendingForms = []
    let submittedForms = []

    console.log(forms[0].ciSubmition === true)

    switch (dept) {
      case 'Distribution' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].distributionSubmition) {
            submittedForms = submittedForms.concat(forms[i])
          } else {
            pendingForms = pendingForms.concat(forms[i])
          }
        }
        ;break
      case 'Sourcing' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].sourcingSubmition) {
            submittedForms = submittedForms.concat(forms[i])
          } else {
            pendingForms = pendingForms.concat(forms[i])
          }
        }
        ;break
      case 'Fleat' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].fleatSubmition) {
            submittedForms = submittedForms.concat(forms[i])
          } else {
            pendingForms = pendingForms.concat(forms[i])
          }
        }
        ;break
      case 'PR' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].irmrSubmition) {
            submittedForms = submittedForms.concat(forms[i])
          } else {
            pendingForms = pendingForms.concat(forms[i])
          }
        }
        ;break
      case 'CI' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].ciSubmition) {
            submittedForms = submittedForms.concat(forms[i])
          } else {
            pendingForms = pendingForms.concat(forms[i])
          }
        }
        ;break
      case 'Sales' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].distributionSubmition & forms[i].sourcingSubmition &
                      forms[i].fleatSubmition & forms[i].irmrSubmition & forms[i].ciSubmition) {
            submittedForms = submittedForms.concat(forms[i])
          } else {
            pendingForms = pendingForms.concat(forms[i])
          }
        }
        ;break
    }
    return res.json({
      status: 'Success',
      allForms: forms,
      pendingForms: pendingForms,
      submittedForms: submittedForms
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.getSubmittedFormByDept = async (req, res) => {
  try {
    const dept = req.params.department
    let forms = {}
    switch (dept) {
      case 'Distribution' : forms = await Form.findAll({ where: { distributionSubmition: 1 } }); break
      case 'Sourcing' : forms = await Form.findAll({ where: { sourcingSubmition: 1 } }); break
      case 'Fleat' : forms = await Form.findAll({ where: { fleatSubmition: 1 } }); break
      case 'PR' : forms = await Form.findAll({ where: { irmrSubmition: 1 } }); break
      case 'CI' : forms = await Form.findAll({ where: { ciSubmition: 1 } }); break
      case 'Sales' : forms = await Form.findAll({ where: {
        distributionSubmition: 1, sourcingSubmition: 1, fleatSubmition: 1, irmrSubmition: 1, ciSubmition: 1 } }); break
    }
    return res.json({
      status: 'Success',
      data: forms
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
