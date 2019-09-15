CREATE DATABASE [Air_Liquide]
GO

use [Air_Liquide]
go 

Create table Employee (
id int IDENTITY(1,1) PRIMARY KEY,
userName VARCHAR(200) not null unique , /* make them unique and not null*/ 
email VARCHAR(7000) not null unique , /* make them unique and not null*/
departement VARCHAR(7000) , /* make them unique and not null*/
[activation] BIT DEFAULT 1 not null ,
)
Go

Create table Screen (
id int IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(200) not null unique ,
)
Go 

INSERT into Screen ([name]) VALUES ('Distribution')
GO
INSERT into Screen ([name]) VALUES ('Sourcing')
GO
INSERT into Screen ([name]) VALUES ('Fleat')
GO
INSERT into Screen ([name]) VALUES ('PR')
GO
INSERT into Screen ([name]) VALUES ('CI')
GO
INSERT into Screen ([name]) VALUES ('Sales')
GO
INSERT into Screen ([name]) VALUES ('Finance')
GO
INSERT into Screen ([name]) VALUES ('Admin')
GO


Create table [Permission](
id int IDENTITY(1,1) PRIMARY KEY,
employeeId int ,
screenId int ,
[enabled] BIT DEFAULT 0 not null ,
FOREIGN KEY(employeeId) REFERENCES Employee(id) ,
FOREIGN KEY(screenId) REFERENCES Screen(id),
)
Go


/* Form */
create table [dbo].[Form](
id int IDENTITY(1,1) PRIMARY KEY,
employeename VARCHAR(200) ,
FOREIGN KEY(employeeName) REFERENCES Employee(userName) ON UPDATE CASCADE ON DELETE CASCADE,
name VARCHAR(7000),
[date] date ,
[address] VARCHAR(7000),
[zone] VARCHAR(7000),
distributionSubmition bit DEFAULT 0,
sourcingSubmition bit DEFAULT 0 ,
fleatSubmition bit DEFAULT 0,
irmrSubmition bit DEFAULT 0,
ciSubmition bit DEFAULT 0,
financeSubmition bit DEFAULT 0,
)
go


create table [dbo].[FormFiles] (
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id),
name VARCHAR(7000),
[path] VARCHAR(7000)
)
go

create table [dbo].[ContactPerson](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
contactPersonName VARCHAR(7000),
title VARCHAR(7000) ,
phone VARCHAR(7000) ,
mail VARCHAR(7000) ,
)
go


create table [dbo].[Question](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
asker VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE ,
submitionDate datetime ,
replayDate datetime ,
question VARCHAR(7000),
answer VARCHAR(7000),

)



/* LVF form */
create table [dbo].[Lvf](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
customerType VARCHAR(7000)  ,
businessType VARCHAR(7000) ,
startDeliveryDate date  ,
forecastDeliveryEnd date  ,
product VARCHAR(7000) ,
purity VARCHAR(7000) ,
customerConsumption VARCHAR(7000) ,
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
frequencyOfPeakConsumption VARCHAR(7000) ,
availableDelivery VARCHAR(7000) ,
startDeliveryTime varchar(7000) ,
endDeliveryTime varchar(7000) ,
weightScale BIT ,
tankGuage BIT ,
flowMeter BIT,
customerhastank BIT,
lvfComment VARCHAR(7000) ,
)
go

/* CIF form */
create table [dbo].[Cif](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
product VARCHAR(7000) ,
applicationProduct VARCHAR(7000) ,
requiredPhase VARCHAR(7000) ,
flowUnit VARCHAR(7000) ,
averageFlowRateValue float ,
averagePressure float ,
averageDuration float ,
maximumFlowRrateValue float ,
maximumPressure float ,
maximumDurationUnit VARCHAR(7000) ,
maximumDurationValue float ,
repetitionPerDay float  ,
futureExpansionNotes VARCHAR(7000) , 
)
go

create table [dbo].[CifResponse](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE,
decision VARCHAR(7000)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(7000),
)
go

create table [dbo].[CifAP](
id int IDENTITY(1,1) PRIMARY KEY,
CifResponseId int FOREIGN KEY REFERENCES CifResponse(id) ,
actions VARCHAR(7000)
)
go

create table [dbo].[CifFiles](
id int IDENTITY(1,1) PRIMARY KEY,
CifResponseId int FOREIGN KEY REFERENCES CifResponse(id) ,
[path] VARCHAR(7000),
name VARCHAR(7000)
)
go




create table [dbo].[Pri](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,

/* First part of PRI form */
/*businessUnit VARCHAR(7000) ,
projectName VARCHAR(7000) ,
projectLocation VARCHAR(7000) ,
capitalInvestment VARCHAR(7000) ,
deadlineSubmittingBid date ,
businessDeveloper VARCHAR(7000) ,
projectManager VARCHAR(7000) ,
ownerRepresentative VARCHAR(7000) ,*/

/* 1. Project description and general Cmts*/
descriptionAndGeneralCmts VARCHAR(7000) ,

/* 2. Facility or Equipment*/
facilityOrEquipment VARCHAR(7000),
facilityOrEquipmentRemarks VARCHAR(7000),
applicationType VARCHAR(7000) ,
applicationTypeRemarks VARCHAR(7000) ,
projectType VARCHAR(7000) ,
projectTypeRemarks VARCHAR(7000) ,
facilityOrEquipmentSupply VARCHAR(7000) ,
facilityOrEquipmentCmts VARCHAR(7000) ,
fixedStandardBulk BIT ,
fixedBulkTankOnly BIT ,
onlySupplyOfProduct BIT ,
mobile BIT ,
onBoardEquipment BIT ,
onBoardEquipmentType VARCHAR(7000),


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
earthquakeCmt VARCHAR(7000) ,
operationAffectedRegulatedAreaCmt VARCHAR(7000) ,
weatherCmt VARCHAR(7000) ,
createPotentialEnvironmentalCmt VARCHAR(7000) ,
pollutionRemediationCmt VARCHAR(7000) ,
operationsConditionsPotentiallyCmt VARCHAR(7000)  ,
naturalCmtsCmt VARCHAR(7000) ,

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
pollutionCmt VARCHAR(7000) ,
highVoltageLinesCapacity float,
highVoltageLinesDistanceToTank float ,
limitedSpacingCmt VARCHAR(7000) ,
hazardousMaterialStorageCmt VARCHAR(7000),
confinementCmt VARCHAR(7000) ,
potentialExistingSitePollutionCmt VARCHAR(7000)  ,
proximityToHighRiskCmt VARCHAR(7000) ,
proximityOfCombustibleMaterialCmt VARCHAR(7000) ,
undergroundNetworkDepth float,
undergroundNetworkCmt VARCHAR(7000),
sittingInSafetyZoneCmt VARCHAR(7000) ,
customerEquipmentNotFullyCompatibleCmt VARCHAR(7000) ,
industrialCmtsCmt VARCHAR(7000)  , 

/* 4.3 Population/Site location */
residentialArea BIT ,
publicBuilding BIT ,
transportationCorridor BIT ,
isolatedArea BIT ,
siteAccessibility BIT ,
highSecurityRisk BIT ,
populationCmts BIT ,
residentialAreaCmt VARCHAR(7000) ,
publicBuildingCmt VARCHAR(7000) ,
transportationCorridorCmt VARCHAR(7000) ,
isolatedAreaCmt VARCHAR(7000),
siteAccessibilityCmt VARCHAR(7000) ,
highSecurityRiskCmt VARCHAR(7000) ,
populationCmtsCmt VARCHAR(7000) ,

/* 4.4. Customer */
financialSituation BIT  ,
durabilityOfCustomerActivities BIT ,
newBusinessCustomer BIT ,
strategicCustomer BIT ,
customerCmts BIT ,
financialSituationCmt VARCHAR(7000)  ,
strategicCustomerCmt VARCHAR(7000) ,
customerCmtsCmt VARCHAR(7000) ,

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
jointProjectThirdPartiesCmt VARCHAR(7000) ,
jointProjectInvolvingAirLiquideCmt VARCHAR(7000) ,
equipmentSuppliedByCustomerCmt VARCHAR(7000) ,
useStandBbyAssetsCmt VARCHAR(7000) ,
necessaryDesignAuthoritiesCmt VARCHAR(7000) ,
projectSubmittedToThirdPartyCmt VARCHAR(7000) ,
difficultyAccessExpertiseCmt VARCHAR(7000) ,
issueOfResourceCmt VARCHAR(7000) ,
projectOrganisationCmtsCmt VARCHAR(7000) ,

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
equipmentTechnologySupplierCmt VARCHAR(7000) ,
qualifiedValidatedEquipmentCmt VARCHAR(7000)  ,
newImposedAssociatesCmt VARCHAR(7000)  ,
innovationNewlyDevelopedCmt VARCHAR(7000) ,
projectUsingInnovativePptCmt VARCHAR(7000)  ,
intellectualPropertyWatchCmt VARCHAR(7000)  ,
lackMainEquipmentsCmt VARCHAR(7000) ,
lackSimilarProcessCmt VARCHAR(7000) ,
majorProblemEncounteredCmt VARCHAR(7000) ,
requirementsUtilitiesSpecificationCmt VARCHAR(7000) ,
installatioProductRequireHazardousCmt VARCHAR(7000) ,
productsRawMaterialsCmt VARCHAR(7000) ,
operationHaveNegativeImpactCmt VARCHAR(7000) ,
riskAnalysisProjectCmt VARCHAR(7000) ,
previousRiskAnalysisCmt VARCHAR(7000),
processesProductsCmtsCmt VARCHAR(7000) ,

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
customizedPlantCmt VARCHAR(7000)  ,
newServiceBySubsidiaryCmt VARCHAR(7000) ,
includeTransportationActivitiesCmt VARCHAR(7000) ,
includeTransportationActivitiesType VARCHAR(7000) ,
operationDoneByCustomerCmt VARCHAR(7000) ,
operatingWithoutDesignCmt VARCHAR(7000) ,
noOperatingExperienceSimilarProcessCmt VARCHAR(7000) ,
potentialBackflowCmt VARCHAR(7000) ,
specialTrainingCmt VARCHAR(7000) ,
unattendedFacilityCmt VARCHAR(7000) ,
remoteFillingLinesCmt VARCHAR(7000) ,
operationCmtsCmt VARCHAR(7000)  ,

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
notFullyDefinedCmt VARCHAR(7000) ,
technicalIssuesCmt VARCHAR(7000) ,
contractualTargetsCmt VARCHAR(7000) ,
requiredStudiesReliabilityCmt VARCHAR(7000) ,
safetyIntegrityLevelCmt VARCHAR(7000) ,
mandatoryCustomerStandardsCmt VARCHAR(7000) ,
specificInsuranceCmt VARCHAR(7000) ,
requiredStudiesCmt VARCHAR(7000) ,
peakFlowRequirementCmt VARCHAR(7000) ,
customerRequirementCmtsCmt VARCHAR(7000) ,

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
regulatoryInformationCmt VARCHAR(7000)  ,
lackOfKnowledgeCmt VARCHAR(7000) ,
pressureVesselRegulationCmt VARCHAR(7000)  ,
transportationRegulationCmt VARCHAR(7000) , 
electricalEquipmentEegulationCmt VARCHAR(7000)  ,
otherRegulationCmt VARCHAR(7000) ,
otherApplicablePermitsCmt VARCHAR(7000) ,
softwareProcessControlCmt VARCHAR(7000) ,

/* 10. Consequences of supply or delivery loss (flow interruption) */
corporateImage BIT ,
impactOnCustomer BIT ,
impactOnStrategic BIT ,
financialLoss BIT ,
impactOnAL BIT ,
contractualPenalties BIT ,
consequencesCmts BIT ,
corporateImageCmt VARCHAR(7000)  ,
impactOnCustomerCmt VARCHAR(7000)  ,
impactOnCustomerType VARCHAR(7000)  ,
impactOnStrategicCmt VARCHAR(7000) ,
financialLossCmt VARCHAR(7000)  ,
impactOnALCmt VARCHAR(7000) ,
contractualPenaltiesCmt VARCHAR(7000)  ,
consequencesCmtsCmt VARCHAR(7000)  ,

/* 11. In case of acquisition (Project type acquisition) */
technicalInspection BIT ,
potentialNonComplianceSafety BIT ,
significantDiscrepanciesAL BIT ,
potentialIssueCompetencies BIT ,
obsoleteEquipment BIT ,
potentialNonComplianceEnvironmental BIT ,
facilityAge BIT ,
acquisitionCmts BIT ,
technicalInspectionCmt VARCHAR(7000) ,
potentialNonComplianceSafetyCmt VARCHAR(7000)  ,
significantDiscrepanciesALCmt VARCHAR(7000)  ,
potentialIssueCompetenciesCmt VARCHAR(7000)  ,
obsoleteEquipmentCmt VARCHAR(7000)  ,
potentialNonComplianceEnvironmentalCmt VARCHAR(7000)  ,
facilityAgeCmt VARCHAR(7000) ,
acquisitionCmtsCmt VARCHAR(7000) ,



)
go

/* 3. Fluids used*/

create table [dbo].[Fluids](
id int IDENTITY(1,1) PRIMARY KEY,
priId int FOREIGN KEY REFERENCES PRI(id) ,
fluidOrProduct VARCHAR(7000) ,
extremePressure float,
extremeTemperature float,
maximumFlow float ,
volumeStored float ,
characteristics float ,
nature1 VARCHAR(7000),
nature2 VARCHAR(7000),
nature3 VARCHAR(7000),
natureOther  VARCHAR(7000),
)
go



create table [dbo].[Utilities](
id int IDENTITY(1,1) PRIMARY KEY,
priId int FOREIGN KEY REFERENCES PRI(id) ,
utility VARCHAR(7000) ,
details VARCHAR(7000) ,
)
go


/*IRMR (safety feedback) */

create table [dbo].[Irmr](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE,
projectType VARCHAR(7000) ,

/*IRMR classification */
irmrClassification VARCHAR(7000) ,
irmrDate Date	,
irmrsignature VARCHAR(7000) ,
irmrGround VARCHAR(7000) ,

/*SIS classification */
sisDate Date	,
sisSignature VARCHAR(7000) ,
sisGround VARCHAR(7000) ,
criticalSfety BIT,
criticalReliability BIT,
criticalEnvironmentRisk BIT,
criticalProjectManagement BIT,
criticalOperationRisk BIT,
/* PRA */
praRequiring BIT ,
praProject BIT ,
praSfety BIT ,
praReliability BIT ,
praCmt VARCHAR(7000) ,
/* PHA  */
phaRequiring BIT ,
phaCmt VARCHAR(7000) ,
/* Specific quantitative assessment study */
quantitativeAssessmentRequiring BIT ,
quantitativeAssessmentCmt VARCHAR(7000) ,
/* EIS  */
eisRequiring BIT ,
eisCmt VARCHAR(7000) ,

decision VARCHAR(7000)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(7000),

)
go

create table [dbo].[IrmrAP](
id int IDENTITY(1,1) PRIMARY KEY,
IrmrId int FOREIGN KEY REFERENCES IRMR(id) ,
actions VARCHAR(7000),
)
go

create table [dbo].[IrmrFiles](
id int IDENTITY(1,1) PRIMARY KEY,
IrmrId int FOREIGN KEY REFERENCES IRMR(id) ,
[path] VARCHAR(7000),
name VARCHAR(7000)
)
go

/* Distributions */
create table [dbo].[Distributions](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE,
customerTank float ,
supplyTimeFrom VARCHAR(7000) ,
supplyTimeTo VARCHAR(7000) ,
decision VARCHAR(7000)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(7000),
)
go
create table [dbo].[DistributionsAP](
id int IDENTITY(1,1) PRIMARY KEY,
distributionsId int FOREIGN KEY REFERENCES Distributions(id) ,
actions VARCHAR(7000),
)
go

create table [dbo].[DistributionsFiles](
id int IDENTITY(1,1) PRIMARY KEY,
distributionsId int FOREIGN KEY REFERENCES Distributions(id) ,
[path] VARCHAR(7000),
name VARCHAR(7000)
)
go


/* Sourcings */
create table [dbo].[Sourcings](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE,
customerTank float ,
decision VARCHAR(7000)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(7000),
)
go
create table [dbo].[SourcingsAP](
id int IDENTITY(1,1) PRIMARY KEY,
sourcingsId int FOREIGN KEY REFERENCES Sourcings(id) ,
actions VARCHAR(7000)
)
go

create table [dbo].[SourcingsFiles](
id int IDENTITY(1,1) PRIMARY KEY,
sourcingsId int FOREIGN KEY REFERENCES Sourcings(id) ,
[path] VARCHAR(7000),
name VARCHAR(7000)
)
go


/* PDI form (fleat feedback) */
create table [dbo].[Pdi](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE,

highwayEnterance BIT ,
highwayEnteranceMP VARCHAR(7000) ,
highwayEnteranceCmt VARCHAR(7000) ,
areaFlat BIT ,
areaFlatMP VARCHAR(7000) ,
areaFlatCmt VARCHAR(7000) ,
areaType BIT ,
areaTypeMP VARCHAR(7000) ,
areaTypeCmt VARCHAR(7000) ,
dischargePoint BIT ,
dischargePointMP VARCHAR(7000) ,
dischargePointCmt VARCHAR(7000) ,
carExit BIT ,
carExitMP VARCHAR(7000) ,
carExitCmt VARCHAR(7000) ,
carGoBack BIT,
carGoBackDistance float ,
carGoBackSafetyProcedure VARCHAR(7000) ,
tankCapacity BIT ,
tankCapacityMP VARCHAR(7000) ,
tankCapacityCmt VARCHAR(7000) ,
tankCapacitySize float ,
vaccumFlushing BIT ,
vaccumFlushingMP VARCHAR(7000) ,
vaccumFlushingCmt VARCHAR(7000) ,
suitableElectricity BIT ,
suitableElectricityMP VARCHAR(7000) ,
suitableElectricityCmt VARCHAR(7000) ,
adequateLight BIT ,
adequateLightMP VARCHAR(7000) ,
adequateLightCmt VARCHAR(7000) ,
supplyTime VARCHAR(7000) , /* morning , night , all day */
supplyTimeFrom time ,
supplyTimeTo time ,
supplyTimeCmt VARCHAR(7000),
fireExtinguishers BIT ,
fireExtinguishersMP VARCHAR(7000) ,
fireExtinguishersCmt VARCHAR(7000) ,
areaObstacles BIT ,
areaObstaclesMP VARCHAR(7000) ,
areaObstaclesCmt VARCHAR(7000) ,
vehicleType VARCHAR(7000),
inspector VARCHAR(7000) ,
approver VARCHAR(7000) ,
decision VARCHAR(7000)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(7000),
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
actions VARCHAR(7000),
)
go

create table [dbo].[PdiFiles](
id int IDENTITY(1,1) PRIMARY KEY,
pdiId int FOREIGN KEY REFERENCES Pdi(id) ,
[path] VARCHAR(7000),
name VARCHAR(7000)
)
go

/*Finance */
create table [dbo].[Finance](
id int IDENTITY(1,1) PRIMARY KEY,
formId int FOREIGN KEY REFERENCES Form(id) ,
employeeName VARCHAR(200) FOREIGN KEY REFERENCES Employee(userName)  ON UPDATE CASCADE ON DELETE CASCADE,
decision VARCHAR(7000)  , /* disapprove   approve   approve with recommendation */
decisionComment VARCHAR(7000),
)
go

create table [dbo].[FinanceAP](
id int IDENTITY(1,1) PRIMARY KEY,
financeId int FOREIGN KEY REFERENCES Finance(id) ,
actions VARCHAR(7000),
)
go

create table [dbo].[FinanceFiles](
id int IDENTITY(1,1) PRIMARY KEY,
financeId int FOREIGN KEY REFERENCES Finance(id) ,
[path] VARCHAR(7000),
name VARCHAR(7000)
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
financeSubmition datetime ,
)
go