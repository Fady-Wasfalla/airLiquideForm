const Model = require('../models/Employee')
const Permission = require('../models/Permission')
const Screen = require('../models/Screen')
const entityController = require('./main')
const Form = require('../models/Form')
const ContactPerson = require('../models/ContactPerson')
const History = require('../models/History')
const Pri = require('../models/Pri')
const Lvf = require('../models/Lvf')
const Cif = require('../models/Cif')
const CifAP = require('../models/CifAP')
const CifFiles = require('../models/CifFiles')
const Fluids = require('../models/Fluids')
const Utilities = require('../models/Utilities')
const Distributions = require('../models/Distributions')
const DistributionsAP = require('../models/DistributionsAP')
const DistributionsFiles = require('../models/DistributionsFiles')
const Finance = require('../models/Finance')
const FinanceAP = require('../models/FinanceAP')
const FinanceFiles = require('../models/FinanceFiles')
const Sourcings = require('../models/Sourcings')
const SourcingsFiles = require('../models/SourcingsFiles')
const SourcingsAP = require('../models/SourcingsAP')
const CifResponse = require('../models/CifResponse')
const cifAPs = require('../models/CifAP')
const Irmr = require('../models/Irmr')
const IrmrFiles = require('../models/IrmrFiles')
const IrmrAP = require('../models/IrmrAP')
const Pdi = require('../models/Pdi')
const PdiFiles = require('../models/PdiFiles')
const PdiAP = require('../models/PdiAP')
const FireExtinguishers = require('../models/FireExtinguishers')
const FormFiles = require('../models/FormFiles')
const Question = require('../models/Question')
const os = require('os')
const employeeName = os.userInfo().username
const emailUserName = require('../config/keys').user
const emailPassword = require('../config/keys').pass

const DistributionMail = require('../config/keys').Distribution
const SourcingMail = require('../config/keys').Sourcing
const FleatMail = require('../config/keys').Fleat
const PRMail = require('../config/keys').PR
const CIMail = require('../config/keys').CI
const SalesMail = require('../config/keys').Sales
const FinanceMail = require('../config/keys').Finance

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: emailUserName,
    pass: emailPassword
  }
})

const tzoffset = (new Date()).getTimezoneOffset() * 60000
const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
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
    const cbi = JSON.parse(req.body.cbi)
    const lvf = JSON.parse(req.body.lvf)
    const cif = JSON.parse(req.body.cif)
    const pri = JSON.parse(req.body.pri)
    const filesNames = JSON.parse(req.body.filesNames)
    const files = req.files
    const name = JSON.parse(req.body.employeeName)
    const newForm = await Form.create({ ...cbi, employeeName:name })
    const formId = newForm.id
    // history of the form
    await History.create({ formId, formSubmition: localISOTime })
    // uploading the files with the name
      if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await FormFiles.create({ formId, name: filesNames[i], path: files[i].path })
      }
    }
    // inserting the conatct perosns
    if (cbi && cbi.contactPerson.contactPersonName.length > 0) {
      for (let i = 0; i < cbi.contactPerson.contactPersonName.length; i++) {
        if (cbi.contactPerson.contactPersonName[i] !== '') {
          let ContactPersonData = {
            formId,
            contactPersonName: cbi.contactPerson.contactPersonName[i],
            title: cbi.contactPerson.title[i],
            phone: cbi.contactPerson.phone[i],
            mail: cbi.contactPerson.mail[i]
          }
          await ContactPerson.create(ContactPersonData)
        }
      }
    }
    // creating the lvf of the form
    await Lvf.create({ formId, ...lvf })
    // creating the cif of the form
    await Cif.create({ formId, ...cif })
    // creating the pri of the form
    const newPri = await Pri.create({ formId, ...pri })
    const priId = newPri.id

    if (pri && pri.fluids.fluidOrProduct.length > 0) {
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
    if (pri && pri.utilities.utility.length > 0) {
      for (let i = 0; i < pri.utilities.utility.length; i++) {
        let fluidData = {
          priId,
          utility: pri.utilities.utility[i],
          details: pri.utilities.details[i]
        }
        await Utilities.create(fluidData)
      }
    }
    // transporter.sendMail({
    //   to: `"${DistributionMail}","${SourcingMail}","${FleatMail}",
    //   "${PRMail}","${CIMail}","${SalesMail}","${FinanceMail}"`,
    //   subject: 'New job request need to be reviewed',
    //   message: `Please review the form with id number ${formId} and give your feedback`,
    //   html: `Please click this link to reset your password: <a href="${url}">${url}</a>`
    // })
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
    const formId = req.body.formId
    const customerTank = req.body.customerTank
    const supplyTimeFrom = req.body.supplyTimeFrom
    const supplyTimeTo = req.body.supplyTimeTo
    const prevFB = await Distributions.findOne({ where: { formId: formId } })
    if (prevFB) {
      return res.json({
        status: 'Success',
        message: 'this form is aleady reviewed'
      })
    }
    let finalDecision = JSON.parse(req.body.finalDecision)
    let actionPlan = finalDecision.actionPlan
    const filesNames = JSON.parse(req.body.filesNames)
    const files = req.files
    const name = JSON.parse(req.body.employeeName)
    const fb = await Distributions.create({ formId: formId,
      ...finalDecision,
      employeeName:name,
      customerTank: customerTank,
      supplyTimeFrom: supplyTimeFrom,
      supplyTimeTo: supplyTimeTo })
    await Form.update(
      { distributionSubmition: true },
      { where: { id: formId } }
    )
    await History.update(
      { distributionSubmition: localISOTime },
      { where: { formId: formId } }
    )
    if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await DistributionsFiles.create({ distributionsId: fb.id, name: filesNames[i], path: files[i].path })
      }
    }
    if (finalDecision.decision === 'Approve with recommendation') {
      for (let i = 0; i < actionPlan.length; i++) {
        let distributionsAPData = {
          distributionsId: fb.id,
          actions: actionPlan[i]
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

// Finance feedback
exports.financeFB = async (req, res) => {
  try {
    const formId = req.body.formId
    const prevFB = await Finance.findOne({ where: { formId: formId } })
    if (prevFB) {
      return res.json({
        status: 'Success',
        message: 'this form is aleady reviewed'
      })
    }
    let finalDecision = JSON.parse(req.body.finalDecision)
    let actionPlan = finalDecision.actionPlan
    const filesNames = JSON.parse(req.body.filesNames)
    const files = req.files
    const name = JSON.parse(req.body.employee)
    const fb = await Finance.create({ ...finalDecision, employeeName:name, formId: formId })
    await Form.update(
      { financeSubmition: true },
      { where: { id: formId } }
    )
    await History.update(
      { financeSubmition: localISOTime },
      { where: { formId: formId } }
    )
    if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await FinanceFiles.create({ financeId: fb.id, name: filesNames[i], path: files[i].path })
      }
    }
    if (finalDecision.decision === 'Approve with recommendation') {
      for (let i = 0; i < actionPlan.length; i++) {
        let financeAPData = {
          financeId: fb.id,
          actions: actionPlan[i]
        }
        await FinanceAP.create(financeAPData)
      }
    }
    return res.status(200).json({
      status: 'Success',
      message: 'Finance Feedback sumbmitted ',
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
    const formId = req.body.formId
    const prevFB = await Sourcings.findOne({ where: { formId: formId } })
    if (prevFB) {
      return res.json({
        status: 'Success',
        message: 'this form is aleady reviewed'
      })
    }
    let finalDecision = JSON.parse(req.body.finalDecision)
    let actionPlan = finalDecision.actionPlan
    const filesNames = JSON.parse(req.body.filesNames)
    const files = req.files
    const name = JSON.parse(req.body.employeeName)
    const fb = await Sourcings.create({ formId: formId, ...finalDecision, employeeName:name })
    await Form.update(
      { sourcingSubmition: true },
      { where: { id: formId } }
    )
    await History.update(
      { sourcingSubmition: localISOTime },
      { where: { formId: formId } }
    )
    if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await SourcingsFiles.create({ sourcingsId: fb.id, name: filesNames[i], path: files[i].path })
      }
    }
    if (finalDecision.decision === 'Approve with recommendation') {
      for (let i = 0; i < actionPlan.length; i++) {
        let sourcingsAPData = {
          sourcingsId: fb.id,
          actions: actionPlan[i]
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
    const formId = req.body.formId
    const prevFB = await CifResponse.findOne({ where: { formId: formId } })
    if (prevFB) {
      return res.json({
        status: 'Success',
        message: 'this form is aleady reviewed'
      })
    }
    let finalDecision = JSON.parse(req.body.finalDecision)
    let actionPlan = finalDecision.actionPlan
    const filesNames = JSON.parse(req.body.filesNames)
    const files = req.files
    const name = JSON.parse(req.body.employeeName)
    const fb = await CifResponse.create({ formId: formId, ...finalDecision, employeeName:name })
    await Form.update(
      { ciSubmition: true },
      { where: { id: formId } }
    )
    await History.update(
      { ciSubmition: localISOTime },
      { where: { formId: formId } }
    )
    if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await CifFiles.create({ CifResponseId: fb.id, name: filesNames[i], path: files[i].path })
      }
    }
    if (finalDecision.decision === 'Approve with recommendation') {
      for (let i = 0; i < actionPlan.length; i++) {
        let cifAPData = {
          CifResponseId: fb.id,
          actions: actionPlan[i]
        }
        await cifAPs.create(cifAPData)
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
    const formId = req.body.formId
    const prevFB = await Irmr.findOne({ where: { formId: formId } })
    if (prevFB) {
      return res.json({
        status: 'Success',
        message: 'this form is aleady reviewed'
      })
    }
    let finalDecision = JSON.parse(req.body.finalDecision)
    let actionPlan = finalDecision.actionPlan
    const filesNames = JSON.parse(req.body.filesNames)
    const irmr = JSON.parse(req.body.irmr)
    const irmrFb = { ...irmr,
      decision: finalDecision.decision,
      decisionComment: finalDecision.decisionComment }
    const files = req.files
    const name = JSON.parse(req.body.employeeName)
    const fb = await Irmr.create({ formId: formId, ...irmrFb, employeeName:name })
    await Form.update(
      { irmrSubmition: true },
      { where: { id: formId } }
    )
    await History.update(
      { irmrSubmition: localISOTime },
      { where: { formId: formId } }
    )
    if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await IrmrFiles.create({ IrmrId: fb.id, name: filesNames[i], path: files[i].path })
      }
    }
    if (finalDecision.decision === 'Approve with recommendation') {
      for (let i = 0; i < actionPlan.length; i++) {
        let irmrsAPData = {
          IrmrId: fb.id,
          actions: actionPlan[i]
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
// pdi feedback
exports.pdiFB = async (req, res) => {
  try {
    const formId = req.body.formId
    const prevFB = await Pdi.findOne({ where: { formId: formId } })
    if (prevFB) {
      return res.json({
        status: 'Success',
        message: 'this form is aleady reviewed'
      })
    }
    const files = req.files
    let finalDecision = JSON.parse(req.body.finalDecision)
    let actionPlan = finalDecision.actionPlan
    const filesNames = JSON.parse(req.body.filesNames)
    const pdi = JSON.parse(req.body.pdi)
    const fireExt = pdi.fireExtinguishersList
    let pdiData = Object.assign({}, pdi)
    delete pdiData.fireExtinguishersList
    const pdiFb = { ...pdiData,
      decision: finalDecision.decision,
      decisionComment: finalDecision.decisionComment }
    const name = JSON.parse(req.body.employeeName)
    const fb = await Pdi.create({ formId: formId, ...pdiFb, employeeName:name })
    await Form.update(
      { fleatSubmition: true },
      { where: { id: formId } }
    )
    await History.update(
      { fleatSubmition: localISOTime },
      { where: { formId: formId } }
    )
    if (files.length > 0) {
      for (let i = 0; i < filesNames.length; i++) {
        await PdiFiles.create({ pdiId: fb.id, name: filesNames[i], path: files[i].path })
      }
    }
    const pdiId = fb.id
    if (pdiFb.decision === 'Approve with recommendation') {
      for (let i = 0; i < actionPlan.length; i++) {
        let irmrsAPData = {
          pdiId: fb.id,
          actions: actionPlan[i]
        }
        await PdiAP.create(irmrsAPData)
      }
    }
    if (fireExt.length > 0) {
      if (fireExt.number.length > 0) {
        for (let i = 0; i < fireExt.number.length; i++) {
          let fireExtData = {
            pdiId, number: fireExt.number[i], capacity: fireExt.capacity[i]
          }
          await FireExtinguishers.create(fireExtData)
        }
      }
      return res.status(200).json({
        status: 'Success',
        message: 'Fleat Feedback sumbmitted',
        data: fb
      })
    }
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.getStarted = async (req, res) => {
  try {
    const name = req.body.userName
    const employee = await Model.findOne({ where: { userName: name } })
    if (!employee) {
      return res.json({
        status: 'Failed',
        message: 'You have to sign in'
      })
    }
    if (employee.activation === false) {
      return res.json({
        status: 'Failed',
        message: 'Your account is deactivated 🤦 , Contact IT departement '
      })
    }
    const permissions = await Permission.findAll({ where: { employeeId: employee.id, enabled: true } })

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
      message: 'you can work now',
      data: screensNames,
      employeeId: employee.id,
      employeeName: employeeName
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
    // get the final decision to be displayed in cases files

    const name = req.body.userName
    const employee = await Model.findOne({ where: { userName: name } })
    if (!employee) {
      return res.json({
        status: 'Unauthorized',
        message: 'You have to sign in'
      })
    }

    const dept = req.params.department
    const forms = await Form.findAll({ order: [['id', 'DESC']] })

    for (let i = 0; i < forms.length; i++) {
      let decision = []
      let distributionDecision = await Distributions.findOne({ where: { formId: forms[i].id } })
      if (distributionDecision) { decision = decision.concat(distributionDecision.decision) } else { decision = decision.concat(0) }

      let sourcingDecision = await Sourcings.findOne({ where: { formId: forms[i].id } })
      if (sourcingDecision) { decision = decision.concat(sourcingDecision.decision) } else { decision = decision.concat(0) }

      let pdiDecision = await Pdi.findOne({ where: { formId: forms[i].id } })
      if (pdiDecision) { decision = decision.concat(pdiDecision.decision) } else { decision = decision.concat(0) }

      let ciDecision = await CifResponse.findOne({ where: { formId: forms[i].id } })
      if (ciDecision) { decision = decision.concat(ciDecision.decision) } else { decision = decision.concat(0) }

      let financeDecision = await Finance.findOne({ where: { formId: forms[i].id } })
      if (financeDecision) { decision = decision.concat(financeDecision.decision) } else { decision = decision.concat(0) }

      let irmrDecision = await Irmr.findOne({ where: { formId: forms[i].id } })
      if (irmrDecision) { decision = decision.concat(irmrDecision.decision) } else { decision = decision.concat(0) }
      let fd = ''
      if (decision.includes('Disapprove')) {
        fd = 'Rejected'
      } else {
        if (decision.includes(0)) {
          fd = 'In proccessing'
        } else {
          fd = 'Accepted'
        }
      }
      forms[i]['fd'] = fd
    }

    let allFds = []
    let pendingFds = []
    let submittedFds = []
    for (let i = 0; i < forms.length; i++) {
      allFds = allFds.concat(forms[i].fd)
    }

    let pendingForms = []
    let submittedForms = []

    switch (dept) {
      case 'Distribution' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].distributionSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
      case 'Sourcing' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].sourcingSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
      case 'Fleat' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].fleatSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
      case 'PR' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].irmrSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
      case 'CI' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].ciSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
      case 'Finance' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].financeSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
      case 'Sales' :
        for (let i = 0; i < forms.length; i++) {
          // get submitted forms by the dept
          if (forms[i].distributionSubmition & forms[i].sourcingSubmition &
                      forms[i].fleatSubmition & forms[i].irmrSubmition & forms[i].ciSubmition & forms[i].financeSubmition) {
            submittedForms = submittedForms.concat(forms[i])
            submittedFds = submittedFds.concat(forms[i].fd)
          } else {
            pendingForms = pendingForms.concat(forms[i])
            pendingFds = pendingFds.concat(forms[i].fd)
          }
        }
        ;break
    }

    return res.json({
      status: 'Success',
      allForms: forms,
      pendingForms: pendingForms,
      submittedForms: submittedForms,
      allFds: allFds,
      pendingFds: pendingFds,
      submittedFds: submittedFds
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.getQuestions = async (req, res) => {
  try {
    
    let pendingQuestions = []
    let submittedQuestions = []
    Form.hasMany(Question, { foreignKey: 'id' })
    Question.belongsTo(Form, { foreignKey: 'formId' })
    const userName = req.params.userName
    const questions = await Question.findAll({ order: [['id', 'DESC']],
      include: [{
        model: Form,
        required: true,
        where: { employeename: userName }
      }]
    })
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer) {
        submittedQuestions = submittedQuestions.concat(questions[i])
      } else {
        pendingQuestions = pendingQuestions.concat(questions[i])
      }
    }

    return res.json({
      status: 'Success',
      allQuestions: questions,
      pendingQuestions: pendingQuestions,
      submittedQuestions: submittedQuestions
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.showFormData = async (req, res) => {
  try {
    const formId = req.params.id
    const form = await Form.findOne({ where: { id: formId } })
    if (!form) {
      return res.json({
        status: 'Failed',
        message: `There is no form with id ${formId}`
      })
    }
    const formFiles = await FormFiles.findAll({ where: { formId: formId } })
    const contactPerson = await ContactPerson.findAll({ where: { formId: formId } })
    const history = await History.findAll({ where: { formId: formId } })
    const questions = await Question.findAll({ where: { formId: formId } })

    const formData = { form, contactPerson, formFiles, history, questions }
    let lvf = await Lvf.findOne({ where: { formId: formId } })
    let cif = await Cif.findOne({ where: { formId: formId } })
    if (lvf === null) lvf = {}

    /* ------------------------------------------------------PRI-------------------------------------------------------- */
    let pri = {}
    let fluids = []
    let utilities = []
    let priTemp = await Pri.findOne({ where: { formId: formId } })
    let priData = { pri, fluids, utilities }
    if (priTemp) {
      const priId = priTemp.id
      fluids = await Fluids.findAll({ where: { priId: priId } })
      utilities = await Utilities.findAll({ where: { priId: priId } })
      pri = priTemp
      priData = { pri, fluids, utilities }
    }
    /* ------------------------------------------------------PRI-------------------------------------------------------- */
    /* -------------------------------------------DISTRIBUTIONS-------------------------------------------------------- */
    const distributions = await Distributions.findOne({ where: { formId: formId } })
    var distributionsResponseData = {}
    if (distributions) {
      const distributionsId = distributions.id
      const distributionsAP = await DistributionsAP.findAll({ where: { distributionsId: distributionsId } })
      const distributionsFiles = await DistributionsFiles.findAll({ where: { distributionsId: distributionsId } })
      distributionsResponseData = {
        distributions,
        distributionsAP,
        distributionsFiles
      }
    }
    /* -------------------------------------------DISTRIBUTIONS-------------------------------------------------------- */
    /* ----------------------------------------------------CIF-------------------------------------------------------- */
    let cifResponse = await CifResponse.findOne({ where: { formId: formId } })
    let cifResponseData = {}
    if (cifResponse) {
      const cifId = cifResponse.id
      const cifAP = await CifAP.findAll({ where: { CifResponseId: cifId } })
      const cifFiles = await CifFiles.findAll({ where: { CifResponseId: cifId } })
      cifResponseData = {
        cifResponse,
        cifAP,
        cifFiles
      }
    }
    if (!cif) cif = {}
    /* -----------------------------------------------------CIF-------------------------------------------------------- */
    /* ----------------------------------------------------IRMR-------------------------------------------------------- */
    let irmr = await Irmr.findOne({ where: { formId: formId } })
    var irmrData = {}
    if (irmr) {
      const irmrId = irmr.id
      const irmrAP = await IrmrAP.findAll({ where: { irmrId: irmrId } })
      const irmrFiles = await IrmrFiles.findAll({ where: { irmrId: irmrId } })
      irmrData = {
        irmr,
        irmrAP,
        irmrFiles
      }
    }
    /* -----------------------------------------------------IRMR-------------------------------------------------------- */
    /* ------------------------------------------------------PDI-------------------------------------------------------- */
    let pdi = await Pdi.findOne({ where: { formId: formId } })
    let pdiData = {}
    if (pdi) {
      const pdiId = pdi.id
      const pdiAP = await PdiAP.findAll({ where: { pdiId: pdiId } })
      const pdiFiles = await PdiFiles.findAll({ where: { pdiId: pdiId } })
      const fireExtinguishers = await FireExtinguishers.findAll({ where: { pdiId: pdiId } })
      pdiData = {
        pdi,
        fireExtinguishers,
        pdiAP,
        pdiFiles
      }
    }
    /* -----------------------------------------------------PDI-------------------------------------------------------- */
    /* ----------------------------------------------------SOURCINGS-------------------------------------------------------- */
    let sourcings = await Sourcings.findOne({ where: { formId: formId } })
    let sourcingsData = {}
    if (sourcings) {
      const sourcingsId = sourcings.id
      const sourcingsAP = await SourcingsAP.findAll({ where: { sourcingsId: sourcingsId } })
      const sourcingsFiles = await SourcingsFiles.findAll({ where: { sourcingsId: sourcingsId } })
      sourcingsData = {
        sourcings,
        sourcingsAP,
        sourcingsFiles
      }
    }
    /* -----------------------------------------------------SOURCINGS-------------------------------------------------------- */
    /* ----------------------------------------------------FINANCE-------------------------------------------------------- */
    let finance = await Finance.findOne({ where: { formId: formId } })
    let financeData = {}
    if (finance) {
      const financeId = finance.id
      const financeAP = await FinanceAP.findAll({ where: { financeId: financeId } })
      const financeFiles = await FinanceFiles.findAll({ where: { financeId: financeId } })
      financeData = {
        finance,
        financeAP,
        financeFiles
      }
    }
    /* -----------------------------------------------------FINANCE-------------------------------------------------------- */
    return res.json({
      status: 'Success',
      formData, /* { form, contactPerson, formFiles, history, questions } */
      lvf,
      cif,
      priData, /* { pri, fluids, utilities } */
      cifResponseData, /* { cifResponse,cifAP, cifFiles} */
      distributionsResponseData, /* {distributions,distributionsAP,distributionsFiles} */
      irmrData, /* {irmr,irmrAP, irmrFiles } */
      pdiData, /* {pdi,pdiAP,pdiFiles} ======> pdi conatins { pdi, fireExtinguishers } */
      sourcingsData, /* { sourcings,sourcingsAP, sourcingsFile} */
      financeData
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.getPermissions = async (req, res) => {
  try {
    Model.hasMany(Permission, { foreignKey: 'employeeId' })
    Permission.belongsTo(Model, { foreignKey: 'employeeId' })
    Screen.hasMany(Permission, { foreignKey: 'screenId' })
    Permission.belongsTo(Screen, { foreignKey: 'screenId' })

    const employees = await Model.findAll({
      include: [{
        model: Permission,
        include: [{
          model: Screen
        }]
      }]
    })

    return res.json({
      status: 'Success',
      data: employees
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.addEmployee = async (req, res) => {
  try {
    const employee = await Model.create(req.body)
    const screenIds = await Screen.findAll()
    for (let i = 0; i < screenIds.length; i++) {
      await Permission.create({ employeeId: employee.id, screenId: screenIds[i].id })
    }

    return res.json({
      status: 'Success',
      message: 'you can work now'
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}

exports.editPermissions = async (req, res) => {
  try {
    Screen.hasMany(Permission, { foreignKey: 'screenId' })
    Permission.belongsTo(Screen, { foreignKey: 'screenId' })
    let { employeeId } = req.body
    let { distribution } = req.body
    let { sourcing } = req.body
    let { fleat } = req.body
    let { pR } = req.body
    let { cI } = req.body
    let { sales } = req.body
    let { finance } = req.body
    let { admin } = req.body

    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'Distribution' }
      }] }).then(r => Permission.update({ enabled: distribution }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'Sourcing' }
      }] }).then(r => Permission.update({ enabled: sourcing }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'Fleat' }
      }] }).then(r => Permission.update({ enabled: fleat }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'PR' }
      }] }).then(r => Permission.update({ enabled: pR }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'CI' }
      }] }).then(r => Permission.update({ enabled: cI }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'Sales' }
      }] }).then(r => Permission.update({ enabled: sales }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'Finance' }
      }] }).then(r => Permission.update({ enabled: finance }, { where: { id: r.id } }))
    Permission.findOne({ where: { employeeId: employeeId },
      include: [{
        model: Screen,
        where: { name: 'Admin' }
      }] }).then(r => Permission.update({ enabled: admin }, { where: { id: r.id } }))

    return res.json({
      status: 'Success'

    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
exports.resetPassword = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await Model.findOne({ where: { id: userId } })
    if (!user) {
      return res.json({
        status: 'Failed',
        message: 'No such a user'
      })
    }
    const newPassword = { password: 'Welcome_1' }
    await Model.update(
      newPassword,
      { where: { id: userId } }
    )
    return res.json({
      status: 'Success',
      message: 'Password resetted successfully with ( Welcome_1 )'
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
exports.changePassword = async (req, res) => {
  try {
    const { userName, oldPassword, firstPassword } = req.body
    const user = await Model.findOne({ where: { userName: userName } })
    if (!user) {
      return res.json({
        status: 'Failed',
        message: 'No such a user'
      })
    }
    if (oldPassword !== user.password) {
      return res.json({
        status: 'Failed',
        message: 'Wrong password'
      })
    }
    const pass = { password: firstPassword }
    await Model.update(
      pass,
      { where: { userName: userName } }
    )
    return res.json({
      status: 'Success',
      message: 'Password updated successfully'
    })
  } catch (error) {

  }
}

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body
    const employee = await Model.findOne({ where: { userName: userName } })
    if (!employee) {
      return res.json({
        status: 'Failed',
        message: `unregistered user`
      })
    }
    if (!employee.activation) {
      return res.json({
        status: 'Failed',
        message: `your account is deactivated`
      })
    }
    if (employee.password !== password) {
      return res.json({
        status: 'Failed',
        message: `Wrong password , if you forget your password contact admin`
      })
    }
    return res.json({
      status: 'Sucess',
      data: userName
    })
  } catch (error) {
    return res.json({
      status: 'Failed',
      message: error.message
    })
  }
}
