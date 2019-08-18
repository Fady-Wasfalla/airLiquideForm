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

        //4.4. Customer */
        industrialCmts:false ,
        industrialCmtsCmt :""  ,
        durabilityOfCustomerActivities:false,
        durabilityOfCustomerActivitiesCmt :"" ,
        newBusinessCustomer:false,
        newBusinessCustomerCmt :"",
        strategicCustomer:false,
        strategicCustomerCmt :"" ,
        customerCmts:false,
        customerCmtsCmt :"" ,

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

                       <Button
                       onClick={this.sendData}>a7a</Button>

                        <Row><br/></Row>

                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default priForm;
