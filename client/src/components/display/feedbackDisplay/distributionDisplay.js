import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";

import axios from 'axios'



class distributionDisplay extends Component {

    state = {
        finalDecision:{dodo:false},
        formId:0,
        file:null,
        filesNames:[""],
        displayDecision:"none",
        data:{},

      }
    async componentWillMount(){
      this.setState({data:this.props.DistributionsResponseData})

    }
    finalDecisionCallBackFunction = (childData) => {
        this.setState({finalDecision:childData})
    }

    handleChange=()=>{

    }

     
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" className="text-white" style={{backgroundColor:"#375f9b"}}>Distribution Feedback</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                

                
               

                <Row><br/></Row> 
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                </Col>
                
            </React.Fragment>
        )
      }

}


export default distributionDisplay;
