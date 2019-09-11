import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"
import "react-datepicker/dist/react-datepicker.css";



class irmrDisplay extends Component {
    
    state = {
        criticalSectionDisplay:"none",
    }


    
    criticalSectionDisplay=(e)=>{
        if (e==="Critical"){
            return ""
        }else{
            return "none"
        } 
    }

    getRequire=(e)=>{
        if (e===true){
            return "Accepted ✔"
        }
        if (e===false){
            return "Not Accepted ✘"
        }
    }

    

      
      render() {
        let irmrDataChange = this.props.Data
        let irmrData = Object.assign([{}],irmrDataChange)
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Form onSubmit={this.submitData}>                
                <Card.Header as="h5" className="bg-dark text-white" >Project Categorization</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
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
                            <Form.Text style={{ fontSize:"16px"}}>{irmrData.projectType}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{display:this.criticalSectionDisplay(irmrData.projectType)}} >

                            <Form.Group as={Col} >
                            <Form.Label style={{fontWeight:"bold"}}>Mainly Critical due to :</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check 
                            custom={true}
                            inline={true}
                            label="Safety"
                            checked={irmrData.criticalSfety}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check 
                            custom={true}
                            inline={true}
                            label="Reliability"
                            checked={irmrData.criticalReliability}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check 
                            custom={true}
                            inline={true}
                            label="Environment risks"
                            checked={irmrData.criticalEnvironmentRisk}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check 
                            custom={true}
                            inline={true}
                            label="Project management"
                            checked={irmrData.criticalProjectManagement}/>
                            </Form.Group>

                            <Form.Group as={Col} md={2} >
                            <Form.Check 
                            custom={true}
                            inline={true}
                            label="Operation risks"
                            checked={irmrData.criticalOperationRisk}/>
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
                                <Form.Label style={{fontWeight:"bold"}}>Date</Form.Label>
                                <Card.Text>{irmrData.irmrDate}</Card.Text>

                            </Form.Group>
                            <Form.Group as={Col} md={{offset:1,span:3}}>
                                <Form.Label>Signature</Form.Label>
                                <Form.Control as="textarea" rows="1" 
                                value={irmrData.irmrsignature}/>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Grounds for IRMR Classification</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                value={irmrData.irmrGround}/>
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
                                <Card.Text>{irmrData.sisDate}</Card.Text>
                                <br/>
                                
                            </Form.Group>
                            <Form.Group as={Col} md={{offset:1,span:3}}>
                                <Form.Label>Signature</Form.Label>
                                <Form.Control as="textarea" rows="1" 
                                value={irmrData.sisSignature}/>
                            </Form.Group>
                       </Form.Row>

                       <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Grounds for SIS Classification</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                value={irmrData.sisGround}/>
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
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(irmrData.praRequiring)}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                                <Form.Group as={Col} md={{offset:1,span:2}} >
                                <Form.Check 
                                custom={true}
                                inline={true}
                                label="Project"
                                checked={irmrData.praProject}/>
                                </Form.Group>

                                <Form.Group as={Col} md={2} >
                                <Form.Check 
                                custom={true}
                                inline={true}
                                label="Safety"
                                checked={irmrData.praSfety}/>
                                </Form.Group>

                                <Form.Group as={Col} md={2} >
                                <Form.Check 
                                custom={true}
                                inline={true}
                                label="Reliability"
                                checked={irmrData.praReliability}/>
                                </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                value={irmrData.praCmt}/>
                                </Form.Group>
                       </Form.Row>

                       <Row style={{height: .018*window.innerHeight + 'px'}}/>
                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Process Hazard Analysis (PHA): </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(irmrData.phaRequiring)}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                value={irmrData.phaCmt}/>
                                </Form.Group>
                       </Form.Row>

                       <Row style={{height: .018*window.innerHeight + 'px'}}/>
                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Specific quantitative assessment study: </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(irmrData.quantitativeAssessmentRequiring)}</Form.Text>
                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                value={irmrData.quantitativeAssessmentCmt}/>
                                </Form.Group>
                       </Form.Row>

                       <Row style={{height: .018*window.innerHeight + 'px'}}/>
                       <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Element Important for Safety (EIS): </Form.Label>
                            <Col md={{span:1}}/>

                            <Form.Text style={{ fontSize:"16px"}}>{this.getRequire(irmrData.eisRequiring)}</Form.Text>

                            </Row>
                            </Col>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md={{offset:1,span:10}}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="2" 
                                value={irmrData.eisCmt}/>
                                </Form.Group>
                       </Form.Row>


                </Col>
                </Form>
                </Card>
            </React.Fragment>
        )
      }

}


export default irmrDisplay;
