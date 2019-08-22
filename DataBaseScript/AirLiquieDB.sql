create database Air_Liquide
go
use [Air_Liquide]
go 

Create table Employee (
id int IDENTITY(1,1) PRIMARY KEY,
userName NVARCHAR(300) not null unique , /* make them unique and not null*/ 
email NVARCHAR(300) , /* make them unique and not null*/
departement NVARCHAR(300) , /* make them unique and not null*/
[activation] BIT DEFAULT 1 not null ,
)
Go

Create table Screen (
id int IDENTITY(1,1) PRIMARY KEY,
name NVARCHAR(300) not null unique ,
)
Go 


Create table [Permission](
employeeId int ,
screenId int ,
FOREIGN KEY(employeeId) REFERENCES Employee(id),
FOREIGN KEY(screenId) REFERENCES Screen(id),
CONSTRAINT PK_Permission PRIMARY KEY (employeeId,screenId)
)
Go


/* Form */
create table [dbo].[Form](
id int IDENTITY(1,1) PRIMARY KEY,
FOREIGN KEY(employeeId) REFERENCES Employee(id),
[name] NVARCHAR(200),
[date] date ,
[address] NVARCHAR(200),
[zone] NVARCHAR(100),
distributionSubmition bit DEFAULT 0,
sourcingSubmition bit DEFAULT 0 ,
fleatSubmition bit DEFAULT 0,
irmrSubmition bit DEFAULT 0,
ciSubmition bit DEFAULT 0,
)
go


create table [dbo].[FormFiles] (
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id),
[name] VARCHAR(300),
[path] varchar(5000)
)
go

create table [dbo].[ContactPerson](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
contactPersonName nvarchar(500),
title nvarchar(500) ,
phone nvarchar(500) ,
mail nvarchar(500) ,
)
go


create table [dbo].[Question](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
asker NVARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
submitionDate datetime ,
replayDate datetime ,
question NVARCHAR(200),
answer NVARCHAR(200),

)



/* LVF form */
create table [dbo].[Lvf](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
customerType NVARCHAR(100)  ,
businessType NVARCHAR(100) ,
startDeliveryDate date  ,
forecastDeliveryEnd date  ,
product NVARCHAR(100) ,
purity NVARCHAR(100) ,
customerConsumption NVARCHAR(100) ,
regularMonths float ,
patchDay float ,
patchAvgHrs float ,
productAvailability bit ,
seasonalConsumption float  ,
seasonPeriod float , 
customerTank float ,
customerDeadLevel float  ,
usableCapacityAboveDeadLevel float ,
peakConsumption float ,
frequencyOfPeakConsumption NVARCHAR(300) ,
availableDelivery float ,
startDeliveryTime time ,
endDeliveryTime time ,
weightScale float ,
tankGuage float ,
lvfComment NVARCHAR(300) ,
)
go

/* CIF form */
create table [dbo].[Cif](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
product NVARCHAR(200) ,
applicationProduct NVARCHAR(300) ,
requiredPhase NVARCHAR(200) ,
flowUnit NVARCHAR(200) ,
averageFlowRateValue float ,
averagePressure float ,
averageDuration float ,
maximumFlowRrateValue float ,
maximumPressure float ,
maximumDurationUnit NVARCHAR(200) ,
maximumDurationValue float ,
repetitionPerDay float  ,
futureExpansionNotes NVARCHAR(300) ,
customerSiteLayout BIT , 

)
go

create table [dbo].[CifResponse](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName NVARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
decision NVARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment NVARCHAR(100),
)
go

create table [dbo].[CifAP](
id int IDENTITY(1,1) PRIMARY KEY,
CifResponseId int FOREIGN KEY REFERENCES CifResponse(id) ,
actions nvarchar(500)
)
go

create table [dbo].[CifFiles](
id int IDENTITY(1,1) PRIMARY KEY,
CifResponseId int FOREIGN KEY REFERENCES CifResponse(id) ,
[path] varchar(5000)
)
go




create table [dbo].[Pri](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,

/* First part of PRI form */
businessUnit NVARCHAR(100) ,
projectName NVARCHAR(100) ,
projectLocation NVARCHAR(100) ,
capitalInvestment NVARCHAR(100) ,
deadlineSubmittingBid date ,
businessDeveloper NVARCHAR(100) ,
projectManager NVARCHAR(100) ,
ownerRepresentative NVARCHAR(100) ,

/* 1. Project description and general Cmts	 */
descriptionAndGeneralCmts NVARCHAR(2000) ,

/* 2. Facility or Equipment	 */
facilityOrEquipment NVARCHAR(100),
facilityOrEquipmentRemarks NVARCHAR(200),
applicationType NVARCHAR(100) ,
applicationTypeRemarks NVARCHAR(200) ,
projectType NVARCHAR(100) ,
projectTypeRemarks NVARCHAR(200) ,
facilityOrEquipmentSupply NVARCHAR(200) ,
facilityOrEquipmentCmts NVARCHAR(200) ,
fixedStandardBulk BIT ,
fixedBulkTankOnly BIT ,
onlySupplyOfProduct BIT ,
mobile BIT ,
onBoardEquipment BIT ,
onBoardEquipmentType NVARCHAR(100),


/* 4. Site information
	4.1. Natural */
earthquake BIT ,
operationAffectedRegulatedArea BIT ,
weather BIT ,
flooding BIT ,
landslide BIT ,
salinity BIT ,
createPotentialEnvironmental BIT ,
pollutionRemediation BIT ,
operationsConditionsPotentially BIT  ,
naturalCmts BIT ,
earthquakeCmt NVARCHAR(500) ,
operationAffectedRegulatedAreaCmt NVARCHAR(500) ,
weatherCmt NVARCHAR(500) ,
createPotentialEnvironmentalCmt NVARCHAR(500) ,
pollutionRemediationCmt NVARCHAR(500) ,
operationsConditionsPotentiallyCmt NVARCHAR(500)  ,
naturalCmtsCmt NVARCHAR(500) ,

/* 4.2 Industrial */
pollution BIT ,
highVoltageLines BIT , 
limitedSpacing BIT ,
hazardousMaterialStorage BIT ,
confinement BIT ,
potentialExistingSitePollution BIT  ,
proximityToHighRisk BIT ,
proximityOfCombustibleMaterial BIT ,
undergroundNetwork BIT , 
properDrainage BIT ,
sittingInSafetyZone BIT ,
customerEquipmentNotFullyCompatible BIT ,
industrialCmts BIT  , 
pollutionCmt NVARCHAR(250) ,
highVoltageLinesCapacity float,
highVoltageLinesDistanceToTank float ,
limitedSpacingCmt NVARCHAR(250) ,
hazardousMaterialStorageCmt NVARCHAR(250),
confinementCmt NVARCHAR(250) ,
potentialExistingSitePollutionCmt NVARCHAR(250)  ,
proximityToHighRiskCmt NVARCHAR(250) ,
proximityOfCombustibleMaterialCmt NVARCHAR(250) ,
undergroundNetworkDepth float,
sittingInSafetyZoneCmt NVARCHAR(250) ,
customerEquipmentNotFullyCompatibleCmt NVARCHAR(250) ,
industrialCmtsCmt NVARCHAR(250)  , 

/* 4.3 Population/Site location */
residentialArea BIT ,
publicBuilding BIT ,
transportationCorridor BIT ,
isolatedArea BIT ,
siteAccessibility BIT ,
highSecurityRisk BIT ,
populationCmts BIT ,
residentialAreaCmt NVARCHAR(250) ,
publicBuildingCmt NVARCHAR(250) ,
transportationCorridorCmt NVARCHAR(250) ,
isolatedAreaCmt NVARCHAR(250),
siteAccessibilityCmt NVARCHAR(250) ,
highSecurityRiskCmt NVARCHAR(250) ,
populationCmtsCmt NVARCHAR(250) ,

/* 4.4. Customer */
financialSituation BIT  ,
durabilityOfCustomerActivities BIT ,
newBusinessCustomer BIT ,
strategicCustomer BIT ,
customerCmts BIT ,
financialSituationCmt NVARCHAR(250)  ,
durabilityOfCustomerActivitiesCmt NVARCHAR(250) ,
newBusinessCustomerCmt NVARCHAR(250),
strategicCustomerCmt NVARCHAR(250) ,
customerCmtsCmt NVARCHAR(250) ,

/* 5. Project Organisation */
jointProjectThirdParties BIT ,
jointProjectInvolvingAirLiquide BIT ,
equipmentSuppliedByCustomer BIT ,
useStandBbyAssets BIT ,
necessaryDesignAuthorities BIT ,
projectSubmittedToThirdParty BIT ,
difficultyAccessExpertise BIT ,
issueOfResource BIT ,
projectOrganisationCmts BIT ,
jointProjectThirdPartiesCmt NVARCHAR(250) ,
jointProjectInvolvingAirLiquideCmt NVARCHAR(250) ,
equipmentSuppliedByCustomerCmt NVARCHAR(250) ,
useStandBbyAssetsCmt NVARCHAR(250) ,
necessaryDesignAuthoritiesCmt NVARCHAR(250) ,
projectSubmittedToThirdPartyCmt NVARCHAR(250) ,
difficultyAccessExpertiseCmt NVARCHAR(250) ,
issueOfResourceCmt NVARCHAR(250) ,
projectOrganisationCmtsCmt NVARCHAR(250) ,

/* 6. Processes, Products, Technology (PPT), Equipment */
equipmentTechnologySupplier BIT ,
qualifiedValidatedEquipment BIT ,
newImposedAssociates BIT ,
innovationNewlyDeveloped BIT ,
projectUsingInnovativePpt BIT ,
intellectualPropertyWatch BIT ,
lackMainEquipments BIT ,
lackSimilarProcess BIT ,
majorProblemEncountered BIT ,
requirementsUtilitiesSpecification BIT ,
installatioProductRequireHazardous BIT ,
productsRawMaterials BIT,
operationHaveNegativeImpact BIT ,
riskAnalysisProject BIT ,
previousRiskAnalysis BIT,
processesProductsCmts BIT ,
equipmentTechnologySupplierCmt NVARCHAR(250) ,
qualifiedValidatedEquipmentCmt NVARCHAR(250)  ,
newImposedAssociatesCmt NVARCHAR(250)  ,
innovationNewlyDevelopedCmt NVARCHAR(250) ,
projectUsingInnovativePptCmt NVARCHAR(250)  ,
intellectualPropertyWatchCmt NVARCHAR(250)  ,
lackMainEquipmentsCmt NVARCHAR(250) ,
lackSimilarProcessCmt NVARCHAR(250) ,
majorProblemEncounteredCmt NVARCHAR(250) ,
requirementsUtilitiesSpecificationCmt NVARCHAR(250) ,
installatioProductRequireHazardousCmt NVARCHAR(250) ,
productsRawMaterialsCmt NVARCHAR(250) ,
operationHaveNegativeImpactCmt NVARCHAR(250) ,
riskAnalysisProjectCmt NVARCHAR(250) ,
previousRiskAnalysisCmt NVARCHAR(250),
processesProductsCmtsCmt NVARCHAR(250) ,

/* 7. Operation Conditions */
customizedPlant BIT ,
newServiceBySubsidiary BIT  ,
includeTransportationActivities BIT ,
operationDoneByCustomer BIT ,
operatingWithoutDesign BIT ,
noOperatingExperienceSimilarProcess BIT ,
potentialBackflow  BIT ,
specialTraining BIT ,
unattendedFacility BIT ,
remoteFillingLines BIT ,
operationCmts BIT ,
customizedPlantCmt NVARCHAR(250)  ,
newServiceBySubsidiaryCmt NVARCHAR(250) ,
includeTransportationActivitiesCmt NVARCHAR(250) ,
operationDoneByCustomerCmt NVARCHAR(250) ,
operatingWithoutDesignCmt NVARCHAR(250) ,
noOperatingExperienceSimilarProcessCmt NVARCHAR(250) ,
potentialBackflowCmt NVARCHAR(250) ,
specialTrainingCmt NVARCHAR(250) ,
unattendedFacilityCmt NVARCHAR(250) ,
remoteFillingLinesCmt NVARCHAR(250) ,
operationCmtsCmt NVARCHAR(250)  ,

/* 8. Customer Requirements */
notFullyDefined BIT ,
technicalIssues BIT ,
contractualTargets BIT  ,
requiredStudiesReliability BIT ,
safetyIntegrityLevel BIT ,
mandatoryCustomerStandards BIT ,
specificInsurance BIT ,
requiredStudies BIT ,
peakFlowRequirement BIT ,
customerRequirementCmts BIT ,
notFullyDefinedCmt NVARCHAR(250) ,
technicalIssuesCmt NVARCHAR(250) ,
contractualTargetsCmt NVARCHAR(250) ,
requiredStudiesReliabilityCmt NVARCHAR(250) ,
safetyIntegrityLevelCmt NVARCHAR(250) ,
mandatoryCustomerStandardsCmt NVARCHAR(250) ,
specificInsuranceCmt NVARCHAR(250) ,
requiredStudiesCmt NVARCHAR(250) ,
peakFlowRequirementCmt NVARCHAR(250) ,
customerRequirementCmtsCmt NVARCHAR(250) ,

/* 9. Regulatory Obligations / Environmental */
regulatoryInformation BIT ,
lackOfKnowledge BIT ,
environmentalImpactStudy BIT ,
societalRiskAnalysis BIT ,
explosiveAreaClassification BIT ,
safetyHazardStudy BIT ,
oSHA BIT ,
areaClassificationElectrical BIT ,
pressureVesselRegulation BIT ,
transportationRegulation BIT , 
electricalEquipmentEegulation BIT ,
otherRegulation BIT ,
otherApplicablePermits BIT ,
softwareProcessControl BIT ,
regulatoryInformationCmt NVARCHAR(250)  ,
lackOfKnowledgeCmt NVARCHAR(250) ,
pressureVesselRegulationCmt NVARCHAR(250)  ,
transportationRegulationCmt NVARCHAR(250) , 
electricalEquipmentEegulationCmt NVARCHAR(250)  ,
otherRegulationCmt NVARCHAR(250) ,
otherApplicablePermitsCmt NVARCHAR(250) ,
softwareProcessControlCmt NVARCHAR(250) ,

/* 10. Consequences of supply or delivery loss (flow interruption) */
corporateImage BIT ,
impactOnCustomer BIT ,
impactOnStrategic BIT ,
financialLoss BIT ,
impactOnAL BIT ,
contractualPenalties BIT ,
consequencesCmts BIT ,
corporateImageCmt NVARCHAR(250)  ,
impactOnCustomerCmt NVARCHAR(250)  ,
impactOnStrategicCmt NVARCHAR(250) ,
financialLossCmt NVARCHAR(250)  ,
impactOnALCmt NVARCHAR(250) ,
contractualPenaltiesCmt NVARCHAR(250)  ,
consequencesCmtsCmt NVARCHAR(250)  ,

/* 11. In case of acquisition (Project type acquisition) */
technicalInspection BIT ,
potentialNonComplianceSafety BIT ,
significantDiscrepanciesAL BIT ,
potentialIssueCompetencies BIT ,
obsoleteEquipment BIT ,
potentialNonComplianceEnvironmental BIT ,
facilityAge BIT ,
acquisitionCmts BIT ,
technicalInspectionCmt NVARCHAR(250) ,
potentialNonComplianceSafetyCmt NVARCHAR(250)  ,
significantDiscrepanciesALCmt NVARCHAR(250)  ,
potentialIssueCompetenciesCmt NVARCHAR(250)  ,
obsoleteEquipmentCmt NVARCHAR(250)  ,
potentialNonComplianceEnvironmentalCmt NVARCHAR(250)  ,
facilityAgeCmt NVARCHAR(250) ,
acquisitionCmtsCmt NVARCHAR(250) ,



)
go

/* 3. Fluids used	 */

create table [dbo].[Fluids](
id int IDENTITY(1,1) PRIMARY KEY,
priId int FOREIGN KEY REFERENCES PRI(id) ,
fluidOrProduct NVARCHAR(100) ,
extremePressure float,
extremeTemperature float,
maximumFlow float ,
volumeStored float ,
characteristics float ,
nature1 NVARCHAR(200),
nature2 NVARCHAR(200),
nature3 NVARCHAR(200),
natureOther  NVARCHAR(200),
)
go



create table [dbo].[Utilities](
id int IDENTITY(1,1) PRIMARY KEY,
priId int FOREIGN KEY REFERENCES PRI(id) ,
utility NVARCHAR(250) ,
details NVARCHAR(500) ,
)
go


/*IRMR (safety feedback) */

create table [dbo].[Irmr](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName NVARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
projectType NVARCHAR(300) ,

/*IRMR classification */
irmrClassification NVARCHAR(300) ,
irmrDate Date	,
irmrsignature NVARCHAR(300) ,
irmrGround NVARCHAR(300) ,

/*SIS classification */
sisClassification NVARCHAR(300) ,
sisDate Date	,
sisSignature NVARCHAR(300) ,
sisGround NVARCHAR(300) ,
sisSfety BIT ,
sisReliability BIT ,
sisEnvironmentRisk BIT ,
sisProjectManagement BIT ,
sisOperationRisk BIT ,
/* PRA */
praRequiring BIT ,
praProject BIT ,
praSfety BIT ,
praReliability BIT ,
praCmt NVARCHAR(300) ,
/* PHA  */
phaRequiring BIT ,
phaCmt NVARCHAR(300) ,
/* Specific quantitative assessment study */
quantitativeAssessmentRequiring BIT ,
quantitativeAssessmentCmt NVARCHAR(300) ,
/* EIS  */
eisRequiring BIT ,
eisCmt NVARCHAR(300) ,

decision NVARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment NVARCHAR(100),

)
go

create table [dbo].[IrmrAP](
id int IDENTITY(1,1) PRIMARY KEY,
IrmrId int FOREIGN KEY REFERENCES IRMR(id) ,
actions nvarchar(500),
)
go

create table [dbo].[IrmrFiles](
id int IDENTITY(1,1) PRIMARY KEY,
IrmrId int FOREIGN KEY REFERENCES IRMR(id) ,
[path] varchar(5000)
)
go

/* Distributions */
create table [dbo].[Distributions](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName NVARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
product NVARCHAR(100) ,
purity NVARCHAR(100) ,
customerConsumption NVARCHAR(100) ,
regular float ,
patchDay float ,
patchAvgHrs float ,
seasonalConsumption float  ,
customerTank float ,
customerDeadLevel float  ,
usableCapacityAboveDeadLevel float ,
peakConsumption float ,
frequencyOfPeakConsumption float ,
decision NVARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment NVARCHAR(100),
)
go
create table [dbo].[DistributionsAP](
id int IDENTITY(1,1) PRIMARY KEY,
distributionsId int FOREIGN KEY REFERENCES Distributions(id) ,
actions nvarchar(500),
)
go

create table [dbo].[DistributionsFiles](
id int IDENTITY(1,1) PRIMARY KEY,
distributionsId int FOREIGN KEY REFERENCES Distributions(id) ,
[path] varchar(5000)
)
go


/* Sourcings */
create table [dbo].[Sourcings](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName NVARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
product NVARCHAR(100) ,
purity NVARCHAR(100) ,
customerConsumption NVARCHAR(100) ,
regular float ,
patchDay float ,
patchAvgHrs float ,
seasonalConsumption float  ,
customerTank float ,
customerDeadLevel float  ,
usableCapacityAboveDeadLevel float ,
peakConsumption float ,
frequencyOfPeakConsumption float ,
decision NVARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment NVARCHAR(100),
)
go
create table [dbo].[SourcingsAP](
id int IDENTITY(1,1) PRIMARY KEY,
sourcingsId int FOREIGN KEY REFERENCES Sourcings(id) ,
actions nvarchar(500)
)
go

create table [dbo].[SourcingsFiles](
id int IDENTITY(1,1) PRIMARY KEY,
sourcingsId int FOREIGN KEY REFERENCES Sourcings(id) ,
[path] varchar(5000)
)
go


/* PDI form (fleat feedback) */
create table [dbo].[Pdi](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName NVARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,

highwayEnterance BIT ,
areaFlat BIT ,
areaType BIT ,
dischargePoint BIT ,
easliyAccessible BIT ,
carExit BIT ,
tankCapacity BIT ,
vaccumFlushing BIT ,
suitableElectricity BIT ,
adequateLight BIT ,
supplyTime NVARCHAR(250) , /* morning , night , all day */
supplyTimeFrom time ,
supplyTimeTo time ,
fireExtinguishers BIT ,
areaObstacles BIT ,

highwayEnteranceCmt NVARCHAR(250) ,
areaFlatCmt NVARCHAR(250) ,
areaTypeCmt NVARCHAR(250) ,
dischargePointCmt NVARCHAR(250) ,
easliyAccessibleCmt NVARCHAR(250) ,
carExitCmt NVARCHAR(250) ,
carExitdistance float ,
carExitSafetyProcedure NVARCHAR(250) ,
tankCapacityCmt NVARCHAR(250) ,
tankCapacitySize float ,
vaccumFlushingCmt NVARCHAR(250) ,
suitableElectricityCmt NVARCHAR(250) ,
adequateLightCmt NVARCHAR(250) ,
fireExtinguishersCmt NVARCHAR(250) ,
areaObstaclesCmt NVARCHAR(250) ,
decision NVARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment NVARCHAR(100),
vehicleType NVARCHAR(100) ,
inspector NVARCHAR(100) ,
approver NVARCHAR(100) ,

)
go

create table [dbo].[FireExtinguishers](
id int IDENTITY(1,1) PRIMARY KEY,
pdiId int FOREIGN KEY REFERENCES Pdi(id) ,
number int ,
capacity float ,
)
go

create table [dbo].[PdiAP](
id int IDENTITY(1,1) PRIMARY KEY,
pdiId int FOREIGN KEY REFERENCES Pdi(id) ,
actions nvarchar(500) ,
)
go

create table [dbo].[PdiFiles](
id int IDENTITY(1,1) PRIMARY KEY,
pdiId int FOREIGN KEY REFERENCES Pdi(id) ,
[path] varchar(5000)

)
go

create table [dbo].[History](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
formSubmition datetime ,
distributionSubmition datetime ,
sourcingSubmition datetime ,
fleatSubmition datetime ,
irmrSubmition datetime ,
ciSubmition datetime ,
)
go