import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'
import CustomerBasicInfo from './customerBasicInfo'
import LogisticsValidationForm from './logisticsValidationForm'
import CustomerInstallationForm from './customerInstallationForm'
import PriForm from './priForm'



class fillForm extends Component {

    state = {
      CBI:[],
      name:{},
      two:"sjnj",
      }

      handleChange =() =>{
        console.log(this.state.name)
      }
      callBackFunction = (childData) => {
        this.setState({name:childData})
      }
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" className="bg-secondary text-white">Request for a job offer</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                
                <Col md={{ span: 12, offset: 0 }}><CustomerBasicInfo /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><LogisticsValidationForm/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CustomerInstallationForm/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PriForm ParentCallBack={this.callBackFunction}/></Col>
                <Row><br/></Row>
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button className="bg-secondary text-white"
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


export default fillForm;
