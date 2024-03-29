import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import Select from 'react-select';
import TimePicker from "react-time-picker"
import FireExtinguishers from './fireExtinguishers'
import "react-datepicker/dist/react-datepicker.css";



class predeliveryIdentificationReport extends Component {
    
    state = {
        highwayEnterance:false ,
        highwayEnteranceMP:"" ,
        highwayEnteranceCmt:"" ,
        
        areaFlat:false ,
        areaFlatMP:"" ,
        areaFlatCmt:"" ,

        areaType:false ,
        areaTypeMP:"" ,
        areaTypeCmt:"" ,

        dischargePoint:false ,
        dischargePointMP:"" ,
        dischargePointCmt:"" ,

        carExit:false ,
        carExitMP:"" ,
        carExitCmt:"" ,

        carGoBack:false,
        carGoBackDistance:0 ,
        carGoBackSafetyProcedure:"" ,

        tankCapacity:false ,
        tankCapacityMP:"" ,
        tankCapacityCmt:"" ,
        tankCapacitySize:0 ,

        vaccumFlushing:false ,
        vaccumFlushingMP:"" ,
        vaccumFlushingCmt:"" ,

        suitableElectricity:false ,
        suitableElectricityMP:"" ,
        suitableElectricityCmt:"" ,

        adequateLight:false ,
        adequateLightMP:"" ,
        adequateLightCmt:"" ,

        supplyTime:"" , /* morning , night , all day */
        supplyTimeFrom:'00:00' ,
        supplyTimeTo:'00:00' ,
        supplyTimeCmt:"",

        fireExtinguishers:false ,
        fireExtinguishersMP:"" ,
        fireExtinguishersCmt:"" ,
        fireExtinguishersList:{},
        
        areaObstacles:false ,
        areaObstaclesMP:"" ,
        areaObstaclesCmt:"" ,
        
        //Vehicle Type Options dropdown list ... you have to change both value and label with the same name
        vehicleTypeOptions : [
            { value: 'Road Tanker', label: 'Road Tanker' },
            { value: 'Mobile Tank', label: 'Mobile Tank' },
            { value: 'Cylinders', label: 'Cylinders' },
          ],
        vehicleType : "",

        inspector:"" ,
        approver:"" ,
        

        fieldset:"",
        done:"✘",
        dodo:true

    }

    handleChange = () =>{
    }

    supplyTimeFromHandleChange = supplyTimeFrom => this.setState({ supplyTimeFrom })
    supplyTimeToHandleChange = supplyTimeTo => this.setState({ supplyTimeTo })

    vehicleTypeHandleChange = (vehicleType) => {
        this.setState({ vehicleType:vehicleType.value });
      };


    sendData=()=>{
        let sentData = Object.assign({},this.state)
        delete sentData.vehicleTypeOptions
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
      
    fireExtinguishersCallBackFunction = (childData) => {
        this.setState({fireExtinguishersList:childData})
    }

      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Form onSubmit={this.submitData}>
                <Card.Header as="h5" className="bg-dark text-white" >Pre-delivery Identification Report</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>                
                    

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>1. Electrical plug compatibility</Form.Label>
                            <Col md={{offset:1,span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true} 
                                name="highwayEnterance" id="highwayEnterance1"
                                onClick={(e) =>{this.setState({highwayEnterance:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="highwayEnterance"id="highwayEnterance0"
                                onClick={(e) =>{this.setState({highwayEnterance:e.target.value})}} /> 
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
                            <Col md={{offset:1,span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="areaFlat" id="areaFlat1"
                                onClick={(e) =>{this.setState({areaFlat:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="areaFlat"id="areaFlat0"
                                onClick={(e) =>{this.setState({areaFlat:e.target.value})}} /> 
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
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="areaType" id="areaType1"
                                onClick={(e) =>{this.setState({areaType:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="areaType"id="areaType0"
                                onClick={(e) =>{this.setState({areaType:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>4. Tank condition </Form.Label>
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{offset:1,span:10}}>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({dischargePointCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>5. Outside road (Site entrance and exit) </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="carExit" id="carExit1"
                                onClick={(e) =>{this.setState({carExit:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="carExit"id="carExit0"
                                onClick={(e) =>{this.setState({carExit:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> 6. Gates width </Form.Label>
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{offset:1,span:10}}>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({carGoBackSafetyProcedure:e.target.value})}} />
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
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="tankCapacity" id="tankCapacity1"
                                onClick={(e) =>{this.setState({tankCapacity:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="tankCapacity"id="tankCapacity0"
                                onClick={(e) =>{this.setState({tankCapacity:e.target.value})}} /> 
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
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="vaccumFlushing" id="vaccumFlushing1"
                                onClick={(e) =>{this.setState({vaccumFlushing:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="vaccumFlushing"id="vaccumFlushing0"
                                onClick={(e) =>{this.setState({vaccumFlushing:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>9. Is backing required ? </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="suitableElectricity" id="suitableElectricity1"
                                onClick={(e) =>{this.setState({suitableElectricity:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="suitableElectricity"id="suitableElectricity0"
                                onClick={(e) =>{this.setState({suitableElectricity:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>10. Backing distance - Extra precautions for backing </Form.Label>
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{offset:1,span:10}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({adequateLightCmt:e.target.value})}} />
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
                            <Form.Check type="radio" custom={true} label="Morning" value={"Morning"}
                                name="supplyTime" id="supplyTime0"
                                onClick={(e) =>{this.setState({supplyTime:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Night" value={"Night"}
                                name="supplyTime"id="supplyTime1"
                                onClick={(e) =>{this.setState({supplyTime:e.target.value})}} /> 
                            <Col md={{span:1}}/>                            
                            <Form.Check type="radio" custom={true} label="All Day" value={"All Day"}
                                name="supplyTime"id="supplyTime2"
                                onClick={(e) =>{this.setState({supplyTime:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:1}}>
                            <Form.Label>From</Form.Label>
                            <br/>
                            <TimePicker
                                    onChange={this.supplyTimeFromHandleChange}
                                    value={this.state.supplyTimeFrom}
                                    />
                            </Col>
                            <Col md={{offset:1}}>
                            <Form.Label>To</Form.Label>
                            <br/>
                            <TimePicker disapled="none"
                                    onChange={this.supplyTimeToHandleChange}
                                    value={this.state.supplyTimeTo}
                                    />
                            </Col>
                            <Col md={6}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({supplyTimeCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>
                        
                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Are there any fire extinguishers around the tank ?</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="fireExtinguishers" id="fireExtinguishers1"
                                onClick={(e) =>{this.setState({fireExtinguishers:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="fireExtinguishers"id="fireExtinguishers0"
                                onClick={(e) =>{this.setState({fireExtinguishers:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Col md={12}><FireExtinguishers ParentCallBack={this.fireExtinguishersCallBackFunction}/></Col>
                        </Form.Row>

                        <Row style={{height: .01*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Col md={6}>
                            <Form.Label style={{fontWeight:"bold"}}>Type of vehicle suitable for service :</Form.Label>
                            <Select
                            value={this.state.vehicleType.value}
                            onChange={this.vehicleTypeHandleChange}
                            options={this.state.vehicleTypeOptions}
                            />
                            </Col>
                        </Form.Row>

                        <Row style={{height: .015*window.innerHeight + 'px'}}/>
                        <Form.Row>
                        <Form.Group as={Col} controlId="inspector">
                            <Form.Label style={{fontWeight:"bold"}}> Inspector :</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({inspector:e.target.value})}} />
                            
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}> Approver : </Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({approver:e.target.value})}} />
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
                </Card>
            </React.Fragment>
        )
      }

}


export default predeliveryIdentificationReport;
