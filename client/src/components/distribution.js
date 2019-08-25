import React, { Component } from "react";
import { Form , Col , Row , Card , Button } from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"
import FireExtinguishers from './fireExtinguishers'
import "react-datepicker/dist/react-datepicker.css";



class distribution extends Component {
    
    state = {
        
    }

   
      
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Pre-delivery Identification Report</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                    <Form>

                        

                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default distribution;
