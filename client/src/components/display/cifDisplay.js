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

                    <Form.Row >
                            <Form.Group as={Col}   controlId="ProductType" >
                            <Form.Label style={{fontWeight:"bold"}} >Product</Form.Label>
                            <Card.Text>{cif.product}</Card.Text>

                            </Form.Group>

                            <Form.Group as={Col} controlId="applicationProduct">
                            <Form.Label style={{fontWeight:"bold"}}>Application Product</Form.Label>
                            <Card.Text>{cif.applicationProduct}</Card.Text>

                            </Form.Group>
                        

                            
                        </Form.Row>

                    <Form.Row>

                            <Form.Group as={Col} controlId="RequiredPhase" >
                            <Form.Label style={{fontWeight:"bold"}}>Required Phase</Form.Label>
                            <Card.Text>{cif.requiredPhase}</Card.Text>

                            </Form.Group>

                            <Form.Group as={Col} controlId="FlowUnit" >
                            <Form.Label style={{fontWeight:"bold"}} >Flow Unit</Form.Label>
                            <Card.Text>{cif.flowUnit}</Card.Text>

                            </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        
                         <Form.Group as={Col} controlId="averageFlowRateValue">
                            <Form.Label style={{fontWeight:"bold"}}>Average Flow Rate Value</Form.Label>
                            <Card.Text>{cif.averageFlowRateValue}</Card.Text>
                        </Form.Group>

                         <Form.Group as={Col} controlId="averagePressure">
                            <Form.Label style={{fontWeight:"bold"}} >Average Pressure</Form.Label>
                            <Card.Text>{cif.averagePressure}</Card.Text>
                        </Form.Group>

                            <Form.Group as={Col} controlId="averageDuration" >
                            <Form.Label style={{fontWeight:"bold"}} >Average Duration</Form.Label>
                            <Card.Text>{cif.averageDuration}</Card.Text>

                            </Form.Group>

                            
                    </Form.Row>


                    <Form.Row>

                         <Form.Group as={Col} controlId="maximumFlowRrateValue">
                            <Form.Label style={{fontWeight:"bold"}} >Maximum Flow Rrate Value</Form.Label>
                            <Card.Text>{cif.maximumFlowRrateValue}</Card.Text>
                        </Form.Group>

                         <Form.Group as={Col} controlId="maximumPressure">
                            <Form.Label style={{fontWeight:"bold"}}>Maximum Pressure</Form.Label>
                            <Card.Text>{cif.maximumPressure}</Card.Text>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="MaximumDurationUnit" >
                            <Form.Label style={{fontWeight:"bold"}}>Maximum Duration Unit</Form.Label>
                            <Card.Text>{cif.maximumDurationUnit}</Card.Text>

                        </Form.Group>
                
                        <Form.Group as={Col} controlId="maximumDurationValue">
                            <Form.Label style={{fontWeight:"bold"}}>Maximum Duration Value</Form.Label>
                            <Card.Text>{cif.maximumDurationValue}</Card.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="repetitionPerDay">
                            <Form.Label style={{fontWeight:"bold"}}>Repetition/Day</Form.Label>
                            <Card.Text>{cif.repetitionPerDay}</Card.Text>
                        </Form.Group>
                        

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="futureExpansionNotes">
                            <Form.Label style={{fontWeight:"bold"}}>Future Expansion Notes</Form.Label>
                            <Card.Text>{cif.futureExpansionNotes}</Card.Text>
                        </Form.Group>
                    </Form.Row>
                        
                        
                    </Form>
                </Collapse>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default cifDisplay;
