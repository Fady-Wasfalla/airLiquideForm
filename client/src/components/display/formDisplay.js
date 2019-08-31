import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Alert } from "react-bootstrap";

import CustomerBiDisplay from './customerBiDisplay'
import LvfDisplay from './lvfDisplay'
import CifDisplay from './cifDisplay'
import PriDisplay from './priDisplay'
import AskQuestion from './askQuestion'
import PreviousQuestions from './previousQuestionsDisplay'
import axios from 'axios'
import Popup from "reactjs-popup";





class formDisplay extends Component {

    state = {
      cbi:{},
      cp:[],
      lvf:{},
      cif:{},
      pri:{},
    }

    componentWillMount(){
      //Customer Basics Info
      //cbi
      axios
      .get('http://localhost:8000/api/forms/'+this.props.formId)
      .then(res => this.setState({cbi:res.data.data}))
      .catch(err => alert(err.message))
      //Contact Person
      axios
      .get('http://localhost:8000/api/contactPersons/form/'+this.props.formId)
      .then( (res) => { this.setState({cp:res.data.data}) })
      .catch(err => alert(err.message))
      
    }
      
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                
                <Card border="secondary">
                <Card.Header as="h4" className="bg-light text-black">Form</Card.Header>                
                <Row><br/></Row>

                
                <Col md={{ span: 12, offset: 0 }}><CustomerBiDisplay CBI={this.state.cbi} CP={this.state.cp}/></Col>
                <Row><br/></Row>


                <Col md={{ span: 12, offset: 0 }}><LvfDisplay/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CifDisplay/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PriDisplay /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PreviousQuestions /></Col>
                <Row><br/></Row>


                <Col md={{ offset: 10 }}>       
                <Popup trigger={<Button variant="outline-primary"> Ask Question ...? </Button>} modal><AskQuestion FormID={this.props.formId}/> </Popup>
                </Col>
                <Row><br/></Row>



                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                
            </React.Fragment>
        )
      }

}


export default formDisplay;
