import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import ContactPerson from './contactPerson'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class customerBasicInfo extends Component {

    state = {
        startDate: new Date()
      }


      handleChange(date) {
        console.log(date)
        this.setState({startDate: date})
      }

     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" > Customer Basics Info</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                    <Form>
                        

                        <Form.Row>

                            <Form.Group as={Col} controlId="customerName">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control as="textarea" rows="1" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Customer Zone</Form.Label>
                            <Form.Control as="textarea" rows="1"  />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="customerName">
                            <Form.Label>Date</Form.Label>
                            <br/>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="textarea">
                            <Form.Label>Customer Full Address</Form.Label>
                            <Form.Control as="textarea" rows="2" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Col md={12}><ContactPerson/></Col>
                        </Form.Row>
                        
                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default customerBasicInfo;
