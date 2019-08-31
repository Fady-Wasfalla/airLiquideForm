import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import PredeliveryIdentificationReport from './predeliveryIdentificationReport'
import ResponseCard from './responseCard'
import FormDisplay from '../display/formDisplay'
import axios from 'axios'
<<<<<<< HEAD

=======
>>>>>>> Fady




class fleatFeedback extends Component {

    state = {
      finalDecision:{},
      pdi:{}, 
      formId:0,

    }

    componentWillMount(){
      const formId  = this.props.match.params.id
      this.setState({formId:formId})
    }

    finalDecisionCallBackFunction = (childData) => {
        this.setState({finalDecision:childData})
    }

    pdiCallBackFunction = (childData) => {
      this.setState({pdi:childData})
    }

    handleChange=()=>{
      axios
      .post('http://localhost:8000/api/employees/pdiFB',this.state)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
      console.log(this.state)
    }
     
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" className="text-white" style={{backgroundColor:"#375f9b"}}>Fleat Feedback</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                <Col md={{ span: 12, offset: 0 }}><FormDisplay formId={this.state.formId}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PredeliveryIdentificationReport ParentCallBack={this.pdiCallBackFunction}/></Col>
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
        )
      }

}


export default fleatFeedback;
