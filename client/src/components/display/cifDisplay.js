import React, { Component } from "react";
import { Form , Col , Row , Card, FormControl , InputGroup , Collapse , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


class cifDisplay extends Component {

    state = {
        open:false,
      }

      
      render() {
        let cif = this.props.CIF
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Customer Installation Form</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                }}>☰</Button>
                 </Row>
                 </Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <Collapse in={this.state.open}>
                    <Form>
                    
                    <Card border="secondary">
                    <Col md={12}>
                      <br/>
                    <Form.Row >
                            <Form.Group as={Col}   controlId="ProductType" >
                            <Form.Label style={{fontWeight:"bold"}} >Product :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.product}</Form.Label>

                            </Form.Group>

                            <Form.Group as={Col} controlId="applicationProduct">
                            <Form.Label style={{fontWeight:"bold"}}>Application Product :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.applicationProduct}</Form.Label>

                            </Form.Group>
                            
                            <Form.Group as={Col}/>

                            
                        </Form.Row>

                    <Form.Row>

                            <Form.Group as={Col} controlId="RequiredPhase" >
                            <Form.Label style={{fontWeight:"bold"}}>Required Phase :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.requiredPhase}</Form.Label>

                            </Form.Group>

                            <Form.Group as={Col} controlId="FlowUnit" >
                            <Form.Label style={{fontWeight:"bold"}} >Flow Unit :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.flowUnit}</Form.Label>

                            </Form.Group>

                            <Form.Group as={Col}/>

                    </Form.Row>

                    <Form.Row>
                        
                         <Form.Group as={Col} controlId="averageFlowRateValue">
                            <Form.Label style={{fontWeight:"bold"}}>Average Flow Rate Value :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.averageFlowRateValue}</Form.Label>
                        </Form.Group>

                         <Form.Group as={Col} controlId="averagePressure">
                            <Form.Label style={{fontWeight:"bold"}} >Pressure :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.averagePressure}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="averageDuration" >
                            <Form.Label style={{fontWeight:"bold"}} >Average Duration :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.averageDuration}<span>{'      '}</span> Hrs/Day</Form.Label>

                        </Form.Group>

                    </Form.Row>
                    </Col>
                    </Card>

                    <br/>
                    <Card border="secondary">   
                    <Col md={12}>
                      <br/>                 
                    <Form.Row>

                         <Form.Group as={Col} controlId="maximumFlowRrateValue">
                            <Form.Label style={{fontWeight:"bold"}} >Maximum Flow Rrate Value :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.maximumFlowRrateValue}</Form.Label>
                        </Form.Group>

                         <Form.Group as={Col} controlId="maximumPressure">
                            <Form.Label style={{fontWeight:"bold"}}>Pressure of maximum Flow :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.maximumPressure}</Form.Label>
                        </Form.Group>
                        
                        <Form.Group as={Col}/>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="MaximumDurationUnit" >
                            <Form.Label style={{fontWeight:"bold"}}>Duration Unit :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.maximumDurationUnit}</Form.Label>

                        </Form.Group>
                
                        <Form.Group as={Col} controlId="maximumDurationValue">
                            <Form.Label style={{fontWeight:"bold"}}>Duration Value :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.maximumDurationValue}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="repetitionPerDay">
                            <Form.Label style={{fontWeight:"bold"}}>Repetition/Day :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.repetitionPerDay}</Form.Label>
                        </Form.Group>
                        

                    </Form.Row>
                    </Col>
                    </Card>
                    <br/>

                    <Form.Row>
                        <Form.Group as={Col} controlId="futureExpansionNotes">
                            <Form.Label style={{fontWeight:"bold"}}>Future Expansion Notes :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{cif.futureExpansionNotes}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <br/>
                    </Form>
                </Collapse>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default cifDisplay;
