import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class tryCard extends Component {

    state = {
        fluidOrProduct:"" ,
        extremePressure:0,
        extremeTemperature:0,
        maximumFlow:0 ,
        volumeStored:0 ,
        Characteristics:0 ,
      }

   

      render() {
        return (
            <React.Fragment>
            <Form>

                <Form.Row>
                            <Form.Group as={Col} controlId="customerName">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({name:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>
                </Form.Row>


            </Form> 
            </React.Fragment>
        )
      }

}


export default tryCard;
