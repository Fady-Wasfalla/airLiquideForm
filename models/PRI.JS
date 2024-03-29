const Sequelize = require('sequelize')
const db = require('../config/database')
const Pri = db.define('Pri', {
  formId: Sequelize.INTEGER,
  // employeeName: Sequelize.STRING,
  /* First part of PRI form */
  // businessUnit: Sequelize.STRING,
  // projectName: Sequelize.STRING,
  // projectLocation: Sequelize.STRING,
  // capitalInvestment: Sequelize.STRING,
  // deadlineSubmittingBid: Sequelize.DataTypes.DATE.toString(),
  // businessDeveloper: Sequelize.STRING,
  // projectManager: Sequelize.STRING,
  // ownerRepresentative: Sequelize.STRING,
  // iRMR: Sequelize.STRING, msh mwgod f script l akher

  // 1. Project description and general Cmts
  descriptionAndGeneralCmts: Sequelize.STRING,

  // 2. Facility or Equipment
  facilityOrEquipment: Sequelize.STRING,
  facilityOrEquipmentRemarks: Sequelize.STRING,
  applicationType: Sequelize.STRING,
  applicationTypeRemarks: Sequelize.STRING,
  projectType: Sequelize.STRING,
  projectTypeRemarks: Sequelize.STRING,
  facilityOrEquipmentSupply: Sequelize.STRING,
  facilityOrEquipmentCmts: Sequelize.STRING,
  fixedStandardBulk: Sequelize.BOOLEAN,
  fixedBulkTankOnly: Sequelize.BOOLEAN,
  onlySupplyOfProduct: Sequelize.BOOLEAN,
  mobile: Sequelize.BOOLEAN,
  onBoardEquipment: Sequelize.BOOLEAN,
  onBoardEquipmentType: Sequelize.STRING,

  // 4. Site information
  // 4.1. Natural
  earthquake: Sequelize.BOOLEAN,
  operationAffectedRegulatedArea: Sequelize.BOOLEAN,
  weather: Sequelize.BOOLEAN,
  flooding: Sequelize.BOOLEAN,
  landslide: Sequelize.BOOLEAN,
  salinity: Sequelize.BOOLEAN,
  createPotentialEnvironmental: Sequelize.BOOLEAN,
  pollutionRemediation: Sequelize.BOOLEAN,
  operationsConditionsPotentially: Sequelize.BOOLEAN,
  naturalCmts: Sequelize.BOOLEAN,
  earthquakeCmt: Sequelize.STRING,
  operationAffectedRegulatedAreaCmt: Sequelize.STRING,
  weatherCmt: Sequelize.STRING,
  createPotentialEnvironmentalCmt: Sequelize.STRING,
  pollutionRemediationCmt: Sequelize.STRING,
  operationsConditionsPotentiallyCmt: Sequelize.STRING,
  naturalCmtsCmt: Sequelize.STRING,

  // 4.2 Industrial
  pollution: Sequelize.BOOLEAN,
  highVoltageLines: Sequelize.BOOLEAN,
  limitedSpacing: Sequelize.BOOLEAN,
  hazardousMaterialStorage: Sequelize.BOOLEAN,
  confinement: Sequelize.BOOLEAN,
  potentialExistingSitePollution: Sequelize.BOOLEAN,
  proximityToHighRisk: Sequelize.BOOLEAN,
  proximityOfCombustibleMaterial: Sequelize.BOOLEAN,
  undergroundNetwork: Sequelize.BOOLEAN,
  properDrainage: Sequelize.BOOLEAN,
  sittingInSafetyZone: Sequelize.BOOLEAN,
  customerEquipmentNotFullyCompatible: Sequelize.BOOLEAN,
  industrialCmts: Sequelize.BOOLEAN,
  pollutionCmt: Sequelize.STRING,
  highVoltageLinesCapacity: Sequelize.FLOAT,
  highVoltageLinesDistanceToTank: Sequelize.FLOAT,
  limitedSpacingCmt: Sequelize.STRING,
  hazardousMaterialStorageCmt: Sequelize.STRING,
  confinementCmt: Sequelize.STRING,
  potentialExistingSitePollutionCmt: Sequelize.STRING,
  proximityToHighRiskCmt: Sequelize.STRING,
  proximityOfCombustibleMaterialCmt: Sequelize.STRING,
  undergroundNetworkDepth: Sequelize.FLOAT,
  undergroundNetworkCmt:Sequelize.STRING,
  sittingInSafetyZoneCmt: Sequelize.STRING,
  customerEquipmentNotFullyCompatibleCmt: Sequelize.STRING,
  industrialCmtsCmt: Sequelize.STRING,

  // 4.3 Population/Site location
  residentialArea: Sequelize.BOOLEAN,
  publicBuilding: Sequelize.BOOLEAN,
  transportationCorridor: Sequelize.BOOLEAN,
  isolatedArea: Sequelize.BOOLEAN,
  siteAccessibility: Sequelize.BOOLEAN,
  highSecurityRisk: Sequelize.BOOLEAN,
  populationCmts: Sequelize.BOOLEAN,
  residentialAreaCmt: Sequelize.STRING,
  publicBuildingCmt: Sequelize.STRING,
  transportationCorridorCmt: Sequelize.STRING,
  isolatedAreaCmt: Sequelize.STRING,
  siteAccessibilityCmt: Sequelize.STRING,
  highSecurityRiskCmt: Sequelize.STRING,
  populationCmtsCmt: Sequelize.STRING,

  // 4.4. Customer
  financialSituation: Sequelize.BOOLEAN,
  durabilityOfCustomerActivities: Sequelize.BOOLEAN,
  newBusinessCustomer: Sequelize.BOOLEAN,
  strategicCustomer: Sequelize.BOOLEAN,
  customerCmts: Sequelize.BOOLEAN,
  financialSituationCmt: Sequelize.STRING,
  strategicCustomerCmt: Sequelize.STRING,
  customerCmtsCmt: Sequelize.STRING,

  // 5. Project Organisation
  jointProjectThirdParties: Sequelize.BOOLEAN,
  jointProjectInvolvingAirLiquide: Sequelize.BOOLEAN,
  equipmentSuppliedByCustomer: Sequelize.BOOLEAN,
  useStandBbyAssets: Sequelize.BOOLEAN,
  necessaryDesignAuthorities: Sequelize.BOOLEAN,
  projectSubmittedToThirdParty: Sequelize.BOOLEAN,
  difficultyAccessExpertise: Sequelize.BOOLEAN,
  issueOfResource: Sequelize.BOOLEAN,
  projectOrganisationCmts: Sequelize.BOOLEAN,
  jointProjectThirdPartiesCmt: Sequelize.STRING,
  jointProjectInvolvingAirLiquideCmt: Sequelize.STRING,
  equipmentSuppliedByCustomerCmt: Sequelize.STRING,
  useStandBbyAssetsCmt: Sequelize.STRING,
  necessaryDesignAuthoritiesCmt: Sequelize.STRING,
  projectSubmittedToThirdPartyCmt: Sequelize.STRING,
  difficultyAccessExpertiseCmt: Sequelize.STRING,
  issueOfResourceCmt: Sequelize.STRING,
  projectOrganisationCmtsCmt: Sequelize.STRING,

  // 6. Processes, Products, Technology (PPT), Equipment
  equipmentTechnologySupplier: Sequelize.BOOLEAN,
  qualifiedValidatedEquipment: Sequelize.BOOLEAN,
  newImposedAssociates: Sequelize.BOOLEAN,
  innovationNewlyDeveloped: Sequelize.BOOLEAN,
  projectUsingInnovativePpt: Sequelize.BOOLEAN,
  intellectualPropertyWatch: Sequelize.BOOLEAN,
  lackMainEquipments: Sequelize.BOOLEAN,
  lackSimilarProcess: Sequelize.BOOLEAN,
  majorProblemEncountered: Sequelize.BOOLEAN,
  requirementsUtilitiesSpecification: Sequelize.BOOLEAN,
  installatioProductRequireHazardous: Sequelize.BOOLEAN,
  productsRawMaterials: Sequelize.BOOLEAN,
  operationHaveNegativeImpact: Sequelize.BOOLEAN,
  riskAnalysisProject: Sequelize.BOOLEAN,
  previousRiskAnalysis: Sequelize.BOOLEAN,
  processesProductsCmts: Sequelize.BOOLEAN,
  equipmentTechnologySupplierCmt: Sequelize.STRING,
  qualifiedValidatedEquipmentCmt: Sequelize.STRING,
  newImposedAssociatesCmt: Sequelize.STRING,
  innovationNewlyDevelopedCmt: Sequelize.STRING,
  projectUsingInnovativePptCmt: Sequelize.STRING,
  intellectualPropertyWatchCmt: Sequelize.STRING,
  lackMainEquipmentsCmt: Sequelize.STRING,
  lackSimilarProcessCmt: Sequelize.STRING,
  majorProblemEncounteredCmt: Sequelize.STRING,
  requirementsUtilitiesSpecificationCmt: Sequelize.STRING,
  installatioProductRequireHazardousCmt: Sequelize.STRING,
  productsRawMaterialsCmt: Sequelize.STRING,
  operationHaveNegativeImpactCmt: Sequelize.STRING,
  riskAnalysisProjectCmt: Sequelize.STRING,
  previousRiskAnalysisCmt: Sequelize.STRING,
  processesProductsCmtsCmt: Sequelize.STRING,

  /* 7. Operation Conditions */
  customizedPlant: Sequelize.BOOLEAN,
  newServiceBySubsidiary: Sequelize.BOOLEAN,
  includeTransportationActivities: Sequelize.BOOLEAN,
  operationDoneByCustomer: Sequelize.BOOLEAN,
  operatingWithoutDesign: Sequelize.BOOLEAN,
  noOperatingExperienceSimilarProcess: Sequelize.BOOLEAN,
  potentialBackflow: Sequelize.BOOLEAN,
  specialTraining: Sequelize.BOOLEAN,
  unattendedFacility: Sequelize.BOOLEAN,
  remoteFillingLines: Sequelize.BOOLEAN,
  operationCmts: Sequelize.BOOLEAN,
  customizedPlantCmt: Sequelize.STRING,
  newServiceBySubsidiaryCmt: Sequelize.STRING,
  includeTransportationActivitiesCmt: Sequelize.STRING,
  includeTransportationActivitiesType: Sequelize.STRING,
  operationDoneByCustomerCmt: Sequelize.STRING,
  operatingWithoutDesignCmt: Sequelize.STRING,
  noOperatingExperienceSimilarProcessCmt: Sequelize.STRING,
  potentialBackflowCmt: Sequelize.STRING,
  specialTrainingCmt: Sequelize.STRING,
  unattendedFacilityCmt: Sequelize.STRING,
  remoteFillingLinesCmt: Sequelize.STRING,
  operationCmtsCmt: Sequelize.STRING,

  /* 8. Customer Requirements */
  notFullyDefined: Sequelize.BOOLEAN,
  technicalIssues: Sequelize.BOOLEAN,
  contractualTargets: Sequelize.BOOLEAN,
  requiredStudiesReliability: Sequelize.BOOLEAN,
  safetyIntegrityLevel: Sequelize.BOOLEAN,
  mandatoryCustomerStandards: Sequelize.BOOLEAN,
  specificInsurance: Sequelize.BOOLEAN,
  requiredStudies: Sequelize.BOOLEAN,
  peakFlowRequirement: Sequelize.BOOLEAN,
  customerRequirementCmts: Sequelize.BOOLEAN,
  notFullyDefinedCmt: Sequelize.STRING,
  technicalIssuesCmt: Sequelize.STRING,
  contractualTargetsCmt: Sequelize.STRING,
  requiredStudiesReliabilityCmt: Sequelize.STRING,
  safetyIntegrityLevelCmt: Sequelize.STRING,
  mandatoryCustomerStandardsCmt: Sequelize.STRING,
  specificInsuranceCmt: Sequelize.STRING,
  requiredStudiesCmt: Sequelize.STRING,
  peakFlowRequirementCmt: Sequelize.STRING,
  customerRequirementCmtsCmt: Sequelize.STRING,

  /* 9. Regulatory Obligations / Environmental */
  regulatoryInformation: Sequelize.BOOLEAN,
  lackOfKnowledge: Sequelize.BOOLEAN,
  environmentalImpactStudy: Sequelize.BOOLEAN,
  societalRiskAnalysis: Sequelize.BOOLEAN,
  explosiveAreaClassification: Sequelize.BOOLEAN,
  safetyHazardStudy: Sequelize.BOOLEAN,
  oSHA: Sequelize.BOOLEAN,
  areaClassificationElectrical: Sequelize.BOOLEAN,
  pressureVesselRegulation: Sequelize.BOOLEAN,
  transportationRegulation: Sequelize.BOOLEAN,
  electricalEquipmentEegulation: Sequelize.BOOLEAN,
  otherRegulation: Sequelize.BOOLEAN,
  otherApplicablePermits: Sequelize.BOOLEAN,
  softwareProcessControl: Sequelize.BOOLEAN,
  regulatoryInformationCmt: Sequelize.STRING,
  lackOfKnowledgeCmt: Sequelize.STRING,
  pressureVesselRegulationCmt: Sequelize.STRING,
  transportationRegulationCmt: Sequelize.STRING,
  electricalEquipmentEegulationCmt: Sequelize.STRING,
  otherRegulationCmt: Sequelize.STRING,
  otherApplicablePermitsCmt: Sequelize.STRING,
  softwareProcessControlCmt: Sequelize.STRING,

  /* 10. Consequences of supply or delivery loss (flow interruption) */
  corporateImage: Sequelize.BOOLEAN,
  impactOnCustomer: Sequelize.BOOLEAN,
  impactOnStrategic: Sequelize.BOOLEAN,
  financialLoss: Sequelize.BOOLEAN,
  impactOnAL: Sequelize.BOOLEAN,
  contractualPenalties: Sequelize.BOOLEAN,
  consequencesCmts: Sequelize.BOOLEAN,
  corporateImageCmt: Sequelize.STRING,
  impactOnCustomerCmt: Sequelize.STRING,
  impactOnCustomerType: Sequelize.STRING,
  impactOnStrategicCmt: Sequelize.STRING,
  financialLossCmt: Sequelize.STRING,
  impactOnALCmt: Sequelize.STRING,
  contractualPenaltiesCmt: Sequelize.STRING,
  consequencesCmtsCmt: Sequelize.STRING,

  /* 11. In case of acquisition (Project type acquisition) */
  technicalInspection: Sequelize.BOOLEAN,
  potentialNonComplianceSafety: Sequelize.BOOLEAN,
  significantDiscrepanciesAL: Sequelize.BOOLEAN,
  potentialIssueCompetencies: Sequelize.BOOLEAN,
  obsoleteEquipment: Sequelize.BOOLEAN,
  potentialNonComplianceEnvironmental: Sequelize.BOOLEAN,
  facilityAge: Sequelize.BOOLEAN,
  acquisitionCmts: Sequelize.BOOLEAN,

  technicalInspectionCmt: Sequelize.STRING,
  potentialNonComplianceSafetyCmt: Sequelize.STRING,
  significantDiscrepanciesALCmt: Sequelize.STRING,
  potentialIssueCompetenciesCmt: Sequelize.STRING,
  obsoleteEquipmentCmt: Sequelize.STRING,
  potentialNonComplianceEnvironmentalCmt: Sequelize.STRING,
  facilityAgeCmt: Sequelize.STRING,
  acquisitionCmtsCmt: Sequelize.STRING
},
{ timestamps: false,
  freezeTableName: true
}
)

module.exports = Pri
