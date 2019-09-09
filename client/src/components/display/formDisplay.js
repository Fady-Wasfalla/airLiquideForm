import React, { Component } from "react";
import axios from 'axios'
import Popup from "reactjs-popup";
import { Form , Col , Row , Card, Button , Collapse } from "react-bootstrap";
import CustomerBiDisplay from './customerBiDisplay'
import LvfDisplay from './lvfDisplay'
import CifDisplay from './cifDisplay'
import PriDisplay from './priDisplay'
import AskQuestion from './askQuestion'
import PreviousQuestions from './previousQuestionsDisplay'
import DistributionDisplay from './feedbackDisplay/distributionDisplay'
import SourcingDisplay from './feedbackDisplay/sourcingDisplay'
import FinanceDisplay from './feedbackDisplay/financeDisplay'
import CiDisplay from './feedbackDisplay/ciDisplay'
import FleatDisplay from './feedbackDisplay/fleatDisplay'
import PrFeedback from './feedbackDisplay/prFeedback'




class formDisplay extends Component {

    state = {
      formData:{}, /* { form, contactPerson, formFiles, history, questions } */
      lvf:{},
      cp:[],
      cif:{},
      showAsk:"",
      priData:{}, /* { pri, fulids, utilities } */
      cifResponseData:{}, /* { cifResponse,cifAP, cifFiles} */
      distributionsResponseData:{}, /* {distributions,distributionsAP,distributionsFiles} */
      irmrData:{}, /* {irmr,irmrAP, irmrFiles } */
      pdiData:{}, /* {pdi,pdiAP,pdiFiles} ======> pdi conatins { pdiTemp, fireExtinguishers } */
      sourcingsData:{}, /* { sourcings,sourcingsAP, sourcingsFile} */
      openFeedback:true,
      open:false,
    }

    componentWillMount(){ 
    this.setState({showAsk:this.props.ShowAsk})
    axios
      .get('http://localhost:8000/api/employees/showFormData/'+this.props.formId)
      // .then(res=>{if(res.data.status==='Failed'){
       
      //   alert(res.data.message)}
      // })
      .then(res => {this.setState({
        formData:res.data.formData,
        cp:res.data.formData.contactPerson,
        lvf:res.data.lvf,
        cif:res.data.cif,
        priData:res.data.priData, 
        cifResponseData:res.data.cifResponseData, 
        distributionsResponseData:res.data.distributionsResponseData, 
        irmrData:res.data.irmrData, 
        pdiData:res.data.pdiData, 
        sourcingsData:res.data.sourcingsData,
        financeData:res.data.financeData })
        console.log(res.data.pdiData)        })
      .catch(err => alert(err.message))
     
    }
      
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                
                <Card border="secondary">
                <Card.Header as="h4" className="bg-light text-black">
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Form</Col>
                <Button variant="outline-dark" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})}}>☰</Button>
                 </Row>
                </Card.Header>                
                <Row><br/></Row>

                <Collapse in={this.state.open}>
                <Col md={12}>                
                <Col md={{ span: 12, offset: 0 }}><CustomerBiDisplay CBI={this.state.formData.form} CP={this.state.formData.contactPerson}/></Col>
                <Row><br/></Row>


                <Col md={{ span: 12, offset: 0 }}><LvfDisplay LVF={this.state.lvf} /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CifDisplay CIF={this.state.cif} /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PriDisplay /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PreviousQuestions /></Col>
                <Row><br/></Row>

                <Col md={{ offset: 10 }} style={{display:this.state.showAsk}} >       
                <Popup trigger={<Button variant="outline-primary"> Ask Question ...? </Button>} modal><AskQuestion FormID={this.props.formId}/> </Popup>
                </Col>
                
                <Row><br/></Row>

                </Col>
                </Collapse>


                </Card>
                <Row><br/></Row>


                {/*Feedback Part*/}
                <Card border="secondary">
                <Card.Header as="h4" className="bg-light text-black">
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Feedbacks</Col>
                <Button variant="outline-dark" size="sm"
                 onClick={(e)=>{this.setState({openFeedback:!this.state.openFeedback})}}>☰</Button>
                 </Row>
                </Card.Header>                
                <Row><br/></Row>

                <Collapse in={this.state.openFeedback}>
                <Col md={12}>     

                <Col md={{ span: 12, offset: 0 }}><DistributionDisplay  DistributionsResponseData={this.state.distributionsResponseData}  /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><SourcingDisplay  SourcingsData={this.state.sourcingsData}  /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><FleatDisplay  PdiData={this.state.pdiData}  /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CiDisplay  CifResponseData={this.state.cifResponseData}  /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><FinanceDisplay  FinanceData={this.state.financeData}  /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PrFeedback  PrData={this.state.irmrData}  /></Col>
                <Row><br/></Row>


                

                </Col>
                </Collapse>


               
                <Row><br/></Row>
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                
            </React.Fragment>
        )
      }

}


export default formDisplay;
