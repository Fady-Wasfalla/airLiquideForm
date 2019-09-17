import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";



class pdiDisplay extends Component {
    
    state = {

    }

    getRequire=(e)=>{
        if (e===true){
            return "Accepted ✔"
        }
        if (e===false){
            return "Not Accepted ✘"
        }
    }

    showTimeOnly = (e) =>{
        if (e){
        let time=e.slice(11,e.length-2)
        return time
        }
    }
    render() {
        let pdiDataChange = this.props.Data
        let pdiData = Object.assign([{}],pdiDataChange)
        let fireExtChange = this.props.FireExt
        let fireExt = Object.assign([{}],fireExtChange)
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Pre-delivery Identification Report</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>1. Electrical plug compatibility</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text 
                            style={{ fontSize:"16px"}}>{this.getRequire(pdiData.highwayEnterance)}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>2. Connections compatibility</Form.Label>
                            <Col md={{span:1}}/>
                                <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.areaFlat)}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>3. Safety vslves / Rupture disc / Three way valve</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.areaType)}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>4. Tank condition</Form.Label>                           
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{offset:1,span:10}}>
                            <Form.Control as="textarea" rows="3" value={pdiData.dischargePointCmt} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>5. Outside road (Site entrance and exit)</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.carExit)}</Form.Text>                                                        
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> 6. Gates width  </Form.Label>
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" value={pdiData.carGoBackSafetyProcedure} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>7. Road to the tank location </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.tankCapacity)}</Form.Text>                            
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>8. Lighting</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.vaccumFlushing)}</Form.Text>                            
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>9. Is backing required ?</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.suitableElectricity)}</Form.Text>                             
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> 10. Backing distance - Extra precautions for backing  </Form.Label>
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{offset:1,span:10}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" value={pdiData.adequateLightCmt} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Time to supply </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{pdiData.supplyTime}</Form.Text>                            
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:2}}>
                            <Form.Label style={{fontWeight:"bold"}}>From</Form.Label>
                            <br/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.showTimeOnly(pdiData.supplyTimeFrom)}</Form.Text>                           
                            </Col>
                            <Col md={{offset:1}}>
                            <Form.Label style={{fontWeight:"bold"}}>To</Form.Label>
                            <br/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.showTimeOnly(pdiData.supplyTimeTo)}</Form.Text>                           
                            </Col>
                            <Col md={6}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" value={pdiData.supplyTimeCmt} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>
                        
                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Are there any fire extinguishers around the tank ? </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(pdiData.fireExtinguishers)}</Form.Text>
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" value={pdiData.fireExtinguishersMP} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" value={pdiData.fireExtinguishersCmt} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Row><br/></Row>
                        </Form.Row>
                                        <Form.Row>
                                            <Col md={2}>
                                                <Form.Label style={{fontWeight:"bold"}}>Number of Fire Extinguishersre </Form.Label>                                                                
                                            </Col>

                                            <Col md={3}>
                                                <Form.Label style={{fontWeight:"bold"}}>Capacity</Form.Label>                                                                
                                            </Col>
                                        </Form.Row>
            

                            { fireExt.map((e,index)=>{
                            return(
                                        <Form.Row>
                                            <Col md={{span:2}}>
                                                <Form.Label >{index+1}{")"}{fireExt[index].number}</Form.Label>                                                                
                                            </Col>

                                            <Col md={{span:3}}>
                                                <Form.Label >{fireExt[index].capacity}</Form.Label>                                                                
                                            </Col>
                                        </Form.Row>
                            )
                        })}
                        

                        <Row style={{height: .01*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Col md={6}>
                            <Form.Label style={{fontWeight:"bold"}}>Type of vehicle suitable for service :</Form.Label>
                            <Form.Text style={{ fontSize:"16px"}}>{pdiData.vehicleType}</Form.Text>                            
                            </Col>
                        </Form.Row>

                        <Row style={{height: .015*window.innerHeight + 'px'}}/>
                        <Form.Row>
                        <Form.Group as={Col} controlId="inspector">
                            <Form.Label style={{fontWeight:"bold"}}> Inspector : </Form.Label>
                            <Form.Text style={{ fontSize:"16px"}}>{pdiData.inspector}</Form.Text>                           
                            
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}> Approver : </Form.Label>
                            <Form.Text style={{ fontSize:"16px"}}>{pdiData.approver}</Form.Text>
                        </Form.Group>
                        </Form.Row>

                    
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default pdiDisplay;
