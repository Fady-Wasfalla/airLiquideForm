import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse } from "react-bootstrap";
import ContactPerson from '../contactPerson'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class customerBiDisplay extends Component {

    state = {
        name:"",
        date: new Date(),
        address:"",
        zone:"",
        address:"",

        open:false,
    }

    handleChange(date) {
        console.log(date)
        this.setState({date: date})
    }
      
     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Customer Basics Info</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                }}>☰</Button>
                 </Row>
                </Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <Collapse in={this.state.open}>
                    <Form>

                        <Form.Row>

                            <Form.Group as={Col}  >
                            <Form.Label>Form ID</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({zone:e.target.value})}} />
                            </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Date</Form.Label>
                            <br/>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            
                            <Form.Group as={Col}  >
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({name:e.target.value})}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Customer Zone</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({zone:e.target.value})}} />
                            </Form.Group>

                        </Form.Row>



                        <Form.Row>
                            <Form.Group as={Col} controlId="textarea">
                            <Form.Label>Customer Full Address</Form.Label>
                            <Form.Control as="textarea" rows="2" 
                            onChange={(e)=>{this.setState({address:e.target.value})}}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Col md={12}><ContactPerson/></Col>
                        </Form.Row>
                        
                    </Form>
                    </Collapse>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default customerBiDisplay;