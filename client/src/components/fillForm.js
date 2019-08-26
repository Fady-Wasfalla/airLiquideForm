import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'
import CustomerBasicInfo from './customerBasicInfo'
import LogisticsValidationForm from './logisticsValidationForm'
import CustomerInstallationForm from './customerInstallationForm'
import PriForm from './priForm'
import axios from 'axios'



class fillForm extends Component {

    state = {
      cbi:{},
      lvf:{},
      cif:{},
      pri:{}
     
      }

      handleChange =() =>{
        console.log("Customer Basics info",this.state.cbi)
        console.log("LVF",this.state.lvf)
        console.log("CIF",this.state.cif)
        console.log("PRI",this.state.pri)
      axios
      .post('http://localhost:8000/api/employees/newForm',this.state)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
      }

      cbiCallBackFunction = (childData) => {
        this.setState({cbi:childData})
      }

      lvfCallBackFunction = (childData) => {
        this.setState({lvf:childData})
      }

      cifCallBackFunction = (childData) => {
        this.setState({cif:childData})
      }

      priCallBackFunction = (childData) => {
         this.setState({pri:childData})
      }

      render() {
        return (
          <div style={{  'overflow-x':'hidden' }}>
            <React.Fragment >
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" style={{backgroundColor:"#375f9b"}} className="text-white">Request for a job offer</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>


                <Col md={{ span: 12, offset: 0 }}><CustomerBasicInfo ParentCallBack={this.cbiCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><LogisticsValidationForm ParentCallBack={this.lvfCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CustomerInstallationForm ParentCallBack={this.cifCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PriForm ParentCallBack={this.priCallBackFunction}/></Col>
                <Row><br/></Row>
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button variant="danger" className="text-white" style={{backgroundColor:"#000000"}}
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


export default fillForm;
