import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import Irmr from './irmr'
import ResponseCard from './responseCard'
import FormDisplay from '../display/formDisplay'





class prFeedback extends Component {

    state = {
     
      }

     
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" className="bg-primary text-white">PR Feedback</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                <Col md={{ span: 12, offset: 0 }}><FormDisplay /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><Irmr /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><ResponseCard /></Col>
                <Row><br/></Row>
                
                
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button className="bg-primary text-white"
                onClick={this.handleChange}>Submit</Button></Col>
                </Row>

                <Row><br/></Row>
                
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                </Col>
            </React.Fragment>
        )
      }

}


export default prFeedback;
