import React, { Component } from "react";
import { Form , Col , Row , Card , FormControl , Button} from "react-bootstrap";
import Fluids from './fluids'
import Utilities from './utilities'
import Select from 'react-select';


import "react-datepicker/dist/react-datepicker.css";

class priForm extends Component {

    state = {
        // 1. Project description and general comments
        descriptionAndGeneralCmts:"",

        //2. Facility or Equipment
        facilityOrEquipment:"",
        facilityOrEquipmentRemarks:"",
        applicationType:"" ,
        applicationTypeRemarks:"" ,
        projectType:"" ,
        projectTypeRemarks:"" ,
        facilityOrEquipmentSupply:"" ,
        facilityOrEquipmentCmts:"" ,
        fixedStandardBulk:false,
        fixedBulkTankOnly:false,
        onlySupplyOfProduct:false,
        mobile:false,
        onBoardEquipment:false,
        onBoardEquipmentType:"",

        //3. Fluids
        fluids:{fluidOrProduct:[]},
        utilities:{utility:[]},

        //4. Site information
	    //4.1. Natural 
        earthquake:false,
        earthquakeCmt:"" ,
        operationAffectedRegulatedArea:false,
        operationAffectedRegulatedAreaCmt:"" ,
        weather:false,
        weatherCmt:"" ,
        flooding:false,
        landslide:false,
        salinity:false,
        createPotentialEnvironmental:false,
        createPotentialEnvironmentalCmt:"" ,
        pollutionRemediation:false,
        pollutionRemediationCmt:"" ,
        operationsConditionsPotentially:false ,
        operationsConditionsPotentiallyCmt:""  ,
        naturalCmts:false,
        naturalCmtsCmt:"" ,

        // 4.2 Industrial
        pollution:false,
        pollutionCmt:"" ,
        highVoltageLines:false, 
        highVoltageLinesCapacity:0,
        highVoltageLinesDistanceToTank:0 ,
        limitedSpacing:false,
        limitedSpacingCmt:"" ,
        hazardousMaterialStorage:false,
        hazardousMaterialStorageCmt:"",
        confinement:false,
        confinementCmt:"" ,
        potentialExistingSitePollution:false ,
        potentialExistingSitePollutionCmt:""  ,
        proximityToHighRisk:false,
        proximityToHighRiskCmt:"" ,
        proximityOfCombustibleMaterial:false,
        proximityOfCombustibleMaterialCmt:"" ,
        undergroundNetwork:false, 
        undergroundNetworkCmt:"", 
        undergroundNetworkDepth:0,
        properDrainage:false,
        sittingInSafetyZone:false,
        sittingInSafetyZoneCmt:"" ,
        customerEquipmentNotFullyCompatible:false,
        customerEquipmentNotFullyCompatibleCmt:"" ,
        industrialCmts:false , 
        industrialCmtsCmt:""  , 

        // 4.3 Population/Site location
        residentialArea:false,
        residentialAreaCmt:"",
        publicBuilding:false,
        publicBuildingCmt:"",
        transportationCorridor:false,
        isolatedArea:false,
        isolatedAreaCmt:"",
        siteAccessibility:false,
        siteAccessibilityCmt:"",
        highSecurityRisk:false,
        highSecurityRiskCmt:"",
        populationCmts:false,
        populationCmtsCmt:"",
        transportationCorridorCmt:"",

        // 4.4. Customer 
        financialSituation:false  ,
        financialSituationCmt:""  ,
        newBusinessCustomer:false ,
        durabilityOfCustomerActivities:false ,
        strategicCustomer:false ,
        strategicCustomerCmt:"" ,
        customerCmts:false ,
        customerCmtsCmt:"" ,

        // 5. Project Organisation
        jointProjectThirdParties:false ,
        jointProjectThirdPartiesCmt:"" ,
        necessaryDesignAuthorities:false ,
        necessaryDesignAuthoritiesCmt:"" ,
        jointProjectInvolvingAirLiquide:false ,
        jointProjectInvolvingAirLiquideCmt:"" ,
        projectSubmittedToThirdParty:false ,
        projectSubmittedToThirdPartyCmt:"" ,
        equipmentSuppliedByCustomer:false ,
        equipmentSuppliedByCustomerCmt:"" ,
        difficultyAccessExpertise:false ,
        difficultyAccessExpertiseCmt:"" ,
        useStandBbyAssets:false ,
        useStandBbyAssetsCmt:"" ,
        issueOfResource:false ,
        issueOfResourceCmt:"" ,
        projectOrganisationCmts:false ,
        projectOrganisationCmtsCmt:"" ,

        // 6. Processes, Products, Technology (PPT), Equipment
        equipmentTechnologySupplier:false ,
        equipmentTechnologySupplierCmt:"" ,
        majorProblemEncountered:false ,
        majorProblemEncounteredCmt:"" ,
        qualifiedValidatedEquipment:false ,
        qualifiedValidatedEquipmentCmt:""  ,
        requirementsUtilitiesSpecification:false ,
        requirementsUtilitiesSpecificationCmt:"" ,
        newImposedAssociates:false ,
        newImposedAssociatesCmt:""  ,
        installatioProductRequireHazardous:false ,
        installatioProductRequireHazardousCmt:"" ,
        innovationNewlyDeveloped:false ,
        innovationNewlyDevelopedCmt:"" ,
        productsRawMaterials:false,
        productsRawMaterialsCmt:"" ,
        projectUsingInnovativePpt:false ,
        projectUsingInnovativePptCmt:""  ,
        operationHaveNegativeImpact:false ,
        operationHaveNegativeImpactCmt:"" ,
        intellectualPropertyWatch:false ,
        intellectualPropertyWatchCmt:""  ,
        riskAnalysisProject:false ,
        riskAnalysisProjectCmt:"" ,
        lackMainEquipments:false ,
        lackMainEquipmentsCmt:"" ,
        previousRiskAnalysis:false,
        previousRiskAnalysisCmt:"",
        lackSimilarProcess:false ,
        lackSimilarProcessCmt:"" ,
        processesProductsCmts:false ,
        processesProductsCmtsCmt:"" ,

        // 7. Operation Conditions 
        customizedPlant:false ,
        customizedPlantCmt:""  ,
        noOperatingExperienceSimilarProcess:false ,
        noOperatingExperienceSimilarProcessCmt:"" ,
        newServiceBySubsidiary:false  ,
        newServiceBySubsidiaryCmt:"" ,
        potentialBackflow :false ,
        potentialBackflowCmt:"" ,
        includeTransportationActivities:false ,
        includeTransportationActivitiesType:"",
        includeTransportationActivitiesCmt:"" ,
        specialTraining:false ,
        specialTrainingCmt:"" ,
        operationDoneByCustomer:false ,
        operationDoneByCustomerCmt:"" ,
        unattendedFacility:false ,
        unattendedFacilityCmt:"" ,
        operatingWithoutDesign:false ,
        operatingWithoutDesignCmt:"" ,
        remoteFillingLines:false ,
        remoteFillingLinesCmt:"" ,
        operationCmts:false ,
        operationCmtsCmt:""  ,

        // 8. Customer Requirements
        notFullyDefined:false ,
        notFullyDefinedCmt:"" ,
        mandatoryCustomerStandards:false ,
        mandatoryCustomerStandardsCmt:"" ,
        technicalIssues:false ,
        technicalIssuesCmt:"" ,
        specificInsurance:false ,
        specificInsuranceCmt:"" ,
        contractualTargets:false  ,
        contractualTargetsCmt:"" ,
        requiredStudies:false ,
        requiredStudiesCmt:"" ,
        requiredStudiesReliability:false ,
        requiredStudiesReliabilityCmt:"" ,
        peakFlowRequirement:false ,
        peakFlowRequirementCmt:"" ,
        safetyIntegrityLevel:false ,
        safetyIntegrityLevelCmt:"" ,
        customerRequirementCmts:false ,
        customerRequirementCmtsCmt:"" ,

        // 9. Regulatory Obligations / Environmental 
        regulatoryInformation:false ,
        regulatoryInformationCmt:""  ,
        lackOfKnowledge:false ,
        lackOfKnowledgeCmt:"" ,
        environmentalImpactStudy:false ,
        societalRiskAnalysis:false ,
        explosiveAreaClassification:false ,
        safetyHazardStudy:false ,
        oSHA:false ,
        areaClassificationElectrical:false ,
        pressureVesselRegulation:false ,
        pressureVesselRegulationCmt:""  ,
        transportationRegulation:false , 
        transportationRegulationCmt:"" , 
        electricalEquipmentEegulation:false ,
        electricalEquipmentEegulationCmt:""  ,
        otherRegulation:false ,
        otherRegulationCmt:"" ,
        softwareProcessControl:false ,
        softwareProcessControlCmt:"" ,
        otherApplicablePermits:false ,
        otherApplicablePermitsCmt:"" ,

        // 10. Consequences of supply or delivery loss (flow interruption)
        corporateImage:false ,
        financialLoss:false ,
        impactOnCustomer:false ,
        impactOnAL:false ,
        impactOnStrategic:false ,
        contractualPenalties:false ,
        consequencesCmts:false ,
        corporateImageCmt:""  ,
        impactOnCustomerCmt:""  ,
        impactOnCustomerType:"",
        impactOnStrategicCmt:"" ,
        financialLossCmt:""  ,
        impactOnALCmt:"" ,
        contractualPenaltiesCmt:""  ,
        consequencesCmtsCmt:""  ,

        // 11. In case of acquisition (Project type acquisition) 
        technicalInspection:false ,
        significantDiscrepanciesAL:false ,
        potentialNonComplianceSafety:false ,
        potentialIssueCompetencies:false ,
        obsoleteEquipment:false ,
        facilityAge:false ,
        potentialNonComplianceEnvironmental:false ,
        acquisitionCmts:false ,
        technicalInspectionCmt:"" ,
        potentialNonComplianceSafetyCmt:""  ,
        significantDiscrepanciesALCmt:""  ,
        potentialIssueCompetenciesCmt:""  ,
        obsoleteEquipmentCmt:""  ,
        potentialNonComplianceEnvironmentalCmt:""  ,
        facilityAgeCmt:"" ,
        acquisitionCmtsCmt:"" ,

        fieldset:"",
        done:"✘",
        dodo:true,
      }

    sendData =()=>{
        let sentData = Object.assign({},this.state)
        delete sentData.fieldset
        this.props.ParentCallBack(sentData)
      }

    submitData=(event)=>{
        this.setState({dodo:!this.state.dodo})
        event.preventDefault();
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled",
                           done:"✔" })
        }
        else{
            this.setState({fieldset:"",
                           done:"✘" })
        }
    }

    submissionColor=(e)=>{
        if (e==="✔"){
            return "green"
        }else{
            return "red"
        }
    }

    fluidsCallBackFunction = (childData) => {
        this.setState({fluids:childData})
    }

    utilitiesCallBackFunction = (childData) => {
        this.setState({utilities:childData})
    }

    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
    }

     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Form onSubmit={this.submitData}>
                <Form>
                <Card.Header as="h5" className="bg-dark text-white" >PRI Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>1. Project description and general comments</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                            <Form.Group as={Col} controlId="descriptionAndGeneralCmts">
                            <Form.Label>To be completed for clear understanding of the project and associated risks 
                                <span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="3" required onChange={(e)=>{this.setState({descriptionAndGeneralCmts:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>2. Facility or Equipment</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       
                       <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="facilityOrEquipment">
                            <Form.Label> Facility Or Equipment </Form.Label>
                            <Select
                            value={this.state.facilityOrEquipment.value}
                            onChange={(e)=>{this.setState({ facilityOrEquipment: e.value})}}
                            options={ [
                                        { value: 'Bulk tank', label: 'Bulk tank' },
                                        { value: 'Vaporizers', label: 'Vaporizers' },
                                        { value: 'Tube trailer', label: 'Tube trailer' },
                                        { value: 'Packs', label: 'Packs' },
                                        { value: 'Quads', label: 'Quads' },
                                        { value: 'Cylinders', label: 'Cylinders' },
                                        { value: 'Manifold', label: 'Manifold' },
                                        { value: 'APSA', label: 'APSA' },
                                        { value: 'ISO tank', label: 'ISO tank' },
                                        { value: 'Pipeline', label: 'Pipeline' },
                                        { value: 'Gas control cabinets', label: 'Gas control cabinets' },
                                        { value: 'Other', label: 'Other' },
                                    ]}
                            />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="facilityOrEquipmentRemarks">
                            <Form.Label>Other </Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({facilityOrEquipmentRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="applicationType">
                            <Form.Label>Application Type </Form.Label>
                            <Select
                            value={this.state.applicationType.value}
                            onChange={(e)=>{this.setState({ applicationType: e.value})}}
                            options={ [
                                        { value: 'Bulk tank', label: 'Bulk tank' },
                                        { value: 'Vaporizers', label: 'Vaporizers' },
                                        { value: 'Tube trailer', label: 'Tube trailer' },
                                        { value: 'Packs', label: 'Packs' },
                                        { value: 'Quads', label: 'Quads' },
                                        { value: 'Cylinders', label: 'Cylinders' },
                                        { value: 'Manifold', label: 'Manifold' },
                                        { value: 'APSA', label: 'APSA' },
                                        { value: 'ISO tank', label: 'ISO tank' },
                                        { value: 'Pipeline', label: 'Pipeline' },
                                        { value: 'Gas control cabinets', label: 'Gas control cabinets' },
                                        { value: 'Other', label: 'Other' },
                                    ]}
                            />
                            
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="applicationTypeRemarks">
                            <Form.Label>Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({applicationTypeRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="projectType">
                            <Form.Label>Project Type </Form.Label>
                            <Select
                            value={this.state.projectType.value}
                            onChange={(e)=>{this.setState({ projectType: e.value})}}
                            options={ [
                                        { value: 'Bulk tank', label: 'Bulk tank' },
                                        { value: 'Vaporizers', label: 'Vaporizers' },
                                        { value: 'Tube trailer', label: 'Tube trailer' },
                                        { value: 'Packs', label: 'Packs' },
                                        { value: 'Quads', label: 'Quads' },
                                        { value: 'Cylinders', label: 'Cylinders' },
                                        { value: 'Manifold', label: 'Manifold' },
                                        { value: 'APSA', label: 'APSA' },
                                        { value: 'ISO tank', label: 'ISO tank' },
                                        { value: 'Pipeline', label: 'Pipeline' },
                                        { value: 'Gas control cabinets', label: 'Gas control cabinets' },
                                        { value: 'Other', label: 'Other' },
                                    ]}
                            />
                            
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="projectTypeRemarks">
                            <Form.Label>Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({projectTypeRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                       

                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="facilityOrEquipmentSupply">
                            <Form.Label>Other Supply </Form.Label>
                            <Select
                            value={this.state.facilityOrEquipmentSupply.value}
                            onChange={(e)=>{this.setState({ facilityOrEquipmentSupply: e.value})}}
                            options={ [
                                        { value: 'Services', label: 'Services' },
                                        { value: 'Training', label: 'Training' },
                                        { value: 'Other', label: 'Other' },
                                        
                                    ]}
                            />
                            
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="facilityOrEquipmentCmts">
                            <Form.Label>Other</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({facilityOrEquipmentCmts:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
        
                        <Form.Row>
                            <Form.Group as={Col } >
                            <Form.Check id="fixedStandardBulk"
                            custom={true}
                            inline={true}
                            label="Fixed Standard bulk installation with atm. vaporizers and other standard equipment"
                            onChange={(e)=>{this.setState({fixedStandardBulk:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  md={2}>
                            <Form.Check id="fixedBulkTankOnly"
                            custom={true}
                            inline={true}
                            label="Fixed bulk tank only"
                            onChange={(e)=>{this.setState({fixedBulkTankOnly:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Check id="onlySupplyOfProduct"
                            custom={true}
                            inline={true}
                            label="No Installation, only supply of product  "
                            onChange={(e)=>{this.setState({onlySupplyOfProduct:e.target.checked})}}/>
                            </Form.Group>
                        </Form.Row>
                            
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Form.Check id="mobile"
                            custom={true}
                            inline={true}
                            label="Mobile (transportable equipt…) "
                            onChange={(e)=>{this.setState({mobile:e.target.checked})}}/>
                            </Form.Group>
                                
                            <Form.Group as={Col}  >
                            <Form.Check id="onBoardEquipment"
                            custom={true}
                            inline={true}
                            label="On Board Equipment"
                            onChange={(e)=>{this.setState({onBoardEquipment:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.onBoardEquipment}
                            onChange={(e)=>{this.setState({onBoardEquipmentType:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col}/>
                            

                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>
                                3. Fluids used</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                        <Col md={12}><Fluids ParentCallBack={this.fluidsCallBackFunction}/></Col>
                        </Form.Row>

                        <Form.Row>
                        <Col md={12}><Utilities ParentCallBack={this.utilitiesCallBackFunction}/></Col>
                        </Form.Row>


                       
                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>4. Site information</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>4.1. Natural</Form.Label>
                            </Form.Group>
                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} md={2} >
                            <Form.Check id="earthquake"
                            custom={true}
                            inline={true}
                            label="Earthquake"
                            onChange={(e)=>{this.setState({earthquake:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationAffectedRegulatedArea"
                            custom={true}
                            inline={true}
                            label="Operation affected by a regulated area (e.g. Natural Park)"
                            onChange={(e)=>{this.setState({operationAffectedRegulatedArea:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} md={{offset:2,span:1}} >
                            <Form.Check id="Weather"
                            custom={true}
                            inline={true}
                            label="Weather"
                            onChange={(e)=>{this.setState({weather:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Select
                                value={this.state.weatherCmt.value}
                                onChange={(e)=>{this.setState({ weatherCmt: e.value})}}
                                options={ [
                                            { value: 'Heavy Rains', label: 'Heavy Rains' },
                                            { value: 'Storm', label: 'Storm' },
                                            { value: 'Freeze', label: 'Freeze' },
                                            { value: 'Snow', label: 'Snow' },
                                            { value: 'Lightning', label: 'Lightning' },
                                        ]}
                                />

                            </Form.Group>

                            

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="flooding"
                            custom={true}
                            inline={true}
                            label="Flooding"
                            onChange={(e)=>{this.setState({flooding:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="landslide"
                            custom={true}
                            inline={true}
                            label="Landslide"
                            onChange={(e)=>{this.setState({landslide:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="salinity"
                            custom={true}
                            inline={true}
                            label="Salinity"
                            onChange={(e)=>{this.setState({salinity:e.target.checked})}}/>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="createPotentialEnvironmental"
                            custom={true}
                            inline={true}
                            label="May create potential environmental impact"
                            onChange={(e)=>{this.setState({createPotentialEnvironmental:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.createPotentialEnvironmental}
                            onChange={(e)=>{this.setState({createPotentialEnvironmentalCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="pollutionRemediation"
                            custom={true}
                            inline={true}
                            label="Within or near site requiring pollution remediation "
                            onChange={(e)=>{this.setState({pollutionRemediation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.pollutionRemediation}
                            onChange={(e)=>{this.setState({pollutionRemediationCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>    

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationsConditionsPotentially"
                            custom={true}
                            inline={true}
                            label="Operations and working conditions potentially affected by wildlife (insects , animals , rats , etc.)"
                            onChange={(e)=>{this.setState({operationsConditionsPotentially:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationsConditionsPotentially}
                            onChange={(e)=>{this.setState({operationsConditionsPotentiallyCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="naturalCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({naturalCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.naturalCmts}
                            onChange={(e)=>{this.setState({naturalCmtsCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>
                        
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>
                                    4.2. Industrial</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="pollution"
                            custom={true}
                            inline={true}
                            label="Pollution"
                            onChange={(e)=>{this.setState({pollution:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.pollution}
                            onChange={(e)=>this.setState({pollutionCmt:e.target.value})} />
                            </Form.Group>

                            <Col md={{ offset:1 ,span:2}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="highVoltageLines"
                            custom={true}
                            inline={true}
                            label="High voltage lines"
                            onChange={(e)=>{this.setState({highVoltageLines:e.target.checked})}}/>
                            </Col>

                            <Form.Group as={Col }>
                            <Form.Text>Capacity (Volt)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.highVoltageLines}
                            onChange={(e)=>{this.setState({highVoltageLinesCapacity:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Text>Distance to tank (Meter)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.highVoltageLines}
                            onChange={(e)=>{this.setState({highVoltageLinesDistanceToTank:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="limitedSpacing"
                            custom={true}
                            inline={true}
                            label="Limited Spacing"
                            onChange={(e)=>{this.setState({limitedSpacing:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.limitedSpacing}
                            onChange={(e)=>{this.setState({limitedSpacingCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="hazardousMaterialStorage"
                            custom={true}
                            inline={true}
                            label="Hazardous material storage"
                            onChange={(e)=>{this.setState({hazardousMaterialStorage:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.hazardousMaterialStorage}
                            onChange={(e)=>{this.setState({hazardousMaterialStorageCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="confinement"
                            custom={true}
                            inline={true}
                            label="confinement"
                            onChange={(e)=>{this.setState({confinement:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.confinement}
                            onChange={(e)=>{this.setState({confinementCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        
                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialExistingSitePollution"
                            custom={true}
                            inline={true}
                            label="Potential existing site pollution (soil)"
                            onChange={(e)=>{this.setState({potentialExistingSitePollution:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialExistingSitePollution}
                            onChange={(e)=>{this.setState({potentialExistingSitePollutionCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="proximityToHighRisk"
                            custom={true}
                            inline={true}
                            label="Proximity to high risk site"
                            onChange={(e)=>{this.setState({proximityToHighRisk:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.proximityToHighRisk}
                            onChange={(e)=>{this.setState({proximityToHighRiskCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="proximityOfCombustibleMaterial"
                            custom={true}
                            inline={true}
                            label="Proximity of combustible material or heat source"
                            onChange={(e)=>{this.setState({proximityOfCombustibleMaterial:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.proximityOfCombustibleMaterial}
                            onChange={(e)=>{this.setState({proximityOfCombustibleMaterialCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Col md={{ offset:0 ,span:2}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="undergroundNetwork"
                            custom={true}
                            inline={true}
                            label="Underground network"
                            onChange={(e)=>{this.setState({undergroundNetwork:e.target.checked})}}/>
                            </Col>

                            <Form.Group as={Col}>
                            <Form.Text>Network Type</Form.Text>
                                <Select
                                value={this.state.undergroundNetworkCmt.value}
                                onChange={(e)=>{this.setState({ undergroundNetworkCmt: e.value})}}
                                options={ [
                                            { value: 'Electric cables', label: 'Electric cables' },
                                            { value: 'Process piping', label: 'Process piping' },
                                            { value: 'Fire fighting water', label: 'Fire fighting water' },
                                            { value: 'Sewage piping', label: 'Sewage piping' },
                                        ]}
                                />
                            </Form.Group>

                            <Form.Group as={Col }>
                            <Form.Text>Depth (Meters)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.undergroundNetwork}
                            onChange={(e)=>{this.setState({undergroundNetworkDepth:e.target.value})}} />
                            </Form.Group>


                            <Col md={{ offset:1 ,span:4}} >
                            <Form.Check id="properDrainage"
                            custom={true}
                            inline={true}
                            label="Is proper drainage system available to avoid the water
                            accumulation in case of heavy rain?"
                            onChange={(e)=>{this.setState({properDrainage:e.target.checked})}}/>
                            </Col>
                            <Form.Group as={Col}/>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="sittingInSafetyZone"
                            custom={true}
                            inline={true}
                            label="Sitting in a safety zone created by a surrounding installation (ATEX, …)"
                            onChange={(e)=>{this.setState({sittingInSafetyZone:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.sittingInSafetyZone}
                            onChange={(e)=>{this.setState({sittingInSafetyZoneCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="customerEquipmentNotFullyCompatible"
                            custom={true}
                            inline={true}
                            label="Customer equipment or area not fully compatible to the gas in use"
                            onChange={(e)=>{this.setState({customerEquipmentNotFullyCompatible:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.customerEquipmentNotFullyCompatible}
                            onChange={(e)=>{this.setState({customerEquipmentNotFullyCompatibleCmt:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Col md={{ offset:0 ,span:6}} >
                            <Form.Check id="industrialCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({industrialCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.industrialCmts}
                            onChange={(e)=>{this.setState({industrialCmtsCmt:e.target.value})}} />
                            </Col>

                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>
                                    4.3 Population/Site location</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="residentialArea"
                            custom={true}
                            inline={true}
                            label="Residential area"
                            onChange={(e)=>{this.setState({residentialArea:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.residentialArea}
                            onChange={(e)=>{this.setState({residentialAreaCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="isolatedArea"
                            custom={true}
                            inline={true}
                            label="Isolated area"
                            onChange={(e)=>{this.setState({isolatedArea:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.isolatedArea}
                            onChange={(e)=>{this.setState({isolatedAreaCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="publicBuilding"
                            custom={true}
                            inline={true}
                            label="Public Building"
                            onChange={(e)=>{this.setState({publicBuilding:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.publicBuilding}
                            onChange={(e)=>{this.setState({publicBuildingCmt:e.target.value})}} />
                            </Form.Group>
                            
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="siteAccessibility"
                            custom={true}
                            inline={true}
                            label="Issue with site accessibility"
                            onChange={(e)=>{this.setState({siteAccessibility:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.siteAccessibility}
                            onChange={(e)=>{this.setState({siteAccessibilityCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="transportationCorridor"
                            custom={true}
                            inline={true}
                            label="Transportation corridor"
                            onChange={(e)=>{this.setState({transportationCorridor:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.transportationCorridor}
                            onChange={(e)=>{this.setState({transportationCorridorCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="highSecurityRisk"
                            custom={true}
                            inline={true}
                            label="High security risk (terrorism, vandalism, etc)"
                            onChange={(e)=>{this.setState({highSecurityRisk:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.highSecurityRisk}
                            onChange={(e)=>{this.setState({highSecurityRiskCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Col md={{ offset:0 ,span:6}} >
                            <Form.Check id="populationCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({populationCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.populationCmts}
                            onChange={(e)=>{this.setState({populationCmtsCmt:e.target.value})}} />
                            </Col>

                       </Form.Row>

                       <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>
                                4.4. Customer</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="financialSituation"
                            custom={true}
                            inline={true}
                            label="Financial situation (solvency) of the customer (pay on time, not healthy)"
                            onChange={(e)=>{this.setState({financialSituation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.financialSituation}
                            onChange={(e)=>{this.setState({financialSituationCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Col md={{ offset:1 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="newBusinessCustomer"
                            custom={true}
                            inline={true}
                            label="New business for the customer"
                            onChange={(e)=>{this.setState({newBusinessCustomer:e.target.checked})}}/>
                            </Col>

                            <Col md={{ offset:0 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="durabilityOfCustomerActivities"
                            custom={true}
                            inline={true}
                            label="Durability of customer activities"
                            onChange={(e)=>{this.setState({durabilityOfCustomerActivities:e.target.checked})}}/>
                            </Col>

                       </Form.Row>

                       <Form.Row>
                            <Form.Group as={Col}  >
                            <Form.Check id="strategicCustomer"
                            custom={true}
                            inline={true}
                            label="Strategic customer (dedicated AL development for a new customer, new area,
                                remote sources…)"
                            onChange={(e)=>{this.setState({strategicCustomer:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.strategicCustomer}
                            onChange={(e)=>{this.setState({strategicCustomerCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="customerCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({customerCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.customerCmts}
                            onChange={(e)=>{this.setState({customerCmtsCmt:e.target.value})}} />
                            </Form.Group>
                       </Form.Row>


                       <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>5. Project Organisation</Form.Label>
                            </Form.Group>
                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="jointProjectThirdParties"
                            custom={true}
                            inline={true}
                            label="Joint project with third parties"
                            onChange={(e)=>{this.setState({jointProjectThirdParties:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.jointProjectThirdParties}
                            onChange={(e)=>{this.setState({jointProjectThirdPartiesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="necessaryDesignAuthorities"
                            custom={true}
                            inline={true}
                            label="All necessary Design Authorities are not identified"
                            onChange={(e)=>{this.setState({necessaryDesignAuthorities:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.necessaryDesignAuthorities}
                            onChange={(e)=>{this.setState({necessaryDesignAuthoritiesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="jointProjectInvolvingAirLiquide"
                            custom={true}
                            inline={true}
                            label="Joint project involving Air Liquide entities (E&C, ALHZ, etc..)"
                            onChange={(e)=>{this.setState({jointProjectInvolvingAirLiquide:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.jointProjectInvolvingAirLiquide}
                            onChange={(e)=>{this.setState({jointProjectInvolvingAirLiquideCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="projectSubmittedToThirdParty"
                            custom={true}
                            inline={true}
                            label="Project submitted to third party validation List"
                            onChange={(e)=>{this.setState({projectSubmittedToThirdParty:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectSubmittedToThirdParty}
                            onChange={(e)=>{this.setState({projectSubmittedToThirdPartyCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="equipmentSuppliedByCustomer"
                            custom={true}
                            inline={true}
                            label="Equipments / services supplied by the customer"
                            onChange={(e)=>{this.setState({equipmentSuppliedByCustomer:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.equipmentSuppliedByCustomer}
                            onChange={(e)=>{this.setState({equipmentSuppliedByCustomerCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="difficultyAccessExpertise"
                            custom={true}
                            inline={true}
                            label="Difficulty to access expertise"
                            onChange={(e)=>{this.setState({difficultyAccessExpertise:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.difficultyAccessExpertise}
                            onChange={(e)=>{this.setState({difficultyAccessExpertiseCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>
                    
                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="useStandBbyAssets"
                            custom={true}
                            inline={true}
                            label="Use of stand-by assets (not in use for a long time)"
                            onChange={(e)=>{this.setState({useStandBbyAssets:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.useStandBbyAssets}
                            onChange={(e)=>{this.setState({useStandBbyAssetsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="issueOfResource"
                            custom={true}
                            inline={true}
                            label="Issue of resource (e.g. long lasting project)"
                            onChange={(e)=>{this.setState({issueOfResource:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.issueOfResource}
                            onChange={(e)=>{this.setState({issueOfResourceCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="projectOrganisationCmts"
                            custom={true}
                            inline={true}
                            label="Other / comment"
                            onChange={(e)=>{this.setState({projectOrganisationCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectOrganisationCmts}
                            onChange={(e)=>{this.setState({projectOrganisationCmtsCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>6. Processes, Products, Technology (PPT), Equipment</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="equipmentTechnologySupplier"
                            custom={true}
                            inline={true}
                            label="Equipment/Technology supplier:Qualified supplier(yes or no)"
                            onChange={(e)=>{this.setState({equipmentTechnologySupplier:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.equipmentTechnologySupplier}
                            placeholder={"yes/no : justification"}
                            onChange={(e)=>{this.setState({equipmentTechnologySupplierCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="majorProblemEncountered"
                            custom={true}
                            inline={true}
                            label="Major problem encountered on similar project"
                            onChange={(e)=>{this.setState({majorProblemEncountered:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.majorProblemEncountered}
                            onChange={(e)=>{this.setState({majorProblemEncounteredCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="qualifiedValidatedEquipment"
                            custom={true}
                            inline={true}
                            label="Qualified / validated equipment (yes or no)"
                            onChange={(e)=>{this.setState({qualifiedValidatedEquipment:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.qualifiedValidatedEquipment}
                            placeholder={"yes/no : justification"}
                            onChange={(e)=>{this.setState({qualifiedValidatedEquipmentCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="requirementsUtilitiesSpecification"
                            custom={true}
                            inline={true}
                            label="Requirements on utilities specification not fully covered (water specification …)"
                            onChange={(e)=>{this.setState({requirementsUtilitiesSpecification:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requirementsUtilitiesSpecification}
                            onChange={(e)=>{this.setState({requirementsUtilitiesSpecificationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="newImposedAssociates"
                            custom={true}
                            inline={true}
                            label="New or imposed associates or contractors"
                            onChange={(e)=>{this.setState({newImposedAssociates:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.newImposedAssociates}
                            onChange={(e)=>{this.setState({newImposedAssociatesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="installatioProductRequireHazardous"
                            custom={true}
                            inline={true}
                            label="Installation or product may require hazardous waste disposal / recycling cost now or
                            in the future"
                            onChange={(e)=>{this.setState({installatioProductRequireHazardous:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.installatioProductRequireHazardous}
                            onChange={(e)=>{this.setState({installatioProductRequireHazardousCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>


                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="innovationNewlyDeveloped"
                            custom={true}
                            inline={true}
                            label="Innovation and/or newly developed PPT"
                            onChange={(e)=>{this.setState({innovationNewlyDeveloped:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.innovationNewlyDeveloped}
                            onChange={(e)=>{this.setState({innovationNewlyDevelopedCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="productsRawMaterials"
                            custom={true}
                            inline={true}
                            label="Products or raw materials may have negative impacts on health (e.g. carcinogenic)"
                            onChange={(e)=>{this.setState({productsRawMaterials:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.productsRawMaterials}
                            onChange={(e)=>{this.setState({productsRawMaterialsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>

                            <Form.Check id="projectUsingInnovativePpt"
                            custom={true}
                            inline={true}
                            label="Project using one or several innovative PPT"
                            onChange={(e)=>{this.setState({projectUsingInnovativePpt:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectUsingInnovativePpt}
                            onChange={(e)=>{this.setState({projectUsingInnovativePptCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                         <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationHaveNegativeImpact"
                            custom={true}
                            inline={true}
                            label="Operation may have negative impact on the environment (e.g. air emissions, energy
                                consumption, liquid discharges)"
                            onChange={(e)=>{this.setState({operationHaveNegativeImpact:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationHaveNegativeImpact}
                            onChange={(e)=>{this.setState({operationHaveNegativeImpactCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="intellectualPropertyWatch"
                            custom={true}
                            inline={true}
                            label="Intellectual property watch"
                            onChange={(e)=>{this.setState({intellectualPropertyWatch:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.intellectualPropertyWatch}
                            onChange={(e)=>{this.setState({intellectualPropertyWatchCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="riskAnalysisProject"
                            custom={true}
                            inline={true}
                            label="Risk analysis of the whole project (integration of risk analysis of subsystems)
                                    does not exist"
                            onChange={(e)=>{this.setState({riskAnalysisProject:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.riskAnalysisProject}
                            onChange={(e)=>{this.setState({riskAnalysisProjectCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                         <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="lackMainEquipments"
                            custom={true}
                            inline={true}
                            label="Lack of references for main equipments or suppliers"
                            onChange={(e)=>{this.setState({lackMainEquipments:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.lackMainEquipments}
                            onChange={(e)=>{this.setState({lackMainEquipmentsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="previousRiskAnalysis"
                            custom={true}
                            inline={true}
                            label="Previous risk analysis"
                            onChange={(e)=>{this.setState({previousRiskAnalysis:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.previousRiskAnalysis}
                            onChange={(e)=>{this.setState({previousRiskAnalysisCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="lackSimilarProcess"
                            custom={true}
                            inline={true}
                            label="Lack of experience with similar process / First application for subsidiary"
                            onChange={(e)=>{this.setState({lackSimilarProcess:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.lackSimilarProcess}
                            onChange={(e)=>{this.setState({lackSimilarProcessCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Col md={{ offset:0 ,span:6}}>
                            <Form.Check id="processesProductsCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({processesProductsCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.processesProductsCmts}
                            onChange={(e)=>{this.setState({processesProductsCmtsCmt:e.target.value})}} />
                            </Col>
                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>7. Operation Conditions</Form.Label>
                            </Form.Group>
                       </Form.Row>
                        
                         <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="customizedPlant"
                            custom={true}
                            inline={true}
                            label="Customized plant / equipment (tailor made)"
                            onChange={(e)=>{this.setState({customizedPlant:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.customizedPlant}
                            onChange={(e)=>{this.setState({customizedPlantCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="noOperatingExperienceSimilarProcess"
                            custom={true}
                            inline={true}
                            label="No operating experience of similar process / equipment"
                            onChange={(e)=>{this.setState({noOperatingExperienceSimilarProcess:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.noOperatingExperienceSimilarProcess}
                            onChange={(e)=>{this.setState({noOperatingExperienceSimilarProcessCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="newServiceBySubsidiary"
                            custom={true}
                            inline={true}
                            label="New service offered by subsidiary (e.g. after-sales service, maintenance)"
                            onChange={(e)=>{this.setState({newServiceBySubsidiary:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.newServiceBySubsidiary}
                            onChange={(e)=>{this.setState({newServiceBySubsidiaryCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialBackflow"
                            custom={true}
                            inline={true}
                            label="Potential backflow from the customer (leading to contamination, overpressure…)"
                            onChange={(e)=>{this.setState({potentialBackflow:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialBackflow}
                            onChange={(e)=>{this.setState({potentialBackflowCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="includeTransportationActivities"
                            custom={true}
                            inline={true}
                            label="Include transportation activities"
                            onChange={(e)=>{this.setState({includeTransportationActivities:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>

                            <Row>
                            <Col md={{offset:0,span:4}}>
                            <Select
                            value={this.state.includeTransportationActivitiesType.value}
                            onChange={(e)=>{this.setState({ includeTransportationActivitiesType: e.value})}}
                            options={ [
                                        { value: 'Road', label: 'Road' },
                                        { value: 'Rail', label: 'Rail' },
                                       
                                    ]}
                            />
                            </Col>
                            <Col md={{offset:0,span:8}}>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.includeTransportationActivities}
                            onChange={(e)=>{this.setState({includeTransportationActivitiesCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="specialTraining"
                            custom={true}
                            inline={true}
                            label="Special training is required (e.g. for Electronics Specialty Gases)"
                            onChange={(e)=>{this.setState({specialTraining:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.specialTraining}
                            onChange={(e)=>{this.setState({specialTrainingCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="operationDoneByCustomer"
                            custom={true}
                            inline={true}
                            label="Operation done by a customer , third-party , contractor"
                            onChange={(e)=>{this.setState({operationDoneByCustomer:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationDoneByCustomer}
                            onChange={(e)=>{this.setState({operationDoneByCustomerCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="unattendedFacility"
                            custom={true}
                            inline={true}
                            label="Unattended facility"
                            onChange={(e)=>{this.setState({unattendedFacility:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.unattendedFacility}
                            onChange={(e)=>{this.setState({unattendedFacilityCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operatingWithoutDesign"
                            custom={true}
                            inline={true}
                            label="Operating conditions without design experience(e.g.filling hydrogen cylinders at
                                700 bars,oxygen cylinders at 300 bars)"
                            onChange={(e)=>{this.setState({operatingWithoutDesign:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operatingWithoutDesign}
                            onChange={(e)=>{this.setState({operatingWithoutDesignCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="remoteFillingLines"
                            custom={true}
                            inline={true}
                            label="Remote filling lines are used between unloading point and filled storage tank"
                            onChange={(e)=>{this.setState({remoteFillingLines:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.remoteFillingLines}
                            onChange={(e)=>{this.setState({remoteFillingLinesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({operationCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationCmts}
                            onChange={(e)=>{this.setState({operationCmtsCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>8. Customer Requirements</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="notFullyDefined"
                            custom={true}
                            inline={true}
                            label="Not fully defined"
                            onChange={(e)=>{this.setState({notFullyDefined:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.notFullyDefined}
                            onChange={(e)=>{this.setState({notFullyDefinedCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="mandatoryCustomerStandards"
                            custom={true}
                            inline={true}
                            label="Mandatory customer standards to be followed"
                            onChange={(e)=>{this.setState({mandatoryCustomerStandards:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.mandatoryCustomerStandards}
                            onChange={(e)=>{this.setState({mandatoryCustomerStandardsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="technicalIssues"
                            custom={true}
                            inline={true}
                            label="Technical issues"
                            onChange={(e)=>{this.setState({technicalIssues:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.technicalIssues}
                            onChange={(e)=>{this.setState({technicalIssuesCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="specificInsurance"
                            custom={true}
                            inline={true}
                            label="Specific insurance required by the customer"
                            onChange={(e)=>{this.setState({specificInsurance:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.specificInsurance}
                            onChange={(e)=>{this.setState({specificInsuranceCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="contractualTargets"
                            custom={true}
                            inline={true}
                            label="Contractual targets for reliability, availability, safety, quality (e.g. food safety)"
                            onChange={(e)=>{this.setState({contractualTargets:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.contractualTargets}
                            onChange={(e)=>{this.setState({contractualTargetsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="requiredStudies"
                            custom={true}
                            inline={true}
                            label="Required studies for operational permits (fire fighting, lightning protection, ATEX …)"
                            onChange={(e)=>{this.setState({requiredStudies:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requiredStudies}
                            onChange={(e)=>{this.setState({requiredStudiesCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="requiredStudiesReliability"
                            custom={true}
                            inline={true}
                            label="Required studies on reliability, availability, maintainability, safety"
                            onChange={(e)=>{this.setState({requiredStudiesReliability:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requiredStudiesReliability}
                            onChange={(e)=>{this.setState({requiredStudiesReliabilityCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="peakFlowRequirement"
                            custom={true}
                            inline={true}
                            label="Peak flow requirement if any; define the maximum duration & frequency of peak flow"
                            onChange={(e)=>{this.setState({peakFlowRequirement:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.peakFlowRequirement}
                            onChange={(e)=>{this.setState({peakFlowRequirementCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>                            
                            <Form.Check id="safetyIntegrityLevel"
                            custom={true}
                            inline={true}
                            label="Safety Integrity Level (SIL) study required"
                            onChange={(e)=>{this.setState({safetyIntegrityLevel:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.safetyIntegrityLevel}
                            onChange={(e)=>{this.setState({safetyIntegrityLevelCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Col md={{ offset:0 ,span:6}}>
                            <Form.Check id="processesProductsCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({processesProductsCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.processesProductsCmts}
                            onChange={(e)=>{this.setState({processesProductsCmtsCmt:e.target.value})}} />
                            </Col>
                        </Form.Row>

                        

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>
                                9. Regulatory Obligations / Environmental </Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="regulatoryInformation"
                            custom={true}
                            inline={true}
                            label="Regulatory Information not available (unclear..)"
                            onChange={(e)=>{this.setState({regulatoryInformation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.regulatoryInformation}
                            onChange={(e)=>{this.setState({regulatoryInformationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="lackOfKnowledge"
                            custom={true}
                            inline={true}
                            label="Lack of knowledge of applicable safety / Environmental mandatory regulations"
                            onChange={(e)=>{this.setState({lackOfKnowledge:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.lackOfKnowledge}
                            onChange={(e)=>{this.setState({lackOfKnowledgeCmt:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Col md={{ offset:0 , span:3 }} >
                                <Col md={{ offset:0 }}>
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>
                                9.1 Specific studies required</Form.Label>
                                </Col>
                            </Col>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="environmentalImpactStudy"
                            custom={true}
                            inline={true}
                            label="Environmental impact study"
                            onChange={(e)=>{this.setState({environmentalImpactStudy:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="societalRiskAnalysis"
                            custom={true}
                            inline={true}
                            label="Societal risk analysis"
                            onChange={(e)=>{this.setState({societalRiskAnalysis:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="explosiveAreaClassification"
                            custom={true}
                            inline={true}
                            label="Explosive area classification"
                            onChange={(e)=>{this.setState({explosiveAreaClassification:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="safetyHazardStudy"
                            custom={true}
                            inline={true}
                            label="Safety / Hazard study"
                            onChange={(e)=>{this.setState({safetyHazardStudy:e.target.checked})}}/>
                            </Form.Group>

                       </Form.Row>
                       <Row style={{height: .02*window.innerHeight + 'px'}}/>                        
                       <Form.Row>
                            <Col md={{ offset:0 , span:3 }} >
                                <Col md={{ offset:0 }}>
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>
                                9.2. Need to be compliant with</Form.Label>
                                </Col>
                            </Col>
                       </Form.Row>

                       <Form.Row>

                            <Col md={2}>
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="oSHA"
                            custom={true}
                            inline={true}
                            label="OSHA"
                            onChange={(e)=>{this.setState({oSHA:e.target.checked})}}/>
                            </Col>

                            <Col md={3}>
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="areaClassificationElectrical"
                            custom={true}
                            inline={true}
                            label="Area Classification / Electrical"
                            onChange={(e)=>{this.setState({areaClassificationElectrical:e.target.checked})}}/>
                            </Col>

                            <Col md={5}>
                            <Form.Check id="pressureVesselRegulation"
                            custom={true}
                            inline={true}
                            label="Pressure vessel regulation"
                            onChange={(e)=>{this.setState({pressureVesselRegulation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.pressureVesselRegulation}
                            onChange={(e)=>{this.setState({pressureVesselRegulationCmt:e.target.value})}} />
                            </Col>

                       </Form.Row>
                       <Row style={{height: .02*window.innerHeight + 'px'}}/>
                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="transportationRegulation"
                            custom={true}
                            inline={true}
                            label="Transportation regulation, please specify"
                            onChange={(e)=>{this.setState({transportationRegulation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.transportationRegulation}
                            onChange={(e)=>{this.setState({transportationRegulationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="electricalEquipmentEegulation"
                            custom={true}
                            inline={true}
                            label="Electrical equipment regulation"
                            onChange={(e)=>{this.setState({electricalEquipmentEegulation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.electricalEquipmentEegulation}
                            onChange={(e)=>{this.setState({electricalEquipmentEegulationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="otherRegulation"
                            custom={true}
                            inline={true}
                            label="Other regulation"
                            onChange={(e)=>{this.setState({otherRegulation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.otherRegulation}
                            onChange={(e)=>{this.setState({otherRegulationCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="softwareProcessControl"
                            custom={true}
                            inline={true}
                            label="Software / Process Control devices (e.g. SIL level)"
                            onChange={(e)=>{this.setState({softwareProcessControl:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.softwareProcessControl}
                            onChange={(e)=>{this.setState({softwareProcessControlCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="otherApplicablePermits"
                            custom={true}
                            inline={true}
                            label="List other applicable permits"
                            onChange={(e)=>{this.setState({otherApplicablePermits:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.otherApplicablePermits}
                            onChange={(e)=>{this.setState({otherApplicablePermitsCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>
                                10. Consequences of supply or delivery loss (flow interruption)</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="corporateImage"
                            custom={true}
                            inline={true}
                            label="Corporate image"
                            onChange={(e)=>{this.setState({corporateImage:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.corporateImage}
                            onChange={(e)=>{this.setState({corporateImageCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="financialLoss"
                            custom={true}
                            inline={true}
                            label="Financial loss"
                            onChange={(e)=>{this.setState({financialLoss:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.financialLoss}
                            onChange={(e)=>{this.setState({financialLossCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnCustomer"
                            custom={true}
                            inline={true}
                            label="Impact on customer"
                            onChange={(e)=>{this.setState({impactOnCustomer:e.target.checked})}}/>

                            <Row>
                            <Col md={{offset:0,span:6}}>
                            <Select
                                value={this.state.impactOnCustomerType.value}
                                onChange={(e)=>{this.setState({ impactOnCustomerType: e.value})}}
                                options={ [
                                            { value: 'Safety', label: 'Safety' },
                                            { value: 'Reliability', label: 'Reliability' },
                                            { value: 'Equipment damage', label: 'Equipment damage' },
                                            { value: 'Other', label: 'Other' },
                                        ]}
                                />
                            </Col>
                            <Col md={{offset:0,span:6}}>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnCustomer}
                            onChange={(e)=>{this.setState({impactOnCustomerCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnAL"
                            custom={true}
                            inline={true}
                            label="Impact on other AL business lines"
                            onChange={(e)=>{this.setState({impactOnAL:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnAL}
                            placeholder={"please specify ..."}
                            onChange={(e)=>{this.setState({impactOnALCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnStrategic"
                            custom={true}
                            inline={true}
                            label="Impact on strategic customers"
                            onChange={(e)=>{this.setState({impactOnStrategic:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnStrategic}
                            onChange={(e)=>{this.setState({impactOnStrategicCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="contractualPenalties"
                            custom={true}
                            inline={true}
                            label="Contractual penalties"
                            onChange={(e)=>{this.setState({contractualPenalties:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.contractualPenalties}
                            onChange={(e)=>{this.setState({contractualPenaltiesCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>
                            <Col md={{span:6}}>
                            <Form.Check id="consequencesCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({consequencesCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.consequencesCmts}
                            onChange={(e)=>{this.setState({consequencesCmtsCmt:e.target.value})}} />
                            </Col>

                       </Form.Row>

                       <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>
                                11. In case of acquisition (Project type acquisition)</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="technicalInspection"
                            custom={true}
                            inline={true}
                            label="Technical inspection difficult prior to the completion of sale"
                            onChange={(e)=>{this.setState({technicalInspection:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.technicalInspection}
                            onChange={(e)=>{this.setState({technicalInspectionCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="significantDiscrepanciesAL"
                            custom={true}
                            inline={true}
                            label="Significant discrepancies with AL standards"
                            onChange={(e)=>{this.setState({significantDiscrepanciesAL:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.significantDiscrepanciesAL}
                            onChange={(e)=>{this.setState({significantDiscrepanciesALCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialNonComplianceSafety"
                            custom={true}
                            inline={true}
                            label="Potential non-compliance with applicable safety regulations"
                            onChange={(e)=>{this.setState({potentialNonComplianceSafety:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialNonComplianceSafety}
                            onChange={(e)=>{this.setState({potentialNonComplianceSafetyCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialIssueCompetencies"
                            custom={true}
                            inline={true}
                            label="Potential issue with competencies/qualification of personnel"
                            onChange={(e)=>{this.setState({potentialIssueCompetencies:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialIssueCompetencies}
                            onChange={(e)=>{this.setState({potentialIssueCompetenciesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="obsoleteEquipment"
                            custom={true}
                            inline={true}
                            label="Obsolete equipment"
                            onChange={(e)=>{this.setState({obsoleteEquipment:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.obsoleteEquipment}
                            onChange={(e)=>{this.setState({obsoleteEquipmentCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="facilityAge"
                            custom={true}
                            inline={true}
                            label="Facility age"
                            onChange={(e)=>{this.setState({facilityAge:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.facilityAge}
                            onChange={(e)=>{this.setState({facilityAgeCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialNonComplianceEnvironmental"
                            custom={true}
                            inline={true}
                            label="Potential non-compliance with applicable environmental regulations"
                            onChange={(e)=>{this.setState({potentialNonComplianceEnvironmental:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialNonComplianceEnvironmental}
                            onChange={(e)=>{this.setState({potentialNonComplianceEnvironmentalCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="acquisitionCmts"
                            custom={true}
                            inline={true}
                            label="Other"
                            onChange={(e)=>{this.setState({acquisitionCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.acquisitionCmts}
                            onChange={(e)=>{this.setState({acquisitionCmtsCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                        <Row><br/></Row>

                </fieldset>
                </Col>
                <Card.Footer > 
                            <Col md={{offset:5}} >
                            <Button type="submit" variant="outline" style={{color:this.submissionColor(this.state.done)}}>Check if done {this.state.done}</Button>
                            </Col> 
                            
                </Card.Footer>
                </Form>
                </Form>
                </Card>
            </React.Fragment>
        )
      }

}


export default priForm;
