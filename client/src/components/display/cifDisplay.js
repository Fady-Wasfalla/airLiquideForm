import React, { Component } from "react";
import { Form , Col , Row , Card, FormControl , InputGroup , Collapse , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


class cifDisplay extends Component {

    state = {
        //Product Type Options dropdown list ... you have to change both value and label with the same name
        ProductTypeOptions : [
            { value: 'Product 1', label: 'Product 1' },
            { value: 'Product 2', label: 'Product 2' },
            { value: 'Product 3', label: 'Product 3' },
          ],
        product : "",

        applicationProduct:"",

        //Required Phase Type Options dropdown list ... you have to change both value and label with the same name
        RequiredPhaseTypeOptions : [
            { value: 'RequiredPhase 1', label: 'RequiredPhase 1' },
            { value: 'RequiredPhase 2', label: 'RequiredPhase 2' },
            { value: 'RequiredPhase 3', label: 'RequiredPhase 3' },
          ],
          requiredPhase : "", 

        //Flow Unit Type Options dropdown list ... you have to change both value and label with the same name
        FlowUnitTypeOptions : [
            { value: 'FlowUnit 1', label: 'FlowUnit 1' },
            { value: 'FlowUnit 2', label: 'FlowUnit 2' },
            { value: 'FlowUnit 3', label: 'FlowUnit 3' },
          ],
        flowUnit : "",

        averageFlowRateValue:0,
        averagePressure:0,
        averageDuration:0,

        maximumFlowRrateValue:0 ,
        maximumPressure:0,

        MaximumDurationUnitTypeOptions : [
            { value: 'Minutes', label: 'Minutes' },
            { value: 'Hours', label: 'Hours' },
          ],
        maximumDurationUnit : "",
        maximumDurationValue:0 ,
        repetitionPerDay:0  ,

        futureExpansionNotes:"",

        open:false,
        
      }

      ProductHandleChange = product => {
        this.setState({ product });
        console.log(product)
      };

      RequiredPhaseHandleChange = requiredPhase => {
        this.setState({ requiredPhase });
        console.log(requiredPhase)
      };

      FlowUnitHandleChange = flowUnit => {
        this.setState({ flowUnit });
        console.log(flowUnit)
      };

      MaximumDurationUnitHandleChange = maximumDurationUnit => {
        this.setState({ maximumDurationUnit });
        console.log(maximumDurationUnit)
      };
     
      render() {
        let cif
        if (this.props.CIF === null)
          cif = {}
        else 
          cif = this.props.CIF
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
                            <Form.Group as={Col} style={{fontWeight:"bold"}}  controlId="ProductType" >
                            <Form.Label>Product</Form.Label>
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
