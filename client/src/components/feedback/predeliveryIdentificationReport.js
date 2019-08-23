import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
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
        
        decision:""  , /* disapprove   approve   approve with recommendation */
        decisionComment:"",

        fieldset:"",

    }

    handleChange = () =>{
        console.log(this.state.highwayEnterance)
    }

    supplyTimeFromHandleChange = supplyTimeFrom => this.setState({ supplyTimeFrom })
    supplyTimeToHandleChange = supplyTimeTo => this.setState({ supplyTimeTo })

    vehicleTypeHandleChange = vehicleType => {
        this.setState({ vehicleType });
        console.log(vehicleType)
      };


    sendData=()=>{
        this.props.ParentCallBack(this.state)
    }

    submitData=()=>{
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled"})
        }
        else{
            this.setState({fieldset:""})
        }
    }
      
    fireExtinguishersCallBackFunction = (childData) => {
        this.setState({fireExtinguishersList:childData})
    }

      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Pre-delivery Identification Report</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>                
                    <Form>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Is the entrance from the highway to the site safe ?</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="highwayEnterance" id="highwayEnterance1"
                                onClick={(e) =>{this.setState({highwayEnterance:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="highwayEnterance"id="highwayEnterance0"
                                onClick={(e) =>{this.setState({highwayEnterance:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({highwayEnteranceMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({highwayEnteranceCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Is the unloading area flat?</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="areaFlat" id="areaFlat1"
                                onClick={(e) =>{this.setState({areaFlat:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="areaFlat"id="areaFlat0"
                                onClick={(e) =>{this.setState({areaFlat:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({areaFlatMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({areaFlatCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Type of unloading area (Asphalt/Concrete)?</Form.Label>
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

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({areaTypeMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({areaTypeCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Is the discharge point easily accessible ? </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="dischargePoint" id="dischargePoint1"
                                onClick={(e) =>{this.setState({dischargePoint:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="dischargePoint"id="dischargePoint0"
                                onClick={(e) =>{this.setState({dischargePoint:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({dischargePointMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
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
                            <Form.Label style={{fontWeight:"bold"}}> Could the car exit the site without going back? </Form.Label>
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

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({carExitMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({carExitCmt:e.target.value})}} />
                            </Col>
                            </Row>

                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Could the car go back? </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="carGoBack" id="carGoBack1"
                                onClick={(e) =>{this.setState({carGoBack:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="carGoBack"id="carGoBack0"
                                onClick={(e) =>{this.setState({carGoBack:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Distance (Meters)</Form.Label>
                            <Form.Control type={"number"} step={0.01}
                            onChange={(e)=>{this.setState({carGoBackDistance:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Safety procedures</Form.Label>
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
                            <Form.Label style={{fontWeight:"bold"}}> Tanks Capacity </Form.Label>
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

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({tankCapacityMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({tankCapacityCmt:e.target.value})}} />
                            </Col>
                            </Row>

                            <Row style={{height: .01*window.innerHeight + 'px'}}/>  
                            <Col md={6}>
                            <Form.Label>Size</Form.Label>
                            <Form.Control type={"number"} step={0.01}
                            onChange={(e)=>{this.setState({tankCapacitySize:e.target.value})}} />
                            </Col>

                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Is the vacuum flushing suitable? </Form.Label>
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

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({vaccumFlushingMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({vaccumFlushingCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Is suitable electricity Flange in place? </Form.Label>
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

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({suitableElectricityMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({suitableElectricityCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Is adequate lighting in place at night? </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="adequateLight" id="adequateLight1"
                                onClick={(e) =>{this.setState({adequateLight:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="adequateLight"id="adequateLight0"
                                onClick={(e) =>{this.setState({adequateLight:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({adequateLightMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
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
                            <Form.Label style={{fontWeight:"bold"}}> Are there any fire extinguishers around the tank </Form.Label>
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

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({fireExtinguishersMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({fireExtinguishersCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Col md={12}><FireExtinguishers ParentCallBack={this.fireExtinguishersCallBackFunction}/></Col>
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Is the unloading area obstacles free? </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Accepted" value={true}
                                name="areaObstacles" id="areaObstacles1"
                                onClick={(e) =>{this.setState({areaObstacles:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Accepted" value={false}
                                name="areaObstacles"id="areaObstacles0"
                                onClick={(e) =>{this.setState({areaObstacles:e.target.value})}} /> 
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:6}}>
                            <Form.Label>Measurses Required</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({areaObstaclesMP:e.target.value})}} />
                            </Col>
                            <Col md={{span:6}}>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({areaObstaclesCmt:e.target.value})}} />
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form.Row>

                        <Row style={{height: .01*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Col md={6}>
                            <Form.Label style={{fontWeight:"bold"}}>Type of vehicle suitable for service</Form.Label>
                            <Select
                            value={this.state.vehicleType}
                            onChange={this.vehicleTypeHandleChange}
                            options={this.state.vehicleTypeOptions}
                            />
                            </Col>
                        </Form.Row>

                        <Row style={{height: .015*window.innerHeight + 'px'}}/>
                        <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}> Inspector </Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({inspector:e.target.value})}} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}> Approver </Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({approver:e.target.value})}} />
                        </Form.Group>
                        </Form.Row>

                    </Form>
                    </fieldset>
                </Col>
                <Card.Footer > 
                <Row style={{height: .018*window.innerHeight + 'px'}}>
                            <Col md={{offset:11}} >
                            <Form.Check id="submitPDI"
                            custom={true}
                            inline={true}
                            label="Submit"
                            onChange={this.submitData}/>
                </Col> 
                </Row>
                </Card.Footer>
                </Card>
            </React.Fragment>
        )
      }

}


export default predeliveryIdentificationReport;
