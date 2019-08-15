import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

class priForm extends Component {

    state = {
        // 1. Project description and general comments
        DescriptionAndGeneralCmts:"",

        //2. Facility or Equipment
        FacilityOrEquipment:"",
        FacilityOrEquipmentRemarks:"",
        ApplicationType:"" ,
        ApplicationTypeRemarks:"" ,
        ProjectType:"" ,
        ProjectTypeRemarks:"" ,
        FacilityOrEquipmentSupply:"" ,
        FacilityOrEquipmentCmts:"" ,
        FixedStandardBulk:false,
        FixedBulkTankOnly:false,
        OnlySupplyOfProduct:false,
        Mobile:false,
        OnBoardEquipment:false,
        OnBoardEquipmentType:"",
      }


     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >PRI Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                    <Form>
                       <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>1. Project description and general comments</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                            <Form.Group as={Col} controlId="DescriptionAndGeneralCmts">
                            <Form.Label>To be completed for clear understanding of the project and associated risks</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({DescriptionAndGeneralCmts:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"18px" , fontStyle:"italic" }}>2. Facility or Equipment</Form.Label>
                            </Form.Group>
                       </Form.Row>
                       
                       <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="FacilityOrEquipment">
                            <Form.Label>Facility Or Equipment</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({FacilityOrEquipment:e.target.value})}} />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="FacilityOrEquipmentRemarks">
                            <Form.Label>Facility Or Equipment Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({FacilityOrEquipmentRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="ApplicationType">
                            <Form.Label>Application Type</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({ApplicationType:e.target.value})}} />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="ApplicationTypeRemarks">
                            <Form.Label>Application Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({ApplicationTypeRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Col md={4}>
                            <Form.Group as={Col} controlId="ProjectType">
                            <Form.Label>Project Type</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({ProjectType:e.target.value})}} />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="ProjectTypeRemarks">
                            <Form.Label>Project Type Remarks</Form.Label>
                            <Form.Control as="textarea" rows="1" onChange={(e)=>{this.setState({ProjectTypeRemarks:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
                       
                        <Form.Row>
                            <Form.Group as={Col} controlId="FacilityOrEquipmentSupply">
                            <Form.Label>Facility Or Equipment Supply</Form.Label>
                            <Form.Control as="textarea" rows="2" onChange={(e)=>{this.setState({FacilityOrEquipmentSupply:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="FacilityOrEquipmentCmts">
                            <Form.Label>Facility Or Equipment Cmts</Form.Label>
                            <Form.Control as="textarea" rows="2" onChange={(e)=>{this.setState({FacilityOrEquipmentCmts:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>
        
                        <Form.Row>
                            <Form.Group as={Col } >
                            <Form.Check 
                            custom={true}
                            label="Fixed Standard bulk installation with atm. vaporizers and other standard equipment"
                            onChange={(e)=>{this.setState({FixedStandardBulk:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col}  md={2}>
                            <Form.Check 
                            label="Fixed bulk tank only"
                            onChange={(e)=>{this.setState({FixedBulkTankOnly:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Check 
                            label="No Installation, only supply of product  "
                            onChange={(e)=>{this.setState({OnlySupplyOfProduct:e.target.checked})}}/>
                            </Form.Group>
                        </Form.Row>
                            
                        <Form.Row >
                            <Form.Group as={Col} >
                            <Form.Check 
                            label="Mobile (transportable equipt…) "
                            onChange={(e)=>{this.setState({Mobile:e.target.checked})}}/>
                            </Form.Group>

                            <Form.Group as={Col }  >

                            <Form.Check 
                            label="Fixed bulk tank only"
                            onChange={(e)=>{this.setState({OnBoardEquipment:e.target.checked})}}/>

                            <Form.Control as="textarea" rows="1" disabled={!this.state.OnBoardEquipment}
                            onChange={(e)=>{this.setState({FacilityOrEquipmentSupply:e.target.value})}} />
                            
                            </Form.Group>

                            <Form.Group as={Col}  >
                            <Form.Check id="jh"
                            custom={true}
                            inline={true}
                            label="Fixed bulk tank only"
                            onChange={(e)=>{this.setState({OnBoardEquipment:e.target.checked})}}/>
                            <Form.Control as="textarea" rows="1" disabled={!this.state.OnBoardEquipment}
                            onChange={(e)=>{this.setState({FacilityOrEquipmentSupply:e.target.value})}} />
                            </Form.Group>
                            

                        </Form.Row>
                       
                        
                        
                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default priForm;
