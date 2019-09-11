import React, { Component } from "react";
import { Form , Col , Row , Card , FormControl , Button , Collapse} from "react-bootstrap";
import Fluids from '../fluids'
import Utilities from '../utilities'
import "react-datepicker/dist/react-datepicker.css";

class priDisplay extends Component {
    
    state = {
        open:false,
    }
      render() {
          let pri
          (!this.props.PRI)?pri={}:pri=this.props.PRI
          let utilities = this.props.UTILITIES
          let fluids = this.props.FLUIDS
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>PRI Form</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                         }}>☰</Button>
                 </Row>
                 </Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <Collapse in={this.state.open}>
                    <Form>
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic",textDecoration:"underline" }}> 1. Project description and general comments</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                            <Form.Group as={Col} controlId="descriptionAndGeneralCmts">
                            <Form.Label>To be completed for clear understanding of the project and associated risks</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.descriptionAndGeneralCmts}/>
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
                            <Form.Label style={{fontWeight:"bold"}}>Facility Or Equipment</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.facilityOrEquipment}/>
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="facilityOrEquipmentRemarks">
                            <Form.Label style={{fontWeight:"bold"}} >Facility Or Equipment Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.facilityOrEquipmentRemarks}/>

                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="applicationType">
                            <Form.Label style={{fontWeight:"bold"}} >Application Type</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.applicationType}/>
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="applicationTypeRemarks">
                            <Form.Label style={{fontWeight:"bold"}} >Application Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.applicationTypeRemarks}/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="projectType">
                            <Form.Label style={{fontWeight:"bold"}} >Project Type</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.projectType}/>
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="projectTypeRemarks">
                            <Form.Label style={{fontWeight:"bold"}} >Project Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" value={pri.projectTypeRemarks}/>
                            </Form.Group>
                        </Form.Row>
                       
                        <Form.Row>
                            <Form.Group as={Col} controlId="facilityOrEquipmentSupply">
                            <Form.Label style={{fontWeight:"bold"}} >Facility Or Equipment Supply</Form.Label>
                            <Form.Control as="textarea" rows="2" value={pri.facilityOrEquipmentSupply}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="facilityOrEquipmentCmts">
                            <Form.Label style={{fontWeight:"bold"}} >Facility Or Equipment Cmts</Form.Label>
                            <Form.Control as="textarea" rows="2" value={pri.facilityOrEquipmentCmts}/>
                            </Form.Group>
                        </Form.Row>
        
                        <Form.Row>
                            <Form.Group as={Col } >
                            <Form.Check id="fixedStandardBulk" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Fixed Standard bulk installation with atm. vaporizers and other standard equipment"
                            checked={pri.fixedStandardBulk}/>
                            </Form.Group>

                            <Form.Group as={Col}  md={2}>
                            <Form.Check id="fixedBulkTankOnly" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Fixed bulk tank only"
                            checked={pri.fixedBulkTankOnly}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Check id="onlySupplyOfProduct" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="No Installation, only supply of product  "
                            checked={pri.onlySupplyOfProduct}/>
                            </Form.Group>
                        </Form.Row>
                            
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Form.Check id="mobile" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="mobile (transportable equipt…) "
                            checked={pri.mobile}/>
                            </Form.Group>
                                
                            <Form.Group as={Col}  >
                            <Form.Check id="onBoardEquipment" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="On Board Equipment"
                            onChange={(e)=>{this.setState({onBoardEquipment:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.onBoardEquipment}
                            checked={pri.onBoardEquipment}/>
                            </Form.Group>
                            <Form.Group as={Col}/>
                            

                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic", textDecoration:"underline" }}>
                                3. Fluids used</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                        <Col md={12}><Fluids/></Col>
                        </Form.Row>

                        <Form.Row>
                        <Col md={12}><Utilities/></Col>
                        </Form.Row>



                       
                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic",textDecoration:"underline"  }}>4. Site information</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic", textDecoration:"underline"  }}>4.1. Natural</Form.Label>
                            </Form.Group>
                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="earthquake" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="earthquake"
                            checked={pri.earthquake}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.earthquake}
                            placeHolder="Seismic Zone ..."
                            value={pri.earthquakeCmt} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationAffectedRegulatedArea" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Operation affected by a regulated area (e.g. Natural Park)"
                            checked={pri.operationAffectedRegulatedArea}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationAffectedRegulatedArea}
                            value={pri.operationAffectedRegulatedAreaCmt} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="weather" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="weather"
                            checked={pri.weather}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.weather}
                            value={pri.weatherCmt} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="flooding" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="flooding"
                            checked={pri.flooding}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="landslide" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="landslide"
                            checked={pri.landslide}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="salinity" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="salinity"
                            checked={pri.salinity}/>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="createPotentialEnvironmental" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="May create potential environmental impact"
                            checked={pri.createPotentialEnvironmental}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.createPotentialEnvironmental}
                            value={pri.createPotentialEnvironmentalCmt}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="pollutionRemediation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Within or near site requiring pollution remediation "
                            checked={pri.pollutionRemediation}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.pollutionRemediation}
                            value={pri.pollutionRemediationCmt}/>
                            </Form.Group>

                        </Form.Row>    

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationsConditionsPotentially" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Operations and working conditions potentially affected by wildlife (insects , animals , rats , etc.)"
                            checked={pri.operationsConditionsPotentially}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationsConditionsPotentially}
                            value={pri.operationsConditionsPotentiallyCmt}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="naturalCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            onChange={(e)=>{this.setState({naturalCmts:e.target.checked})}}
                            checked={pri.naturalCmts}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.naturalCmts}
                            value={pri.naturalCmtsCmt}/>
                            </Form.Group>

                        </Form.Row>
                       
                        
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"16px" , fontStyle:"italic" ,textDecoration:"underline" }}>
                                    4.2. Industrial</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="pollution" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Pollution"
                           
                            checked={pri.pollution}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.pollution}
                            value={pri.pollutionCmt}/>
                            </Form.Group>

                            <Col md={{ offset:1 ,span:2}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="highVoltageLines" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="High voltage lines"
                            onChange={(e)=>{this.setState({highVoltageLines:e.target.checked})}}/>
                            </Col>

                            <Form.Group as={Col }>
                            <Form.Text style={{fontWeight:"bold"}} >Capacity (Volt)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.highVoltageLines}
                            onChange={(e)=>{this.setState({highVoltageLinesCapacity:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Text style={{fontWeight:"bold"}} >Distance to tank (Meter)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.highVoltageLines}
                            onChange={(e)=>{this.setState({highVoltageLinesDistanceToTank:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="limitedSpacing" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Limited Spacing"
                            onChange={(e)=>{this.setState({limitedSpacing:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.limitedSpacing}
                            onChange={(e)=>{this.setState({limitedSpacingCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="hazardousMaterialStorage" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Hazardous material storage"
                            onChange={(e)=>{this.setState({hazardousMaterialStorage:e.target.checked})}} checked={pri.hazardousMaterialStorage}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.hazardousMaterialStorage}
                            onChange={(e)=>{this.setState({hazardousMaterialStorageCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="confinement" style={{fontWeight:"bold"}}
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
                            <Form.Check id="potentialExistingSitePollution" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential existing site pollution (soil)"
                            onChange={(e)=>{this.setState({potentialExistingSitePollution:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialExistingSitePollution}
                            onChange={(e)=>{this.setState({potentialExistingSitePollutionCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="proximityToHighRisk" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Proximity to high risk site"
                            onChange={(e)=>{this.setState({proximityToHighRisk:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.proximityToHighRisk}
                            onChange={(e)=>{this.setState({proximityToHighRiskCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="proximityOfCombustibleMaterial" style={{fontWeight:"bold"}}
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
                            <Form.Check id="undergroundNetwork" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Underground network"
                            onChange={(e)=>{this.setState({undergroundNetwork:e.target.checked})}}/>
                            </Col>
                            <Form.Group as={Col }>
                            <Form.Text style={{fontWeight:"bold"}} >Depth (Meters)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.undergroundNetwork}
                            onChange={(e)=>{this.setState({undergroundNetworkDepth:e.target.value})}} />
                            </Form.Group>
                            <Col md={{ offset:1 ,span:6}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="properDrainage" style={{fontWeight:"bold"}}
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
                            <Form.Check id="sittingInSafetyZone" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Sitting in a safety zone created by a surrounding installation (ATEX, …)"
                            onChange={(e)=>{this.setState({sittingInSafetyZone:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.sittingInSafetyZone}
                            onChange={(e)=>{this.setState({sittingInSafetyZoneCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="customerEquipmentNotFullyCompatible" style={{fontWeight:"bold"}}
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
                            <Form.Check id="industrialCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="residentialArea" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Residential area"
                            onChange={(e)=>{this.setState({residentialArea:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.residentialArea}
                            onChange={(e)=>{this.setState({residentialAreaCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="isolatedArea" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Isolated area"
                            onChange={(e)=>{this.setState({isolatedArea:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.isolatedArea}
                            onChange={(e)=>{this.setState({isolatedAreaCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="publicBuilding" style={{fontWeight:"bold"}}
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
                            <Form.Check id="siteAccessibility" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Issue with site accessibility"
                            onChange={(e)=>{this.setState({siteAccessibility:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.siteAccessibility}
                            onChange={(e)=>{this.setState({siteAccessibilityCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="transportationCorridor" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Transportation corridor"
                            onChange={(e)=>{this.setState({transportationCorridor:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.transportationCorridor}
                            onChange={(e)=>{this.setState({transportationCorridorCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="highSecurityRisk" style={{fontWeight:"bold"}}
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
                            <Form.Check id="populationCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="financialSituation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Financial situation (solvency) of the customer (pay on time, not healthy)"
                            onChange={(e)=>{this.setState({financialSituation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.financialSituation}
                            onChange={(e)=>{this.setState({financialSituationCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Col md={{ offset:1 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="newBusinessCustomer" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="New business for the customer"
                            onChange={(e)=>{this.setState({newBusinessCustomer:e.target.checked})}}/>
                            </Col>

                            <Col md={{ offset:0 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="durabilityOfCustomerActivities" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Durability of customer activities"
                            onChange={(e)=>{this.setState({durabilityOfCustomerActivities:e.target.checked})}}/>
                            </Col>

                       </Form.Row>

                       <Form.Row>
                            <Form.Group as={Col}  >
                            <Form.Check id="strategicCustomer" style={{fontWeight:"bold"}}
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
                            <Form.Check id="customerCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="jointProjectThirdParties" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Joint project with third parties"
                            onChange={(e)=>{this.setState({jointProjectThirdParties:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.jointProjectThirdParties}
                            onChange={(e)=>{this.setState({jointProjectThirdPartiesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="necessaryDesignAuthorities" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="All necessary Design Authorities are not identified"
                            onChange={(e)=>{this.setState({necessaryDesignAuthorities:e.target.checked})}} check={pri.necessaryDesignAuthorities}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.necessaryDesignAuthorities}
                            onChange={(e)=>{this.setState({necessaryDesignAuthoritiesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="jointProjectInvolvingAirLiquide" style={{fontWeight:"bold"}}
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
                            <Form.Check id="projectSubmittedToThirdParty" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Project submitted to third party validation List"
                            onChange={(e)=>{this.setState({projectSubmittedToThirdParty:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectSubmittedToThirdParty}
                            onChange={(e)=>{this.setState({projectSubmittedToThirdPartyCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="equipmentSuppliedByCustomer" style={{fontWeight:"bold"}}
                            custom={true} 
                            inline={true}
                            label="Equipments / services supplied by the customer"
                            onChange={(e)=>{this.setState({equipmentSuppliedByCustomer:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.equipmentSuppliedByCustomer}
                            onChange={(e)=>{this.setState({equipmentSuppliedByCustomerCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="difficultyAccessExpertise" style={{fontWeight:"bold"}}
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
                            <Form.Check id="useStandBbyAssets" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Use of stand-by assets (not in use for a long time)"
                            onChange={(e)=>{this.setState({useStandBbyAssets:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.useStandBbyAssets}
                            onChange={(e)=>{this.setState({useStandBbyAssetsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="issueOfResource" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Issue of resource (e.g. long lasting project)"
                            onChange={(e)=>{this.setState({issueOfResource:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.issueOfResource}
                            onChange={(e)=>{this.setState({issueOfResourceCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="projectOrganisationCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="equipmentTechnologySupplier" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Equipment/Technology supplier:Qualified supplier(yes or no)"
                            onChange={(e)=>{this.setState({equipmentTechnologySupplier:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.equipmentTechnologySupplier}
                            placeHolder={"yes/no : justification"}
                            onChange={(e)=>{this.setState({equipmentTechnologySupplierCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="majorProblemEncountered" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Major problem encountered on similar project"
                            onChange={(e)=>{this.setState({majorProblemEncountered:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.majorProblemEncountered}
                            onChange={(e)=>{this.setState({majorProblemEncounteredCmt:e.target.value})}} />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="qualifiedValidatedEquipment" style={{fontWeight:"bold"}}
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
                            <Form.Check id="requirementsUtilitiesSpecification" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Requirements on utilities specification not fully covered (water specification …)"
                            onChange={(e)=>{this.setState({requirementsUtilitiesSpecification:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requirementsUtilitiesSpecification}
                            onChange={(e)=>{this.setState({requirementsUtilitiesSpecificationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="newImposedAssociates" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="New or imposed associates or contractors"
                            onChange={(e)=>{this.setState({newImposedAssociates:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.newImposedAssociates}
                            onChange={(e)=>{this.setState({newImposedAssociatesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="installatioProductRequireHazardous" style={{fontWeight:"bold"}}
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
                            <Form.Check id="innovationNewlyDeveloped" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Innovation and/or newly developed PPT"
                            onChange={(e)=>{this.setState({innovationNewlyDeveloped:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.innovationNewlyDeveloped}
                            onChange={(e)=>{this.setState({innovationNewlyDevelopedCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="productsRawMaterials" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Products or raw materials may have negative impacts on health (e.g. carcinogenic)"
                            onChange={(e)=>{this.setState({productsRawMaterials:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.productsRawMaterials}
                            onChange={(e)=>{this.setState({productsRawMaterialsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>

                            <Form.Check id="projectUsingInnovativePpt" style={{fontWeight:"bold"}}
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
                            <Form.Check id="operationHaveNegativeImpact" style={{fontWeight:"bold"}}
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
                            <Form.Check id="intellectualPropertyWatch" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Intellectual property watch"
                            onChange={(e)=>{this.setState({intellectualPropertyWatch:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.intellectualPropertyWatch}
                            onChange={(e)=>{this.setState({intellectualPropertyWatchCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="riskAnalysisProject" style={{fontWeight:"bold"}}
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
                            <Form.Check id="lackMainEquipments" style={{fontWeight:"bold"}}
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
                            <Form.Check id="previousRiskAnalysis" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Previous risk analysis"
                            onChange={(e)=>{this.setState({previousRiskAnalysis:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.previousRiskAnalysis}
                            onChange={(e)=>{this.setState({previousRiskAnalysisCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="lackSimilarProcess" style={{fontWeight:"bold"}}
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
                            <Form.Check id="customizedPlant" style={{fontWeight:"bold"}}
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
                            <Form.Check id="noOperatingExperienceSimilarProcess" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="No operating experience of similar process / equipment"
                            onChange={(e)=>{this.setState({noOperatingExperienceSimilarProcess:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.noOperatingExperienceSimilarProcess}
                            onChange={(e)=>{this.setState({noOperatingExperienceSimilarProcessCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="newServiceBySubsidiary" style={{fontWeight:"bold"}}
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
                            <Form.Check id="potentialBackflow" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential backflow from the customer (leading to contamination, overpressure…)"
                            onChange={(e)=>{this.setState({potentialBackflow:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialBackflow}
                            onChange={(e)=>{this.setState({potentialBackflowCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="includeTransportationActivities" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Include transportation activities"
                            onChange={(e)=>{this.setState({includeTransportationActivities:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.includeTransportationActivities}
                            onChange={(e)=>{this.setState({includeTransportationActivitiesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="specialTraining" style={{fontWeight:"bold"}}
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
                            <Form.Check id="operationDoneByCustomer" style={{fontWeight:"bold"}}
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
                            <Form.Check id="unattendedFacility" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Unattended facility"
                            onChange={(e)=>{this.setState({unattendedFacility:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.unattendedFacility}
                            onChange={(e)=>{this.setState({unattendedFacilityCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operatingWithoutDesign" style={{fontWeight:"bold"}}
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
                            <Form.Check id="remoteFillingLines" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Remote filling lines are used between unloading point and filled storage tank"
                            onChange={(e)=>{this.setState({remoteFillingLines:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.remoteFillingLines}
                            onChange={(e)=>{this.setState({remoteFillingLinesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="notFullyDefined" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Not fully defined"
                            onChange={(e)=>{this.setState({notFullyDefined:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.notFullyDefined}
                            onChange={(e)=>{this.setState({notFullyDefinedCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="mandatoryCustomerStandards" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Mandatory customer standards to be followed"
                            onChange={(e)=>{this.setState({mandatoryCustomerStandards:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.mandatoryCustomerStandards}
                            onChange={(e)=>{this.setState({mandatoryCustomerStandardsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="technicalIssues"  style={{fontWeight:"bold"}}
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
                            <Form.Check id="specificInsurance" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Specific insurance required by the customer"
                            onChange={(e)=>{this.setState({specificInsurance:e.target.checked})}}/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.specificInsurance}
                            onChange={(e)=>{this.setState({specificInsuranceCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="contractualTargets" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Contractual targets for reliability, availability, safety, quality (e.g. food safety)"
                            onChange={(e)=>{this.setState({contractualTargets:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.contractualTargets}
                            onChange={(e)=>{this.setState({contractualTargetsCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="requiredStudies" style={{fontWeight:"bold"}}
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
                            <Form.Check id="requiredStudiesReliability" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Required studies on reliability, availability, maintainability, safety"
                            onChange={(e)=>{this.setState({requiredStudiesReliability:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requiredStudiesReliability}
                            onChange={(e)=>{this.setState({requiredStudiesReliabilityCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="peakFlowRequirement" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Peak flow requirement if any; define the maximum duration & frequency of peak flow"
                            onChange={(e)=>{this.setState({peakFlowRequirement:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.peakFlowRequirement}
                            onChange={(e)=>{this.setState({peakFlowRequirementCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>                            
                            <Form.Check id="safetyIntegrityLevel" style={{fontWeight:"bold"}}
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
                            <Form.Check id="processesProductsCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="regulatoryInformation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Regulatory Information not available (unclear..)"
                            onChange={(e)=>{this.setState({regulatoryInformation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.regulatoryInformation}
                            onChange={(e)=>{this.setState({regulatoryInformationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="lackOfKnowledge" style={{fontWeight:"bold"}}
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
                            <Form.Check id="environmentalImpactStudy" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Environmental impact study"
                            onChange={(e)=>{this.setState({environmentalImpactStudy:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="societalRiskAnalysis" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Societal risk analysis"
                            onChange={(e)=>{this.setState({societalRiskAnalysis:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="explosiveAreaClassification" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Explosive area classification"
                            onChange={(e)=>{this.setState({explosiveAreaClassification:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="safetyHazardStudy" style={{fontWeight:"bold"}}
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
                            <Form.Check id="areaClassificationElectrical" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Area Classification / Electrical"
                            onChange={(e)=>{this.setState({areaClassificationElectrical:e.target.checked})}}/>
                            </Col>

                            <Col md={5}>
                            <Form.Check id="pressureVesselRegulation" style={{fontWeight:"bold"}}
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
                            <Form.Check id="transportationRegulation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Transportation regulation, please specify"
                            onChange={(e)=>{this.setState({transportationRegulation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.transportationRegulation}
                            onChange={(e)=>{this.setState({transportationRegulationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="electricalEquipmentEegulation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Electrical equipment regulation"
                            onChange={(e)=>{this.setState({electricalEquipmentEegulation:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.electricalEquipmentEegulation}
                            onChange={(e)=>{this.setState({electricalEquipmentEegulationCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="otherRegulation" style={{fontWeight:"bold"}}
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
                            <Form.Check id="softwareProcessControl" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Software / Process Control devices (e.g. SIL level)"
                            onChange={(e)=>{this.setState({softwareProcessControl:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.softwareProcessControl}
                            onChange={(e)=>{this.setState({softwareProcessControlCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="otherApplicablePermits" style={{fontWeight:"bold"}}
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
                            <Form.Check id="corporateImage" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Corporate image"
                            onChange={(e)=>{this.setState({corporateImage:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.corporateImage}
                            onChange={(e)=>{this.setState({corporateImageCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="financialLoss" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Financial loss"
                            onChange={(e)=>{this.setState({financialLoss:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.financialLoss}
                            onChange={(e)=>{this.setState({financialLossCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnCustomer" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Impact on customer"
                            onChange={(e)=>{this.setState({impactOnCustomer:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnCustomer}
                            onChange={(e)=>{this.setState({impactOnCustomerCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnAL" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Impact on other AL business lines"
                            onChange={(e)=>{this.setState({impactOnAL:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnAL}
                            placeHolder={"please specify ..."}
                            onChange={(e)=>{this.setState({impactOnALCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnStrategic" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Impact on strategic customers"
                            onChange={(e)=>{this.setState({impactOnStrategic:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnStrategic}
                            onChange={(e)=>{this.setState({impactOnStrategicCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="contractualPenalties" style={{fontWeight:"bold"}}
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
                            <Form.Check id="consequencesCmts" style={{fontWeight:"bold"}}
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
                            <Form.Check id="technicalInspection" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Technical inspection difficult prior to the completion of sale"
                            onChange={(e)=>{this.setState({technicalInspection:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.technicalInspection}
                            onChange={(e)=>{this.setState({technicalInspectionCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="significantDiscrepanciesAL" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Significant discrepancies with AL standards"
                            onChange={(e)=>{this.setState({significantDiscrepanciesAL:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.significantDiscrepanciesAL}
                            onChange={(e)=>{this.setState({significantDiscrepanciesALCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialNonComplianceSafety" style={{fontWeight:"bold"}}
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
                            <Form.Check id="potentialIssueCompetencies" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential issue with competencies/qualification of personnel"
                            onChange={(e)=>{this.setState({potentialIssueCompetencies:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialIssueCompetencies}
                            onChange={(e)=>{this.setState({potentialIssueCompetenciesCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="obsoleteEquipment" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Obsolete equipment"
                            onChange={(e)=>{this.setState({obsoleteEquipment:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.obsoleteEquipment}
                            onChange={(e)=>{this.setState({obsoleteEquipmentCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="facilityAge" style={{fontWeight:"bold"}}
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
                            <Form.Check id="potentialNonComplianceEnvironmental" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential non-compliance with applicable environmental regulations"
                            onChange={(e)=>{this.setState({potentialNonComplianceEnvironmental:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialNonComplianceEnvironmental}
                            onChange={(e)=>{this.setState({potentialNonComplianceEnvironmentalCmt:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="acquisitionCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Others"
                            onChange={(e)=>{this.setState({acquisitionCmts:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.acquisitionCmts}
                            onChange={(e)=>{this.setState({acquisitionCmtsCmt:e.target.value})}} />
                            </Form.Group>

                       </Form.Row>

                        <Row><br/></Row>

                    </Form>
                </Collapse>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default priDisplay;
