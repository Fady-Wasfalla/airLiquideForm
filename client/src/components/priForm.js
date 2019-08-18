import React, { Component } from "react";
import { Form , Col , Row , Card , FormControl , Button} from "react-bootstrap";
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


        
      }

      sendData =()=>{
          this.props.ParentCallBack(this.state)
      }


     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >PRI Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                    <Form>
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>1. Project description and general comments</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                            <Form.Group as={Col} controlId="descriptionAndGeneralCmts">
                            <Form.Label>To be completed for clear understanding of the project and associated risks</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({descriptionAndGeneralCmts:e.target.value})}} />
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
                            <Form.Label>Facility Or Equipment</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({facilityOrEquipment:e.target.value})}} />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="facilityOrEquipmentRemarks">
                            <Form.Label>Facility Or Equipment Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({facilityOrEquipmentRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="applicationType">
                            <Form.Label>Application Type</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({applicationType:e.target.value})}} />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="applicationTypeRemarks">
                            <Form.Label>Application Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({applicationTypeRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="projectType">
                            <Form.Label>Project Type</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({projectType:e.target.value})}} />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="projectTypeRemarks">
                            <Form.Label>Project Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({projectTypeRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                       
                        <Form.Row>
                            <Form.Group as={Col} controlId="facilityOrEquipmentSupply">
                            <Form.Label>Facility Or Equipment Supply</Form.Label>
                            <Form.Control as="textarea" rows="2" onChange={(e)=>{this.setState({facilityOrEquipmentSupply:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="facilityOrEquipmentCmts">
                            <Form.Label>Facility Or Equipment Cmts</Form.Label>
                            <Form.Control as="textarea" rows="2" onChange={(e)=>{this.setState({facilityOrEquipmentCmts:e.target.value})}} />
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
                            label="mobile (transportable equipt…) "
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
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>4. Site information</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" }}>4.1. Natural</Form.Label>
                            </Form.Group>
                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="earthquake"
                            custom={true}
                            inline={true}
                            label="earthquake"
                            onChange={(e)=>{this.setState({earthquake:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.earthquake}
                            placeHolder="Seismic Zone ..."
                            onChange={(e)=>{this.setState({earthquakeCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationAffectedRegulatedArea"
                            custom={true}
                            inline={true}
                            label="Operation affected by a regulated area (e.g. Natural Park)"
                            onChange={(e)=>{this.setState({operationAffectedRegulatedArea:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationAffectedRegulatedArea}
                            onChange={(e)=>{this.setState({operationAffectedRegulatedAreaCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="weather"
                            custom={true}
                            inline={true}
                            label="weather"
                            onChange={(e)=>{this.setState({weather:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.weather}
                            onChange={(e)=>{this.setState({weatherCmt:e.target.value})}} />
                            </Form.Group>

                            

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="flooding"
                            custom={true}
                            inline={true}
                            label="flooding"
                            onChange={(e)=>{this.setState({flooding:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="landslide"
                            custom={true}
                            inline={true}
                            label="landslide"
                            onChange={(e)=>{this.setState({landslide:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="salinity"
                            custom={true}
                            inline={true}
                            label="salinity"
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
                            <Form.Group as={Col }>
                            <Form.Text>Depth (Meters)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.undergroundNetwork}
                            onChange={(e)=>{this.setState({undergroundNetworkDepth:e.target.value})}} />
                            </Form.Group>
                            <Col md={{ offset:1 ,span:6}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
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
                            placeHolder={"yes/no : justification"}
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
                            placeHolder={"yes/no : justification"}
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
                            <Form.Control as="textarea" rows="1" disabled={!this.state.includeTransportationActivities}
                            onChange={(e)=>{this.setState({includeTransportationActivitiesCmt:e.target.value})}} />
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


                       <Button onClick={this.sendData}>send Data</Button>

                        <Row><br/></Row>

                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default priForm;
