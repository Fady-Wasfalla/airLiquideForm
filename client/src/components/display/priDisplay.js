import React, { Component } from "react";
import { Form , Col , Row , Card , FormControl , Button , Collapse} from "react-bootstrap";
import Fluids from '../fluids'
import Utilities from '../utilities'
import "react-datepicker/dist/react-datepicker.css";

class priDisplay extends Component {
    
    state = {
        open:true,
    }
      render() {
          let pri
          (!this.props.PRI)?pri={}:pri=this.props.PRI
          let Utilities = this.props.UTILITIES
          let Fluids = this.props.FLUIDS
          console.log("$$",Fluids)
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
                            <Form.Control as="textarea" rows="1" 
                            value={pri.descriptionAndGeneralCmts}/>
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
                            <Form.Control as="textarea" rows="1" 
                            value={pri.facilityOrEquipment}/>
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="facilityOrEquipmentRemarks">
                            <Form.Label style={{fontWeight:"bold"}} >Facility Or Equipment Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            value={pri.facilityOrEquipmentRemarks}/>

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
                            <Form.Control as="textarea" rows="1" 
                            value={pri.applicationTypeRemarks}/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="projectType">
                            <Form.Label style={{fontWeight:"bold"}} >Project Type</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            value={pri.projectType}/>
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="projectTypeRemarks">
                            <Form.Label style={{fontWeight:"bold"}} >Project Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            value={pri.projectTypeRemarks}/>
                            </Form.Group>
                        </Form.Row>
                       
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} md={4} controlId="facilityOrEquipmentSupply">
                            <Form.Label style={{fontWeight:"bold"}} >Other Supply</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            value={pri.facilityOrEquipmentSupply}/>
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="facilityOrEquipmentCmts">
                            <Form.Label style={{fontWeight:"bold"}} >Other</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            value={pri.facilityOrEquipmentCmts}/>
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
                            checked={pri.onBoardEquipment }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.onBoardEquipment}
                            value={pri.onBoardEquipment}/>
                            </Form.Group>
                            <Form.Group as={Col}/>
                            

                        </Form.Row>

                        {/* fluids and utilities */}

                        {
                            Fluids.map((e,index)=>{
                                return(
                                    <Col md={12}>
                                    <Card border="secondary">
                                        <Card.Header style={{ color:"black" , fontSize:"18px" }}>Fluid Information</Card.Header>
                                        <Col md={12}>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label style={{fontWeight:"bold"}} >Fluid / Product</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Fluids[index].fluidOrProduct}/>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                            <Form.Label style={{fontWeight:"bold"}} >Extreme pressure (Bar)</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Fluids[index].extremePressure}/>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                            <Form.Label style={{fontWeight:"bold"}} >Extreme temperature (°C)</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Fluids[index].extremeTemperature}/>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label style={{fontWeight:"bold"}} >Maximum flow (Nm3/hr)</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Fluids[index].maximumFlow}/>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                            <Form.Label style={{fontWeight:"bold"}} >Volume stored(Ltrs / Cyls.)</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Fluids[index].volumeStored}/>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                            <Form.Label style={{fontWeight:"bold"}} >Characteristics(Purity...)</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Fluids[index].characteristics}/>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            
                                            <Form.Label style={{fontWeight:"bold"}} >Natures : </Form.Label>
                                            <span>{'           '}</span> 
                                            <Form.Label >
                                                {Fluids[index].nature1}<span>{'   -    '}</span>
                                                {Fluids[index].nature2}<span>{'   -    '}</span>
                                                {Fluids[index].nature3}<span>{'   -    '}</span>
                                                {Fluids[index].natureOther}
                                            </Form.Label>
                                            

                                        </Form.Row>
                                    
                                    </Col>
                                    </Card>
                                    <br/>
                                    </Col>
                                )
                            })
                            
                        }

{
                            Utilities.map((e,index)=>{
                                return(
                                    <Col md={12}>
                                    <Card border="secondary">
                                        <Card.Header style={{ color:"black" , fontSize:"18px" }}>Utilities Information</Card.Header>
                                        <Col md={12}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={{offset:0,span:3}}>
                                            <Form.Label style={{fontWeight:"bold"}} >Utility</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Utilities[index].utility}/>
                                            </Form.Group>
                                            <Form.Group as={Col} md={{offset:0,span:8}}>
                                            <Form.Label style={{fontWeight:"bold"}} >Details</Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            value={Utilities[index].details}/>
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    </Card>
                                    <br/>
                                    </Col>
                                )
                            })
                            
                        }

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
                            <Row style={{height: .035*window.innerHeight + 'px'}}/>
                            <Form.Check id="naturalCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
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
                            checked={pri.highVoltageLines}/>
                            </Col>

                            <Form.Group as={Col }>
                            <Form.Text style={{fontWeight:"bold"}} >Capacity (Volt)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.highVoltageLines}
                            value={pri.highVoltageLinesCapacity}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Text style={{fontWeight:"bold"}} >Distance to tank (Meter)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.highVoltageLines}
                            value={pri.highVoltageLinesDistanceToTank}/>
                            </Form.Group>

                       </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="limitedSpacing" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Limited Spacing"
                            checked={pri.limitedSpacing}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.limitedSpacing}
                            value={pri.limitedSpacingCmt}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="hazardousMaterialStorage" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Hazardous material storage"
                            checked={pri.hazardousMaterialStorage}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.hazardousMaterialStorage}
                            value={pri.hazardousMaterialStorageCmt}/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="confinement" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="confinement"
                            checked={pri.confinement}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.confinement}
                            value={pri.confinementCmt}/>
                            </Form.Group>

                        </Form.Row>

                        
                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialExistingSitePollution" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential existing site pollution (soil)"
                            checked={pri.potentialExistingSitePollution}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialExistingSitePollution}
                            value={pri.potentialExistingSitePollutionCmt} />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="proximityToHighRisk" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Proximity to high risk site"
                            checked={pri.proximityToHighRisk}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.proximityToHighRisk}
                            value={pri.proximityToHighRiskCmt}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Check id="proximityOfCombustibleMaterial" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Proximity of combustible material or heat source"
                            checked={pri.proximityOfCombustibleMaterial}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.proximityOfCombustibleMaterial}
                            value={pri.proximityOfCombustibleMaterialCmt}/>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Col md={{ offset:0 ,span:6}} >
                            <Row>
                            <Col md={{ offset:0 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="undergroundNetwork" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Underground network"
                            checked={pri.undergroundNetwork}/>
                            </Col>

                            <Form.Group as={Col} md={{offset:0,span:5}}>
                            <Form.Text></Form.Text>
                            <Form.Text style={{fontWeight:"bold"}} >Network Type</Form.Text>
                            <FormControl type="textarea"  disabled={!this.state.undergroundNetwork}
                            value={pri.undergroundNetworkCmt} />
                            </Form.Group>

                            <Form.Group as={Col} md={{offset:0,span:4}}>
                            <Form.Text style={{fontWeight:"bold"}} >Depth (Meters)</Form.Text>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.undergroundNetwork}
                            value={pri.undergroundNetworkDepth} />
                            </Form.Group>
                            </Row>
                            </Col>

                            <Col md={{ offset:1 ,span:5}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="properDrainage" style={{fontWeight:"bold"}}
                            custom={true} 
                            inline={true}
                            checked={pri.properDrainage}
                            label="Is proper drainage system available to avoid the water
                            accumulation in case of heavy rain?"/>
                            </Col>
                            <Form.Group as={Col}/>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="sittingInSafetyZone" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Sitting in a safety zone created by a surrounding installation (ATEX, …)"
                            checked={pri.sittingInSafetyZone }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.sittingInSafetyZone}
                            value={pri.sittingInSafetyZoneCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="customerEquipmentNotFullyCompatible" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Customer equipment or area not fully compatible to the gas in use"
                            checked={pri.customerEquipmentNotFullyCompatible}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.customerEquipmentNotFullyCompatible}
                            value={pri.customerEquipmentNotFullyCompatibleCmt } />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Col md={{ offset:0 ,span:6}} >
                            <Form.Check id="industrialCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.industrialCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.industrialCmts}
                            value={pri.industrialCmtsCmt } />
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
                            checked={pri.residentialArea }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.residentialArea}
                            value={pri.residentialAreaCmt } />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="isolatedArea" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Isolated area"
                            checked={pri.isolatedArea }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.isolatedArea}
                            value={pri.isolatedAreaCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="publicBuilding" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Public Building"
                            checked={pri.publicBuilding }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.publicBuilding}
                            value={pri.publicBuildingCmt } />
                            </Form.Group>
                            
                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="siteAccessibility" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Issue with site accessibility"
                            checked={pri.siteAccessibility }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.siteAccessibility}
                            value={pri.siteAccessibilityCmt } />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="transportationCorridor" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Transportation corridor"
                            checked={pri.transportationCorridor }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.transportationCorridor}
                            value={pri.transportationCorridorCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="highSecurityRisk" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="High security risk (terrorism, vandalism, etc)"
                            checked={pri.highSecurityRisk }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.highSecurityRisk}
                            value={pri.highSecurityRiskCmt } />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Col md={{ offset:0 ,span:6}} >
                            <Form.Check id="populationCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.populationCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.populationCmts}
                            value={pri.populationCmtsCmt } />
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
                            checked={pri.financialSituation }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.financialSituation}
                            value={pri.financialSituationCmt } />
                            </Form.Group>
                            
                            <Col md={{ offset:1 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="newBusinessCustomer" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="New business for the customer"
                            checked={pri.newBusinessCustomer }/>
                            </Col>

                            <Col md={{ offset:0 ,span:3}} >
                            <Row style={{height: .04*window.innerHeight + 'px'}}/>
                            <Form.Check id="durabilityOfCustomerActivities" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Durability of customer activities"
                            checked={pri.durabilityOfCustomerActivities }/>
                            </Col>

                       </Form.Row>

                       <Form.Row>
                            <Form.Group as={Col}  >
                            <Form.Check id="strategicCustomer" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Strategic customer (dedicated AL development for a new customer, new area,
                                remote sources…)"
                            checked={pri.strategicCustomer }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.strategicCustomer}
                            value={pri.strategicCustomerCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="customerCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.customerCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.customerCmts}
                            value={pri.customerCmtsCmt } />
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
                            checked={pri.jointProjectThirdParties }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.jointProjectThirdParties}
                            value={pri.jointProjectThirdPartiesCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="necessaryDesignAuthorities" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="All necessary Design Authorities are not identified"
                            checked={pri.necessaryDesignAuthorities}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.necessaryDesignAuthorities}
                            value={pri.necessaryDesignAuthoritiesCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="jointProjectInvolvingAirLiquide" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Joint project involving Air Liquide entities (E&C, ALHZ, etc..)"
                            checked={pri.jointProjectInvolvingAirLiquide }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.jointProjectInvolvingAirLiquide}
                            value={pri.jointProjectInvolvingAirLiquideCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="projectSubmittedToThirdParty" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Project submitted to third party validation List"
                            checked={pri.projectSubmittedToThirdParty }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectSubmittedToThirdParty}
                            value={pri.projectSubmittedToThirdPartyCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="equipmentSuppliedByCustomer" style={{fontWeight:"bold"}}
                            custom={true} 
                            inline={true}
                            label="Equipments / services supplied by the customer"
                            checked={pri.equipmentSuppliedByCustomer }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.equipmentSuppliedByCustomer}
                            value={pri.equipmentSuppliedByCustomerCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="difficultyAccessExpertise" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Difficulty to access expertise"
                            checked={pri.difficultyAccessExpertise }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.difficultyAccessExpertise}
                            value={pri.difficultyAccessExpertiseCmt } />
                            </Form.Group>

                        </Form.Row>
                    
                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="useStandBbyAssets" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Use of stand-by assets (not in use for a long time)"
                            checked={pri.useStandBbyAssets }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.useStandBbyAssets}
                            value={pri.useStandBbyAssetsCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="issueOfResource" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Issue of resource (e.g. long lasting project)"
                            checked={pri.issueOfResource }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.issueOfResource}
                            value={pri.issueOfResourceCmt } />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Form.Check id="projectOrganisationCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / comment"
                            checked={pri.projectOrganisationCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectOrganisationCmts}
                            value={pri.projectOrganisationCmtsCmt } />
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
                            checked={pri.equipmentTechnologySupplier }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.equipmentTechnologySupplier}
                            placeHolder={"yes/no : justification"}
                            value={pri.equipmentTechnologySupplierCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="majorProblemEncountered" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Major problem encountered on similar project"
                            checked={pri.majorProblemEncountered }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.majorProblemEncountered}
                            value={pri.majorProblemEncounteredCmt } />
                            </Form.Group>
                            
                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="qualifiedValidatedEquipment" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Qualified / validated equipment (yes or no)"
                            checked={pri.qualifiedValidatedEquipment }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.qualifiedValidatedEquipment}
                            placeHolder={"yes/no : justification"}
                            value={pri.qualifiedValidatedEquipmentCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="requirementsUtilitiesSpecification" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Requirements on utilities specification not fully covered (water specification …)"
                            checked={pri.requirementsUtilitiesSpecification }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requirementsUtilitiesSpecification}
                            value={pri.requirementsUtilitiesSpecificationCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="newImposedAssociates" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="New or imposed associates or contractors"
                            checked={pri.newImposedAssociates }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.newImposedAssociates}
                            value={pri.newImposedAssociatesCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="installatioProductRequireHazardous" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Installation or product may require hazardous waste disposal / recycling cost now or
                            in the future"
                            checked={pri.installatioProductRequireHazardous }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.installatioProductRequireHazardous}
                            value={pri.installatioProductRequireHazardousCmt } />
                            </Form.Group>

                        </Form.Row>


                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="innovationNewlyDeveloped" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Innovation and/or newly developed PPT"
                            checked={pri.innovationNewlyDeveloped }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.innovationNewlyDeveloped}
                            value={pri.innovationNewlyDevelopedCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="productsRawMaterials" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Products or raw materials may have negative impacts on health (e.g. carcinogenic)"
                            checked={pri.productsRawMaterials }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.productsRawMaterials}
                            value={pri.productsRawMaterialsCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>

                            <Form.Check id="projectUsingInnovativePpt" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Project using one or several innovative PPT"
                            checked={pri.projectUsingInnovativePpt }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.projectUsingInnovativePpt}
                            value={pri.projectUsingInnovativePptCmt } />
                            </Form.Group>

                        </Form.Row>

                         <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationHaveNegativeImpact" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Operation may have negative impact on the environment (e.g. air emissions, energy
                                consumption, liquid discharges)"
                            checked={pri.operationHaveNegativeImpact }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationHaveNegativeImpact}
                            value={pri.operationHaveNegativeImpactCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .066*window.innerHeight + 'px'}}/>
                            <Form.Check id="intellectualPropertyWatch" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Intellectual property watch"
                            checked={pri.intellectualPropertyWatch }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.intellectualPropertyWatch}
                            value={pri.intellectualPropertyWatchCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="riskAnalysisProject" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Risk analysis of the whole project (integration of risk analysis of subsystems)
                                    does not exist"
                            checked={pri.riskAnalysisProject }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.riskAnalysisProject}
                            value={pri.riskAnalysisProjectCmt } />
                            </Form.Group>

                        </Form.Row>

                         <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="lackMainEquipments" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Lack of references for main equipments or suppliers"
                            checked={pri.lackMainEquipments }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.lackMainEquipments}
                            value={pri.lackMainEquipmentsCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="previousRiskAnalysis" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Previous risk analysis"
                            checked={pri.previousRiskAnalysis }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.previousRiskAnalysis}
                            value={pri.previousRiskAnalysisCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="lackSimilarProcess" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Lack of experience with similar process / First application for subsidiary"
                            checked={pri.lackSimilarProcess }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.lackSimilarProcess}
                            value={pri.lackSimilarProcessCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Col md={{ offset:0 ,span:6}}>
                            <Form.Check id="processesProductsCmts"
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.processesProductsCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.processesProductsCmts}
                            value={pri.processesProductsCmtsCmt } />
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
                            checked={pri.customizedPlant }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.customizedPlant}
                            value={pri.customizedPlantCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="noOperatingExperienceSimilarProcess" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="No operating experience of similar process / equipment"
                            checked={pri.noOperatingExperienceSimilarProcess }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.noOperatingExperienceSimilarProcess}
                            value={pri.noOperatingExperienceSimilarProcessCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="newServiceBySubsidiary" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="New service offered by subsidiary (e.g. after-sales service, maintenance)"
                            checked={pri.newServiceBySubsidiary }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.newServiceBySubsidiary}
                            value={pri.newServiceBySubsidiaryCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialBackflow" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential backflow from the customer (leading to contamination, overpressure…)"
                            checked={pri.potentialBackflow }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialBackflow}
                            value={pri.potentialBackflowCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Col>
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="includeTransportationActivities" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Include transportation activities"
                            checked={pri.includeTransportationActivities }/>

                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Row>

                            <Col md={{offset:0,span:6}}>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.includeTransportationActivities}
                            value={pri.includeTransportationActivitiesCmt } />
                            </Col>

                            <Col md={{offset:0,span:6}}>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.includeTransportationActivitiesType}
                            value={pri.includeTransportationActivitiesType } />
                            </Col>
                            </Row>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="specialTraining" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Special training is required (e.g. for Electronics Specialty Gases)"
                            checked={pri.specialTraining }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.specialTraining}
                            value={pri.specialTrainingCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="operationDoneByCustomer" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Operation done by a customer , third-party , contractor"
                            checked={pri.operationDoneByCustomer }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationDoneByCustomer}
                            value={pri.operationDoneByCustomerCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .066*window.innerHeight + 'px'}}/>
                            <Form.Check id="unattendedFacility" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Unattended facility"
                            checked={pri.unattendedFacility }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.unattendedFacility}
                            value={pri.unattendedFacilityCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operatingWithoutDesign" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Operating conditions without design experience(e.g.filling hydrogen cylinders at
                                700 bars,oxygen cylinders at 300 bars)"
                            checked={pri.operatingWithoutDesign }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operatingWithoutDesign}
                            value={pri.operatingWithoutDesignCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="remoteFillingLines" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Remote filling lines are used between unloading point and filled storage tank"
                            checked={pri.remoteFillingLines }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.remoteFillingLines}
                            value={pri.remoteFillingLinesCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="operationCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.operationCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.operationCmts}
                            value={pri.operationCmtsCmt } />
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
                            checked={pri.notFullyDefined }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.notFullyDefined}
                            value={pri.notFullyDefinedCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="mandatoryCustomerStandards" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Mandatory customer standards to be followed"
                            checked={pri.mandatoryCustomerStandards }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.mandatoryCustomerStandards}
                            value={pri.mandatoryCustomerStandardsCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="technicalIssues"  style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Technical issues"
                            checked={pri.technicalIssues }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.technicalIssues}
                            value={pri.technicalIssuesCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="specificInsurance" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Specific insurance required by the customer"
                            checked={pri.specificInsurance }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.specificInsurance}
                            value={pri.specificInsuranceCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="contractualTargets" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Contractual targets for reliability, availability, safety, quality (e.g. food safety)"
                            checked={pri.contractualTargets }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.contractualTargets}
                            value={pri.contractualTargetsCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="requiredStudies" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Required studies for operational permits (fire fighting, lightning protection, ATEX …)"
                            checked={pri.requiredStudies }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requiredStudies}
                            value={pri.requiredStudiesCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="requiredStudiesReliability" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Required studies on reliability, availability, maintainability, safety"
                            checked={pri.requiredStudiesReliability }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.requiredStudiesReliability}
                            value={pri.requiredStudiesReliabilityCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="peakFlowRequirement" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Peak flow requirement if any; define the maximum duration & frequency of peak flow"
                            checked={pri.peakFlowRequirement }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.peakFlowRequirement}
                            value={pri.peakFlowRequirementCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>                            
                            <Form.Check id="safetyIntegrityLevel" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Safety Integrity Level (SIL) study required"
                            checked={pri.safetyIntegrityLevel }/>
                            <Row style={{height: .014*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.safetyIntegrityLevel}
                            value={pri.safetyIntegrityLevelCmt } />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Col md={{ offset:0 ,span:6}}>
                            <Form.Check id="processesProductsCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.processesProductsCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.processesProductsCmts}
                            value={pri.processesProductsCmtsCmt } />
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
                            checked={pri.regulatoryInformation }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.regulatoryInformation}
                            value={pri.regulatoryInformationCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="lackOfKnowledge" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Lack of knowledge of applicable safety / Environmental mandatory regulations"
                            checked={pri.lackOfKnowledge }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.lackOfKnowledge}
                            value={pri.lackOfKnowledgeCmt } />
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
                            checked={pri.environmentalImpactStudy }/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="societalRiskAnalysis" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Societal risk analysis"
                            checked={pri.societalRiskAnalysis }/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="explosiveAreaClassification" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Explosive area classification"
                            checked={pri.explosiveAreaClassification }/>
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="safetyHazardStudy" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Safety / Hazard study"
                            checked={pri.safetyHazardStudy }/>
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
                            checked={pri.oSHA }/>
                            </Col>

                            <Col md={3}>
                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Form.Check id="areaClassificationElectrical" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Area Classification / Electrical"
                            checked={pri.areaClassificationElectrical }/>
                            </Col>

                            <Col md={5}>
                            <Form.Check id="pressureVesselRegulation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Pressure vessel regulation"
                            checked={pri.pressureVesselRegulation }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.pressureVesselRegulation}
                            value={pri.pressureVesselRegulationCmt } />
                            </Col>

                       </Form.Row>
                       <Row style={{height: .02*window.innerHeight + 'px'}}/>
                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="transportationRegulation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Transportation regulation, please specify"
                            checked={pri.transportationRegulation }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.transportationRegulation}
                            value={pri.transportationRegulationCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="electricalEquipmentEegulation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Electrical equipment regulation"
                            checked={pri.electricalEquipmentEegulation }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.electricalEquipmentEegulation}
                            value={pri.electricalEquipmentEegulationCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="otherRegulation" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other regulation"
                            checked={pri.otherRegulation }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.otherRegulation}
                            value={pri.otherRegulationCmt } />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="softwareProcessControl" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Software / Process Control devices (e.g. SIL level)"
                            checked={pri.softwareProcessControl }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.softwareProcessControl}
                            value={pri.softwareProcessControlCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="otherApplicablePermits" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="List other applicable permits"
                            checked={pri.otherApplicablePermits }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.otherApplicablePermits}
                            value={pri.otherApplicablePermitsCmt } />
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
                            checked={pri.corporateImage }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.corporateImage}
                            value={pri.corporateImageCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="financialLoss" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Financial loss"
                            checked={pri.financialLoss }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.financialLoss}
                            value={pri.financialLossCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnCustomer" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Impact on customer"
                            checked={pri.impactOnCustomer }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnCustomer}
                            value={pri.impactOnCustomerCmt } />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnAL" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Impact on other AL business lines"
                            checked={pri.impactOnAL }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnAL}
                            placeHolder={"please specify ..."}
                            value={pri.impactOnALCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="impactOnStrategic" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Impact on strategic customers"
                            checked={pri.impactOnStrategic }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.impactOnStrategic}
                            value={pri.impactOnStrategicCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="contractualPenalties" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Contractual penalties"
                            checked={pri.contractualPenalties }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.contractualPenalties}
                            value={pri.contractualPenaltiesCmt } />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>
                            <Col md={{span:6}}>
                            <Form.Check id="consequencesCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Other / Comments"
                            checked={pri.consequencesCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.consequencesCmts}
                            value={pri.consequencesCmtsCmt } />
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
                            checked={pri.technicalInspection }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.technicalInspection}
                            value={pri.technicalInspectionCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="significantDiscrepanciesAL" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Significant discrepancies with AL standards"
                            checked={pri.significantDiscrepanciesAL }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.significantDiscrepanciesAL}
                            value={pri.significantDiscrepanciesALCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialNonComplianceSafety" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential non-compliance with applicable safety regulations"
                            checked={pri.potentialNonComplianceSafety }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialNonComplianceSafety}
                            value={pri.potentialNonComplianceSafetyCmt } />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialIssueCompetencies" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential issue with competencies/qualification of personnel"
                            checked={pri.potentialIssueCompetencies }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialIssueCompetencies}
                            value={pri.potentialIssueCompetenciesCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="obsoleteEquipment" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Obsolete equipment"
                            checked={pri.obsoleteEquipment }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.obsoleteEquipment}
                            value={pri.obsoleteEquipmentCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Row style={{height: .033*window.innerHeight + 'px'}}/>
                            <Form.Check id="facilityAge" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Facility age"
                            checked={pri.facilityAge }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.facilityAge}
                            value={pri.facilityAgeCmt } />
                            </Form.Group>

                       </Form.Row>

                       <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Check id="potentialNonComplianceEnvironmental" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Potential non-compliance with applicable environmental regulations"
                            checked={pri.potentialNonComplianceEnvironmental }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.potentialNonComplianceEnvironmental}
                            value={pri.potentialNonComplianceEnvironmentalCmt } />
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="acquisitionCmts" style={{fontWeight:"bold"}}
                            custom={true}
                            inline={true}
                            label="Others"
                            checked={pri.acquisitionCmts }/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.acquisitionCmts}
                            value={pri.acquisitionCmtsCmt } />
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
