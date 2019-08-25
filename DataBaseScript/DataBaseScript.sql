use [Air_Liquide]
go 

Create table Employee (
id int IDENTITY(1,1) PRIMARY KEY,
userName VARCHAR(300) not null unique , /* make them unique and not null*/ 
email VARCHAR(300) not null unique , /* make them unique and not null*/
departement VARCHAR(300) , /* make them unique and not null*/
[activation] BIT DEFAULT 1 not null ,
)
Go

Create table Screen (
id int IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(300) not null unique ,
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
employeeId int ,
FOREIGN KEY(employeeId) REFERENCES Employee(id),
name VARCHAR(200),
[date] date ,
[address] VARCHAR(200),
[zone] VARCHAR(100),
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
name VARCHAR(5000),
[path] varchar(5000)
)
go

create table [dbo].[ContactPerson](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
contactPersonName VARCHAR(500),
title VARCHAR(500) ,
phone VARCHAR(500) ,
mail VARCHAR(500) ,
)
go


create table [dbo].[Question](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
asker VARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
submitionDate datetime ,
replayDate datetime ,
question VARCHAR(200),
answer VARCHAR(200),

)



/* LVF form */
create table [dbo].[Lvf](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
customerType VARCHAR(100)  ,
businessType VARCHAR(100) ,
startDeliveryDate date  ,
forecastDeliveryEnd date  ,
product VARCHAR(100) ,
purity VARCHAR(100) ,
customerConsumption VARCHAR(100) ,
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
frequencyOfPeakConsumption VARCHAR(300) ,
availableDelivery float ,
startDeliveryTime time ,
endDeliveryTime time ,
weightScale float ,
tankGuage float ,
lvfComment VARCHAR(300) ,
)
go

/* CIF form */
create table [dbo].[Cif](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
product VARCHAR(200) ,
applicationProduct VARCHAR(300) ,
requiredPhase VARCHAR(200) ,
flowUnit VARCHAR(200) ,
averageFlowRateValue float ,
averagePressure float ,
averageDuration float ,
maximumFlowRrateValue float ,
maximumPressure float ,
maximumDurationUnit VARCHAR(200) ,
maximumDurationValue float ,
repetitionPerDay float  ,
futureExpansionNotes VARCHAR(300) ,
customerSiteLayout BIT , 

)
go

create table [dbo].[CifResponse](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
decision VARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(100),
)
go

create table [dbo].[CifAP](
id int IDENTITY(1,1) PRIMARY KEY,
CifResponseId int FOREIGN KEY REFERENCES CifResponse(id) ,
actions VARCHAR(500)
)
go

create table [dbo].[CifFiles](
id int IDENTITY(1,1) PRIMARY KEY,
CifResponseId int FOREIGN KEY REFERENCES CifResponse(id) ,
[path] varchar(5000),
name varchar(5000)
)
go




create table [dbo].[Pri](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,

/* First part of PRI form */
businessUnit VARCHAR(100) ,
projectName VARCHAR(100) ,
projectLocation VARCHAR(100) ,
capitalInvestment VARCHAR(100) ,
deadlineSubmittingBid date ,
businessDeveloper VARCHAR(100) ,
projectManager VARCHAR(100) ,
ownerRepresentative VARCHAR(100) ,

/* 1. Project description and general Cmts*/
descriptionAndGeneralCmts VARCHAR(2000) ,

/* 2. Facility or Equipment*/
facilityOrEquipment VARCHAR(100),
facilityOrEquipmentRemarks VARCHAR(200),
applicationType VARCHAR(100) ,
applicationTypeRemarks VARCHAR(200) ,
projectType VARCHAR(100) ,
projectTypeRemarks VARCHAR(200) ,
facilityOrEquipmentSupply VARCHAR(200) ,
facilityOrEquipmentCmts VARCHAR(200) ,
fixedStandardBulk BIT ,
fixedBulkTankOnly BIT ,
onlySupplyOfProduct BIT ,
mobile BIT ,
onBoardEquipment BIT ,
onBoardEquipmentType VARCHAR(100),


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
earthquakeCmt VARCHAR(500) ,
operationAffectedRegulatedAreaCmt VARCHAR(500) ,
weatherCmt VARCHAR(500) ,
createPotentialEnvironmentalCmt VARCHAR(500) ,
pollutionRemediationCmt VARCHAR(500) ,
operationsConditionsPotentiallyCmt VARCHAR(500)  ,
naturalCmtsCmt VARCHAR(500) ,

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
pollutionCmt VARCHAR(250) ,
highVoltageLinesCapacity float,
highVoltageLinesDistanceToTank float ,
limitedSpacingCmt VARCHAR(250) ,
hazardousMaterialStorageCmt VARCHAR(250),
confinementCmt VARCHAR(250) ,
potentialExistingSitePollutionCmt VARCHAR(250)  ,
proximityToHighRiskCmt VARCHAR(250) ,
proximityOfCombustibleMaterialCmt VARCHAR(250) ,
undergroundNetworkDepth float,
sittingInSafetyZoneCmt VARCHAR(250) ,
customerEquipmentNotFullyCompatibleCmt VARCHAR(250) ,
industrialCmtsCmt VARCHAR(250)  , 

/* 4.3 Population/Site location */
residentialArea BIT ,
publicBuilding BIT ,
transportationCorridor BIT ,
isolatedArea BIT ,
siteAccessibility BIT ,
highSecurityRisk BIT ,
populationCmts BIT ,
residentialAreaCmt VARCHAR(250) ,
publicBuildingCmt VARCHAR(250) ,
transportationCorridorCmt VARCHAR(250) ,
isolatedAreaCmt VARCHAR(250),
siteAccessibilityCmt VARCHAR(250) ,
highSecurityRiskCmt VARCHAR(250) ,
populationCmtsCmt VARCHAR(250) ,

/* 4.4. Customer */
financialSituation BIT  ,
durabilityOfCustomerActivities BIT ,
newBusinessCustomer BIT ,
strategicCustomer BIT ,
customerCmts BIT ,
financialSituationCmt VARCHAR(250)  ,
durabilityOfCustomerActivitiesCmt VARCHAR(250) ,
newBusinessCustomerCmt VARCHAR(250),
strategicCustomerCmt VARCHAR(250) ,
customerCmtsCmt VARCHAR(250) ,

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
jointProjectThirdPartiesCmt VARCHAR(250) ,
jointProjectInvolvingAirLiquideCmt VARCHAR(250) ,
equipmentSuppliedByCustomerCmt VARCHAR(250) ,
useStandBbyAssetsCmt VARCHAR(250) ,
necessaryDesignAuthoritiesCmt VARCHAR(250) ,
projectSubmittedToThirdPartyCmt VARCHAR(250) ,
difficultyAccessExpertiseCmt VARCHAR(250) ,
issueOfResourceCmt VARCHAR(250) ,
projectOrganisationCmtsCmt VARCHAR(250) ,

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
equipmentTechnologySupplierCmt VARCHAR(250) ,
qualifiedValidatedEquipmentCmt VARCHAR(250)  ,
newImposedAssociatesCmt VARCHAR(250)  ,
innovationNewlyDevelopedCmt VARCHAR(250) ,
projectUsingInnovativePptCmt VARCHAR(250)  ,
intellectualPropertyWatchCmt VARCHAR(250)  ,
lackMainEquipmentsCmt VARCHAR(250) ,
lackSimilarProcessCmt VARCHAR(250) ,
majorProblemEncounteredCmt VARCHAR(250) ,
requirementsUtilitiesSpecificationCmt VARCHAR(250) ,
installatioProductRequireHazardousCmt VARCHAR(250) ,
productsRawMaterialsCmt VARCHAR(250) ,
operationHaveNegativeImpactCmt VARCHAR(250) ,
riskAnalysisProjectCmt VARCHAR(250) ,
previousRiskAnalysisCmt VARCHAR(250),
processesProductsCmtsCmt VARCHAR(250) ,

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
customizedPlantCmt VARCHAR(250)  ,
newServiceBySubsidiaryCmt VARCHAR(250) ,
includeTransportationActivitiesCmt VARCHAR(250) ,
operationDoneByCustomerCmt VARCHAR(250) ,
operatingWithoutDesignCmt VARCHAR(250) ,
noOperatingExperienceSimilarProcessCmt VARCHAR(250) ,
potentialBackflowCmt VARCHAR(250) ,
specialTrainingCmt VARCHAR(250) ,
unattendedFacilityCmt VARCHAR(250) ,
remoteFillingLinesCmt VARCHAR(250) ,
operationCmtsCmt VARCHAR(250)  ,

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
notFullyDefinedCmt VARCHAR(250) ,
technicalIssuesCmt VARCHAR(250) ,
contractualTargetsCmt VARCHAR(250) ,
requiredStudiesReliabilityCmt VARCHAR(250) ,
safetyIntegrityLevelCmt VARCHAR(250) ,
mandatoryCustomerStandardsCmt VARCHAR(250) ,
specificInsuranceCmt VARCHAR(250) ,
requiredStudiesCmt VARCHAR(250) ,
peakFlowRequirementCmt VARCHAR(250) ,
customerRequirementCmtsCmt VARCHAR(250) ,

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
regulatoryInformationCmt VARCHAR(250)  ,
lackOfKnowledgeCmt VARCHAR(250) ,
pressureVesselRegulationCmt VARCHAR(250)  ,
transportationRegulationCmt VARCHAR(250) , 
electricalEquipmentEegulationCmt VARCHAR(250)  ,
otherRegulationCmt VARCHAR(250) ,
otherApplicablePermitsCmt VARCHAR(250) ,
softwareProcessControlCmt VARCHAR(250) ,

/* 10. Consequences of supply or delivery loss (flow interruption) */
corporateImage BIT ,
impactOnCustomer BIT ,
impactOnStrategic BIT ,
financialLoss BIT ,
impactOnAL BIT ,
contractualPenalties BIT ,
consequencesCmts BIT ,
corporateImageCmt VARCHAR(250)  ,
impactOnCustomerCmt VARCHAR(250)  ,
impactOnStrategicCmt VARCHAR(250) ,
financialLossCmt VARCHAR(250)  ,
impactOnALCmt VARCHAR(250) ,
contractualPenaltiesCmt VARCHAR(250)  ,
consequencesCmtsCmt VARCHAR(250)  ,

/* 11. In case of acquisition (Project type acquisition) */
technicalInspection BIT ,
potentialNonComplianceSafety BIT ,
significantDiscrepanciesAL BIT ,
potentialIssueCompetencies BIT ,
obsoleteEquipment BIT ,
potentialNonComplianceEnvironmental BIT ,
facilityAge BIT ,
acquisitionCmts BIT ,
technicalInspectionCmt VARCHAR(250) ,
potentialNonComplianceSafetyCmt VARCHAR(250)  ,
significantDiscrepanciesALCmt VARCHAR(250)  ,
potentialIssueCompetenciesCmt VARCHAR(250)  ,
obsoleteEquipmentCmt VARCHAR(250)  ,
potentialNonComplianceEnvironmentalCmt VARCHAR(250)  ,
facilityAgeCmt VARCHAR(250) ,
acquisitionCmtsCmt VARCHAR(250) ,



)
go

/* 3. Fluids used*/

create table [dbo].[Fluids](
id int IDENTITY(1,1) PRIMARY KEY,
priId int FOREIGN KEY REFERENCES PRI(id) ,
fluidOrProduct VARCHAR(100) ,
extremePressure float,
extremeTemperature float,
maximumFlow float ,
volumeStored float ,
characteristics float ,
nature1 VARCHAR(200),
nature2 VARCHAR(200),
nature3 VARCHAR(200),
natureOther  VARCHAR(200),
)
go



create table [dbo].[Utilities](
id int IDENTITY(1,1) PRIMARY KEY,
priId int FOREIGN KEY REFERENCES PRI(id) ,
utility VARCHAR(250) ,
details VARCHAR(500) ,
)
go


/*IRMR (safety feedback) */

create table [dbo].[Irmr](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
projectType VARCHAR(300) ,

/*IRMR classification */
irmrClassification VARCHAR(300) ,
irmrDate Date	,
irmrsignature VARCHAR(300) ,
irmrGround VARCHAR(300) ,

/*SIS classification */
sisClassification VARCHAR(300) ,
sisDate Date	,
sisSignature VARCHAR(300) ,
sisGround VARCHAR(300) ,
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
praCmt VARCHAR(300) ,
/* PHA  */
phaRequiring BIT ,
phaCmt VARCHAR(300) ,
/* Specific quantitative assessment study */
quantitativeAssessmentRequiring BIT ,
quantitativeAssessmentCmt VARCHAR(300) ,
/* EIS  */
eisRequiring BIT ,
eisCmt VARCHAR(300) ,

decision VARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(100),

)
go

create table [dbo].[IrmrAP](
id int IDENTITY(1,1) PRIMARY KEY,
IrmrId int FOREIGN KEY REFERENCES IRMR(id) ,
actions VARCHAR(500),
)
go

create table [dbo].[IrmrFiles](
id int IDENTITY(1,1) PRIMARY KEY,
IrmrId int FOREIGN KEY REFERENCES IRMR(id) ,
[path] varchar(5000),
name varchar(5000)
)
go

/* Distributions */
create table [dbo].[Distributions](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
customerTank float ,
decision VARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(100),
)
go
create table [dbo].[DistributionsAP](
id int IDENTITY(1,1) PRIMARY KEY,
distributionsId int FOREIGN KEY REFERENCES Distributions(id) ,
actions VARCHAR(500),
)
go

create table [dbo].[DistributionsFiles](
id int IDENTITY(1,1) PRIMARY KEY,
distributionsId int FOREIGN KEY REFERENCES Distributions(id) ,
[path] varchar(5000),
name varchar(5000)
)
go


/* Sourcings */
create table [dbo].[Sourcings](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,
customerTank float ,
decision VARCHAR(200)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(100),
)
go
create table [dbo].[SourcingsAP](
id int IDENTITY(1,1) PRIMARY KEY,
sourcingsId int FOREIGN KEY REFERENCES Sourcings(id) ,
actions VARCHAR(500)
)
go

create table [dbo].[SourcingsFiles](
id int IDENTITY(1,1) PRIMARY KEY,
sourcingsId int FOREIGN KEY REFERENCES Sourcings(id) ,
[path] varchar(5000),
name varchar(5000)
)
go


/* PDI form (fleat feedback) */
create table [dbo].[Pdi](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(300) FOREIGN KEY REFERENCES Employee(userName) ,

highwayEnterance BIT ,
highwayEnteranceMP VARCHAR(250) ,
highwayEnteranceCmt VARCHAR(250) ,
areaFlat BIT ,
areaFlatMP VARCHAR(250) ,
areaFlatCmt VARCHAR(250) ,
areaType BIT ,
areaTypeMP VARCHAR(250) ,
areaTypeCmt VARCHAR(250) ,
dischargePoint BIT ,
dischargePointMP VARCHAR(250) ,
dischargePointCmt VARCHAR(250) ,
carExit BIT ,
carExitMP VARCHAR(250) ,
carExitCmt VARCHAR(250) ,
carGoBack BIT,
carGoBackDistance float ,
carGoBackSafetyProcedure VARCHAR(250) ,
tankCapacity BIT ,
tankCapacityMP VARCHAR(250) ,
tankCapacityCmt VARCHAR(250) ,
tankCapacitySize float ,
vaccumFlushing BIT ,
vaccumFlushingMP VARCHAR(250) ,
vaccumFlushingCmt VARCHAR(250) ,
suitableElectricity BIT ,
suitableElectricityMP VARCHAR(250) ,
suitableElectricityCmt VARCHAR(250) ,
adequateLight BIT ,
adequateLightMP VARCHAR(250) ,
adequateLightCmt VARCHAR(250) ,
supplyTime VARCHAR(250) , /* morning , night , all day */
supplyTimeFrom time ,
supplyTimeTo time ,
supplyTimeCmt VARCHAR(250),
fireExtinguishers BIT ,
fireExtinguishersMP VARCHAR(250) ,
fireExtinguishersCmt VARCHAR(250) ,
areaObstacles BIT ,
areaObstaclesMP VARCHAR(250) ,
areaObstaclesCmt VARCHAR(250) ,
vehicleType VARCHAR(250),
inspector VARCHAR(250) ,
approver VARCHAR(250) ,
decision VARCHAR(250)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(250),
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
actions VARCHAR(500),
)
go

create table [dbo].[PdiFiles](
id int IDENTITY(1,1) PRIMARY KEY,
pdiId int FOREIGN KEY REFERENCES Pdi(id) ,
[path] varchar(5000),
name varchar(5000)
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