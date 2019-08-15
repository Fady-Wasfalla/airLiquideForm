import React, { Component } from "react";
import { Form , Col , Row , Card, FormControl , InputGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


class customerInstallationForm extends Component {

    state = {
        //Product Type Options dropdown list ... you have to change both value and label with the same name
        ProductTypeOptions : [
            { value: 'Product 1', label: 'Product 1' },
            { value: 'Product 2', label: 'Product 2' },
            { value: 'Product 3', label: 'Product 3' },
          ],
        ProductSelectedOption : "",

        ApplicationProduct:"",

        //Required Phase Type Options dropdown list ... you have to change both value and label with the same name
        RequiredPhaseTypeOptions : [
            { value: 'RequiredPhase 1', label: 'RequiredPhase 1' },
            { value: 'RequiredPhase 2', label: 'RequiredPhase 2' },
            { value: 'RequiredPhase 3', label: 'RequiredPhase 3' },
          ],
          RequiredPhaseSelectedOption : "", 

        //Flow Unit Type Options dropdown list ... you have to change both value and label with the same name
        FlowUnitTypeOptions : [
            { value: 'FlowUnit 1', label: 'FlowUnit 1' },
            { value: 'FlowUnit 2', label: 'FlowUnit 2' },
            { value: 'FlowUnit 3', label: 'FlowUnit 3' },
          ],
        FlowUnitSelectedOption : "",

        AverageFlowRateValue:0,
        AveragePressure:0,
        AverageDuration:0,

        MaximumFlowRrateValue:0 ,
        MaximumPressure:0,

        MaximumDurationUnitTypeOptions : [
            { value: 'Minutes', label: 'Minutes' },
            { value: 'Hours', label: 'Hours' },
          ],
        MaximumDurationUnitSelectedOption : "",
        MaximumDurationValue:0 ,
        RepetitionPerDay:0  ,

        FutureExpansionNotes:"",
        
      }

      ProductHandleChange = ProductSelectedOption => {
        this.setState({ ProductSelectedOption });
        console.log(ProductSelectedOption)
      };

      RequiredPhaseHandleChange = RequiredPhaseSelectedOption => {
        this.setState({ RequiredPhaseSelectedOption });
        console.log(RequiredPhaseSelectedOption)
      };

      FlowUnitHandleChange = FlowUnitSelectedOption => {
        this.setState({ FlowUnitSelectedOption });
        console.log(FlowUnitSelectedOption)
      };

      MaximumDurationUnitHandleChange = MaximumDurationUnitSelectedOption => {
        this.setState({ MaximumDurationUnitSelectedOption });
        console.log(MaximumDurationUnitSelectedOption)
      };
     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Customer Installation Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                    <Form>

                    <Form.Row >
                            <Form.Group as={Col} controlId="ProductType" >
                            <Form.Label>Product</Form.Label>
                            <Select
                            value={this.state.ProductSelectedOption}
                            onChange={this.ProductHandleChange}
                            options={this.state.ProductTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="ApplicationProduct">
                            <Form.Label>Application Product</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({ApplicationProduct:e.target.value})}} />
                            </Form.Group>
                        

                            
                        </Form.Row>

                    <Form.Row>

                            <Form.Group as={Col} controlId="RequiredPhase" >
                            <Form.Label>Required Phase</Form.Label>
                            <Select
                            value={this.state.RequiredPhaseSelectedOption}
                            onChange={this.RequiredPhaseHandleChange}
                            options={this.state.RequiredPhaseTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="FlowUnit" >
                            <Form.Label>Flow Unit</Form.Label>
                            <Select
                            value={this.state.FlowUnitSelectedOption}
                            onChange={this.FlowUnitHandleChange}
                            options={this.state.FlowUnitTypeOptions}
                            />
                            </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        
                         <Form.Group as={Col} controlId="AverageFlowRateValue">
                            <Form.Label>Average Flow Rate Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({AverageFlowRateValue:e.target.value})}} />
                        </Form.Group>

                         <Form.Group as={Col} controlId="AveragePressure">
                            <Form.Label>Average Pressure</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({AveragePressure:e.target.value})}} />
                        </Form.Group>

                            <Form.Group as={Col} controlId="AverageDuration" >
                            <Form.Label>Average Duration</Form.Label>
                            <InputGroup >
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({AverageDuration:e.target.value})}} />
                            <InputGroup.Text id="basic-addon2">Hrs/Day</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            
                    </Form.Row>


                    <Form.Row>

                         <Form.Group as={Col} controlId="MaximumFlowRrateValue">
                            <Form.Label>Maximum Flow Rrate Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({MaximumFlowRrateValue:e.target.value})}} />
                        </Form.Group>

                         <Form.Group as={Col} controlId="MaximumPressure">
                            <Form.Label>Maximum Pressure</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({MaximumPressure:e.target.value})}} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="MaximumDurationUnit" >
                            <Form.Label>Maximum Duration Unit</Form.Label>
                            <Select
                            value={this.state.MaximumDurationUnitSelectedOption}
                            onChange={this.MaximumDurationUnitHandleChange}
                            options={this.state.MaximumDurationUnitTypeOptions}
                            />
                        </Form.Group>
                
                        <Form.Group as={Col} controlId="MaximumDurationValue">
                            <Form.Label>Maximum Duration Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({MaximumDurationValue:e.target.value})}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="RepetitionPerDay">
                            <Form.Label>Repetition/Day</Form.Label>
                            <FormControl type={"number"}  onChange={(e)=>{this.setState({RepetitionPerDay:e.target.value})}} />
                        </Form.Group>
                        

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="FutureExpansionNotes">
                            <Form.Label>Future Expansion Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({FutureExpansionNotes:e.target.value})}} />
                        </Form.Group>
                    </Form.Row>
                        
                        
                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default customerInstallationForm;
