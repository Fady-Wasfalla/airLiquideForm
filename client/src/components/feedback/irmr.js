import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"
import FireExtinguishers from '../fireExtinguishers'
import "react-datepicker/dist/react-datepicker.css";



class predeliveryIdentificationReport extends Component {
    
    state = {

        projectType:"" ,
        
        criticalSfety:false ,
        criticalReliability:false ,
        criticalEnvironmentRisk:false ,
        criticalProjectManagement:false ,
        criticalOperationRisk:false ,
        
        /*IRMR classification */
        irmrDate:new Date()	,
        irmrsignature:"" ,
        irmrGround:"" ,


        /*SIS classification */
        sisDate:new Date()	,
        sisSignature:"" ,
        sisGround:"" ,

        /* PRA */
        praRequiring:false ,
        praProject:false ,
        praSfety:false ,
        praReliability:false ,
        praCmt:"" ,
        /* PHA  */
        phaRequiring:false ,
        phaCmt:"" ,
        /* Specific quantitative assessment study */
        quantitativeAssessmentRequiring:false ,
        quantitativeAssessmentCmt:"" ,
        /* EIS  */
        eisRequiring:false ,
        eisCmt:"" ,

        decision:""  , /* disapprove   approve   approve with recommendation */
        decisionComment:"",

        criticalSectionDisplay:"none",
    }


    irmrHandleChange(date) {
        this.setState({irmrDate: date})
      }
    
    sisHandleChange(date) {
        this.setState({sisDate: date})
      }

      
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Project Categorization</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                    <Form>


                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"20px" , fontWeight:"bold" , textDecoration:"underline" }}>
                                Project Categorization</Form.Label>
                            </Form.Group>
                       </Form.Row>

                        <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Project Type : </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Standard" value={"Standard"}
                                name="projectType" id="projectType1"
                                onClick={(e) =>{this.setState({projectType:e.target.value})
                                                this.setState({criticalSectionDisplay:"none"})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Critical" value={"Critical"}
                                name="projectType"id="projectType0"
                                onClick={(e) =>{this.setState({projectType:e.target.value})
                                                this.setState({criticalSectionDisplay:""})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{display:this.state.criticalSectionDisplay}} >

                            <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}>Mainly Critical due to :</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check id="criticalSfety"
                            custom={true}
                            inline={true}
                            label="Safety"
                            onChange={(e)=>{this.setState({criticalSfety:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check id="criticalReliability"
                            custom={true}
                            inline={true}
                            label="Reliability"
                            onChange={(e)=>{this.setState({criticalReliability:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check id="criticalEnvironmentRisk"
                            custom={true}
                            inline={true}
                            label="Environment risks"
                            onChange={(e)=>{this.setState({criticalEnvironmentRisk:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check id="criticalProjectManagement"
                            custom={true}
                            inline={true}
                            label="Project management"
                            onChange={(e)=>{this.setState({criticalProjectManagement:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check id="criticalOperationRisk"
                            custom={true}
                            inline={true}
                            label="Operation risks"
                            onChange={(e)=>{this.setState({criticalOperationRisk:e.target.checked})}}/>
                            </Form.Group>

                        </Form.Row>

                       
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontWeight:"bold" , fontStyle:"italic" }}>
                                    IRMR Classification</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                            <Form.Group as={Col} md={{offset:1,span:2}}>
                                <Form.Label>Date</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.irmrDate}
                                    onChange={this.irmrHandleChange.bind(this)}/>
                            </Form.Group>
                            <Form.Group as={Col} md={{offset:1,span:3}}>
                                <Form.Label>Signature</Form.Label>
                                <Form.Control as="textarea" rows="1" 
                                onChange={(e)=>{this.setState({irmrsignature:e.target.value})}}/>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Grounds for IRMR Classification</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                onChange={(e)=>{this.setState({irmrGround:e.target.value})}}/>
                                </Form.Group>
                       </Form.Row>

                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontWeight:"bold" , fontStyle:"italic" }}>
                                    SIS Classification</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                            <Form.Group as={Col} md={{offset:1,span:2}}>
                                <Form.Label>Date</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.sisDate}
                                    onChange={this.sisHandleChange.bind(this)}/>
                            </Form.Group>
                            <Form.Group as={Col} md={{offset:1,span:3}}>
                                <Form.Label>Signature</Form.Label>
                                <Form.Control as="textarea" rows="1" 
                                onChange={(e)=>{this.setState({sisSignature:e.target.value})}}/>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Grounds for SIS Classification</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                onChange={(e)=>{this.setState({sisGround:e.target.value})}}/>
                                </Form.Group>
                       </Form.Row>

                        <Row><br/></Row>
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"20px" , fontWeight:"bold" , textDecoration:"underline" }}>
                                Risk management follow-up & Analysis</Form.Label>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Preliminary Risk Analysis (PRA): </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Required" value={"Required"}
                                name="praRequiring" id="praRequiring1"
                                onClick={(e) =>{this.setState({praRequiring:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Required" value={"Not Required"}
                                name="praRequiring"id="praRequiring0"
                                onClick={(e) =>{this.setState({praRequiring:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                                <Form.Group as={Col} md={{offset:1,span:2}} >
                                <Form.Check id="praProject"
                                custom={true}
                                inline={true}
                                label="Project"
                                onChange={(e)=>{this.setState({praProject:e.target.checked})}}/>
                                </Form.Group>

                                <Form.Group as={Col} md={2} >
                                <Form.Check id="praSfety"
                                custom={true}
                                inline={true}
                                label="Safety"
                                onChange={(e)=>{this.setState({praSfety:e.target.checked})}}/>
                                </Form.Group>

                                <Form.Group as={Col} md={2} >
                                <Form.Check id="praReliability"
                                custom={true}
                                inline={true}
                                label="Reliability"
                                onChange={(e)=>{this.setState({praReliability:e.target.checked})}}/>
                                </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                onChange={(e)=>{this.setState({praCmt:e.target.value})}}/>
                                </Form.Group>
                       </Form.Row>

                       <Row style={{height: .018*window.innerHeight + 'px'}}/>
                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Process Hazard Analysis (PHA): </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Required" value={"Required"}
                                name="phaRequiring" id="phaRequiring1"
                                onClick={(e) =>{this.setState({phaRequiring:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Required" value={"Not Required"}
                                name="phaRequiring"id="phaRequiring0"
                                onClick={(e) =>{this.setState({phaRequiring:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                onChange={(e)=>{this.setState({phaCmt:e.target.value})}}/>
                                </Form.Group>
                       </Form.Row>

                       <Row style={{height: .018*window.innerHeight + 'px'}}/>
                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Specific quantitative assessment study: </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Required" value={"Required"}
                                name="quantitativeAssessmentRequiring" id="quantitativeAssessmentRequiring1"
                                onClick={(e) =>{this.setState({quantitativeAssessmentRequiring:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Required" value={"Not Required"}
                                name="quantitativeAssessmentRequiring"id="quantitativeAssessmentRequiring0"
                                onClick={(e) =>{this.setState({quantitativeAssessmentRequiring:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                onChange={(e)=>{this.setState({quantitativeAssessmentCmt:e.target.value})}}/>
                                </Form.Group>
                       </Form.Row>

                       <Row style={{height: .018*window.innerHeight + 'px'}}/>
                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Element Important for Safety (EIS): </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Required" value={"Required"}
                                name="eisRequiring" id="eisRequiring1"
                                onClick={(e) =>{this.setState({eisRequiring:e.target.value})}} /> 
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Not Required" value={"Not Required"}
                                name="eisRequiring"id="eisRequiring0"
                                onClick={(e) =>{this.setState({eisRequiring:e.target.value})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                onChange={(e)=>{this.setState({eisCmt:e.target.value})}}/>
                                </Form.Group>
                       </Form.Row>


                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default predeliveryIdentificationReport;
