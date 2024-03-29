import React, { Component } from "react";
import axios from 'axios'
import Popup from "reactjs-popup";
import { Col , Row , Card, Button , Collapse, Form } from "react-bootstrap";
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
      formData:{formFiles:[]}, /* { form, contactPerson, formFiles, history, questions } */
      lvf:{},
      cp:[],
      cif:{},
      showAsk:"",
      // priData:{}, /* { pri, fluids, utilities } */
      fluids:[],
      utilities:[],
      cifResponseData:{}, /* { cifResponse,cifAP, cifFiles} */
      distributionsResponseData:{}, /* {distributions,distributionsAP,distributionsFiles} */
      irmrData:{}, /* {irmr,irmrAP, irmrFiles } */
      pdiData:{}, /* {pdi,pdiAP,pdiFiles} ======> pdi conatins { pdiTemp, fireExtinguishers } */
      sourcingsData:{}, /* { sourcings,sourcingsAP, sourcingsFile} */
      openFeedback:false,
      open:true,
      userName:window.localStorage.getItem("sysEmployeeName"),
      
    }

    async componentWillMount(){ 
    this.setState({showAsk:this.props.ShowAsk})
    await axios
      .post('http://localhost:8000/api/employees/showFormData/'+this.props.formId , this.state )
      .then(res => {if (res.data.status === 'Failed'){
        alert(res.data.message)
        window.location.assign('http://localhost:3000/Unauthorized')
    }else{
        this.setState({
        formData:res.data.formData,
        cp:res.data.formData.contactPerson,
        lvf:res.data.lvf,
        cif:res.data.cif,
        pri:res.data.priData.pri, 
        fluids:res.data.priData.fluids,
        utilities:res.data.priData.utilities,
        cifResponseData:res.data.cifResponseData, 
        distributionsResponseData:res.data.distributionsResponseData, 
        irmrData:res.data.irmrData, 
        pdiData:res.data.pdiData, 
        sourcingsData:res.data.sourcingsData,
        financeData:res.data.financeData })
      } })
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

                <Col md={{ span: 12, offset: 0 }}><PriDisplay PRI={this.state.pri} UTILITIES={this.state.utilities}
                FLUIDS={this.state.fluids}
                /></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PreviousQuestions Data={this.state.formData.questions}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}>
                  <Col md={12}>
                    <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Files: </Form.Label>
                                { this.state.formData.formFiles.map((e,index)=>{
                                        return(
                                            <Col md={{offset:0,span:2}}>                                                    
                                                <Button variant="link" size={"sm"} href= {"http://localhost:8000/"+this.state.formData.formFiles[index].path} target="_blank"
                                                style={{textDecoration:"underline", color:"black" ,  fontSize:"14px"}}>
                                                    {this.state.formData.formFiles[index].name+" ▼ "}</Button>
                                            </Col>
                                        )
                                })}
                    </Row>
                    </Col>
                </Col>
                <Row><br/></Row>

                <Col md={{ offset: 10 }} style={{display:this.state.showAsk}} >       
                <Popup trigger={<Button variant="outline-primary"> Ask Question ...? </Button>} modal><AskQuestion FormID={this.props.formId}/> </Popup>
                </Col>
                
                <Row><br/></Row>

                </Col>
                </Collapse>

                {

                }

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
