import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";



class pdiDisplay extends Component {
    
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

      render() {
        let pdiDataChange = this.props.Data
        let pdiData = Object.assign([{}],pdiDataChange)
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
                            <Form.Label style={{fontWeight:"bold"}}>Is the entrance from the highway to the site safe ?</Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text>{pdiData.highwayEnterance}</Form.Text>
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
                           
                            </Row>
                            </Col>

                            <Row style={{height: .02*window.innerHeight + 'px'}}/>
                            <Row>
                            <Col md={{span:1}}>
                            <Form.Label>From</Form.Label>
                            <br/>
                           
                            </Col>
                            <Col md={{offset:1}}>
                            <Form.Label>To</Form.Label>
                            <br/>
                           
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
                            {/*Fire exting. */}
                        </Form.Row>

                        <Row style={{height: .04*window.innerHeight + 'px'}}/>
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Is the unloading area obstacles free? </Form.Label>
                            <Col md={{span:1}}/>
                            
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
                            
                            </Col>
                        </Form.Row>

                        <Row style={{height: .015*window.innerHeight + 'px'}}/>
                        <Form.Row>
                        <Form.Group as={Col} controlId="inspector">
                            <Form.Label style={{fontWeight:"bold"}}> Inspector </Form.Label>
                           
                            
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}> Approver </Form.Label>
                        </Form.Group>
                        </Form.Row>

                    
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default pdiDisplay;
