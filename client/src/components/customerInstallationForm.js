import React, { Component } from "react";
import { Form , Col , Row , Card, FormControl , InputGroup ,Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


class customerInstallationForm extends Component {

    state = {
        //Product Type Options dropdown list ... you have to change both value and label with the same name
        ProductTypeOptions : [
          { value: 'Lox', label: 'Lox' },
          { value: 'Lin', label: 'Lin' },
          { value: 'Lar', label: 'Lar' },
          { value: 'LCo2', label: 'LCo2' },
          ],
        product : "",

        applicationProduct:"",

        //Required Phase Type Options dropdown list ... you have to change both value and label with the same name
        RequiredPhaseTypeOptions : [
            { value: 'Gas', label: 'Gas' },
            { value: 'Liquid', label: 'Liquid' },
          ],
          requiredPhase : "", 

        //Flow Unit Type Options dropdown list ... you have to change both value and label with the same name
        FlowUnitTypeOptions : [
            { value: 'Nmᵌ/hr', label: 'Nmᵌ/hr' },
            { value: 'kg/hr', label: 'kg/hr' },
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

        fieldset:"",
        dodo:true,
        done:"✘",
        
      }

      ProductHandleChange = (product) => {
        this.setState({ product:product.value });
      };

      RequiredPhaseHandleChange = (requiredPhase) => {
        this.setState({ requiredPhase:requiredPhase.value });
      };

      FlowUnitHandleChange = (flowUnit) => {
        this.setState({ flowUnit:flowUnit.value });
      };

      MaximumDurationUnitHandleChange = (maximumDurationUnit) => {
        this.setState({ maximumDurationUnit:maximumDurationUnit.value });
      };
     
      sendData =()=>{
        let sentData = Object.assign({},this.state)
        delete sentData.ProductTypeOptions
        delete sentData.RequiredPhaseTypeOptions
        delete sentData.FlowUnitTypeOptions
        delete sentData.MaximumDurationUnitTypeOptions
        delete sentData.fieldset
        this.props.ParentCallBack(sentData)
      }

      submitData=(event)=>{
        this.setState({dodo:!this.state.dodo})
        event.preventDefault();
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled",
                           done:"✔" })
        }
        else{
            this.setState({fieldset:"",
                           done:"✘" })
        }
    }

     submissionColor=(e)=>{
        if (e==="✔"){
            return "green"
        }else{
            return "red"
        }
    }

      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Form onSubmit={this.submitData}>
                <Form>
                <Card.Header as="h5" className="bg-dark text-white" >Customer Installation Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>

                    <Card border="secondary">
                    <Col md={12}>
                      <br/>
                    <Form.Row >
                            <Form.Group as={Col} controlId="ProductType" >
                            <Form.Label>Product</Form.Label>
                            <Select 
                            value={this.state.product.value}
                            onChange={this.ProductHandleChange}
                            options={this.state.ProductTypeOptions}
                            defaultValue={this.state.ProductTypeOptions[0]}
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
                            value={this.state.requiredPhase.value}
                            onChange={this.RequiredPhaseHandleChange}
                            options={this.state.RequiredPhaseTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="FlowUnit" >
                            <Form.Label>Flow Unit</Form.Label>
                            <Select
                            value={this.state.flowUnit.value}
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
                            <Form.Label>Pressure</Form.Label>
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

                    </Col>
                    </Card>
                    <br/>

                    <Card border="secondary">
                    <Col md={12}>
                    <br/>
                    <Form.Row>

                         <Form.Group as={Col} controlId="maximumFlowRrateValue">
                            <Form.Label>Maximum Flow Rrate Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumFlowRrateValue:e.target.value})}} />
                        </Form.Group>

                         <Form.Group as={Col} controlId="maximumPressure">
                            <Form.Label>Pressure of maximum Flow</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumPressure:e.target.value})}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="MaximumDurationUnit" >
                            <Form.Label>Duration Unit</Form.Label>
                            <Select
                            value={this.state.maximumDurationUnit.value}
                            onChange={this.MaximumDurationUnitHandleChange}
                            options={this.state.MaximumDurationUnitTypeOptions}
                            />
                        </Form.Group>
                
                        <Form.Group as={Col} controlId="maximumDurationValue">
                            <Form.Label>Duration Value</Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumDurationValue:e.target.value})}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="repetitionPerDay">
                            <Form.Label>Repetition/Day</Form.Label>
                            <FormControl type={"number"}  onChange={(e)=>{this.setState({repetitionPerDay:e.target.value})}} />
                        </Form.Group>
                        

                    </Form.Row>

                    </Col>
                    </Card>
                    <br/>

                    <Form.Row>
                        <Form.Group as={Col} controlId="futureExpansionNotes">
                            <Form.Label>Future Expansion Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({futureExpansionNotes:e.target.value})}} />
                        </Form.Group>
                    </Form.Row>
                        
                        
                  </fieldset>
                </Col>
                <Card.Footer > 
                            <Col md={{offset:5}} >
                            <Button type="submit" variant="outline" style={{color:this.submissionColor(this.state.done)}}>Check if done {this.state.done}</Button>
                            </Col> 
                            
                </Card.Footer>
                </Form>
                </Form>
                </Card>
            </React.Fragment>
        )
      }

}


export default customerInstallationForm;
