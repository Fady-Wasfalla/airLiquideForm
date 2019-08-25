import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";

import CustomerBiDisplay from './customerBiDisplay'
import LvfDisplay from './lvfDisplay'
import CifDisplay from './cifDisplay'
import PriDisplay from './priDisplay'



class formDisplay extends Component {

    state = {
      
        }

      
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                
                <Card border="secondary">
                <Card.Header as="h4" className="bg-light text-black">Form</Card.Header>                
                <Row><br/></Row>
               
                
                <Col md={{ span: 12, offset: 0 }}><CustomerBiDisplay /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><LvfDisplay/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CifDisplay/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PriDisplay /></Col>
                <Row><br/></Row>

                <Row><br/></Row>
                
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                
            </React.Fragment>
        )
      }

}


export default formDisplay;
