import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import Irmr from './irmr'
import ResponseCard from './responseCard'
import FormDisplay from '../display/formDisplay'
import axios from 'axios'




class prFeedback extends Component {

    state = {
        finalDecision:{},
        irmr:{},

      }

    finalDecisionCallBackFunction = (childData) => {
        this.setState({finalDecision:childData})
    }

    irmrCallBackFunction = (childData) => {
      this.setState({irmr:childData})
    }

    handleChange=()=>{
      console.log(this.state)
      axios
      .post('http://localhost:8000/api/employees/prFB',this.state)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
    }
     
      render() {
        return (
          <div style={{  'overflow-x':'hidden' }} >
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

                <Col md={{ span: 12, offset: 0 }}><Irmr ParentCallBack={this.irmrCallBackFunction} /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><ResponseCard ParentCallBack={this.finalDecisionCallBackFunction}/></Col>
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
            </div>
        )
      }

}


export default prFeedback;
