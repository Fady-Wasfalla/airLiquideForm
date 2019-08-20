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
                            <Form.Group as={Col} controlId="ProductType" >
                            <Form.Label>Product</Form.Label>
                            <Select
                            value={this.state.product}
                            onChange={this.ProductHandleChange}
                            options={this.state.ProductTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="applicationProduct">
                            <Form.Label>Application Product</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({applicationProduct:e.target.value})}} />
                            </Form.Group>
                        

                            
                        </Form.Row>

                    <Form.Row>

                            <Form.Group as={Col} controlId="RequiredPhase" >
                            <Form.Label>Required Phase</Form.Label>
                            <Select
                            value={this.state.requiredPhase}
                            onChange={this.RequiredPhaseHandleChange}
                            options={this.state.RequiredPhaseTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="FlowUnit" >
                            <Form.Label>Flow Unit</Form.Label>
                            <Select
                            value={this.state.flowUnit}
                            onChange={this.FlowUnitHandleChange}
                            options={this.state.FlowUnitTypeOptions}
                            />
                            </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        
                         <Form.Group as={Col} controlId="averageFlowRateValue">
                            <Form.Label>Average Flow Rate Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({averageFlowRateValue:e.target.value})}} />
                        </Form.Group>

                         <Form.Group as={Col} controlId="averagePressure">
                            <Form.Label>Average Pressure</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({averagePressure:e.target.value})}} />
                        </Form.Group>

                            <Form.Group as={Col} controlId="averageDuration" >
                            <Form.Label>Average Duration</Form.Label>
                            <InputGroup >
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({averageDuration:e.target.value})}} />
                            <InputGroup.Text id="basic-addon2">Hrs/Day</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            
                    </Form.Row>


                    <Form.Row>

                         <Form.Group as={Col} controlId="maximumFlowRrateValue">
                            <Form.Label>Maximum Flow Rrate Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumFlowRrateValue:e.target.value})}} />
                        </Form.Group>

                         <Form.Group as={Col} controlId="maximumPressure">
                            <Form.Label>Maximum Pressure</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumPressure:e.target.value})}} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="MaximumDurationUnit" >
                            <Form.Label>Maximum Duration Unit</Form.Label>
                            <Select
                            value={this.state.maximumDurationUnit}
                            onChange={this.MaximumDurationUnitHandleChange}
                            options={this.state.MaximumDurationUnitTypeOptions}
                            />
                        </Form.Group>
                
                        <Form.Group as={Col} controlId="maximumDurationValue">
                            <Form.Label>Maximum Duration Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumDurationValue:e.target.value})}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="repetitionPerDay">
                            <Form.Label>Repetition/Day</Form.Label>
                            <FormControl type={"number"}  onChange={(e)=>{this.setState({repetitionPerDay:e.target.value})}} />
                        </Form.Group>
                        

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="futureExpansionNotes">
                            <Form.Label>Future Expansion Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({futureExpansionNotes:e.target.value})}} />
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
