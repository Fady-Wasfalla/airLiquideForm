const Model = require('../models/Employee')
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
    if (cbi.conrtactPerson) {
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
    // console.log(irmrFb)
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
