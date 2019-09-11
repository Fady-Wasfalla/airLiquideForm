import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FormDisplay from '../display/formDisplay'
import ResponseCard from './responseCard'
import Upload from '../upload'
import TimePicker from 'react-time-picker'
import axios from 'axios'



class distributionFeedback extends Component {

    state = {
        finalDecision:{dodo:false}, 
        formId:0,
        customerTank:0,
        supplyTimeFrom:"" ,
        supplyTimeTo:"",
        file:null,
        filesNames:[""],
        displayDecision:"none",
        data:{},

      }
    async componentWillMount(){
      const formId  = this.props.match.params.id
      this.setState({formId:formId})
      await axios
      .get('http://localhost:8000/api/forms/'+this.props.match.params.id)
      .then(res => {this.setState({ data : res.data.data })})
      .catch(err => alert(err.message))
      if (this.state.data.distributionSubmition){
          this.setState({displayDecision:"none"})
      }else{
          this.setState({displayDecision:""})
      }

    }
    finalDecisionCallBackFunction = (childData) => {
        this.setState({finalDecision:childData})
    }

    handleChange=(event)=>{
      if (this.state.finalDecision.dodo===false){
        return alert("please check the box in Final Decision part")
      }
      event.preventDefault();
      const fd = new FormData()
      let finalDecisionAsString = JSON.stringify(this.state.finalDecision)
      let filesNamesAsString = JSON.stringify(this.state.filesNames)
      fd.append('finalDecision', finalDecisionAsString)
      fd.append('formId',this.state.formId)
      fd.append('filesNames',filesNamesAsString)
      fd.append('customerTank',this.state.customerTank)
      fd.append('supplyTimeFrom',this.state.supplyTimeFrom)
      fd.append('supplyTimeTo',this.state.supplyTimeTo)
      if(this.state.file){
        for(let i = 0 ; i<this.state.file.length; i++){
          fd.append('file',this.state.file[i])
        }
      }
      axios
      .post('http://localhost:8000/api/employees/distributionsFB',fd)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
      window.location.assign('http://localhost:3000/cases/Distribution')

    }

    nameUploadCallBackFunction = (childData) => {
      this.setState({filesNames:childData})
    }

    fileUploadCallBackFunction = (childData) => {
      this.setState({file:childData})
    }

    supplyTimeFromHandleChange = (supplyTimeFrom) => {
      this.setState({ supplyTimeFrom:supplyTimeFrom }) }
    
    supplyTimeToHandleChange = (supplyTimeTo) => {
      this.setState({ supplyTimeTo:supplyTimeTo }) }

    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
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

                <Col md={{ span: 12, offset: 0 }}><FormDisplay  formId={this.state.formId}/></Col>
                <Row><br/></Row>

                <Form  onSubmit={this.handleChange}>
                <Form.Group style={{display:this.state.displayDecision}}>
                <Col md={{ span: 12, offset: 0 }}><Upload nameParentCallBack={this.nameUploadCallBackFunction}
                                                          fileParentCallBack={this.fileUploadCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}>
                  <Form.Row>
                              <Col>
                              <Form.Label>Tank Size</Form.Label>
                              <Form.Control type={"number"} step={0.1} required
                              onChange={(e)=>{this.setState({customerTank:e.target.value})}} />
                              </Col>

                              <Col md={{offset:1,span:2}}>
                              <Form.Label>Supply Time From</Form.Label>
                              <br/>
                              <TimePicker
                                      onChange={this.supplyTimeFromHandleChange}
                                      value={this.state.supplyTimeFrom}
                                      />
                                      <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.supplyTimeFrom)}/>
                              </Col>
                              <Col md={{offset:1}}>
                              <Form.Label>Supply Time To</Form.Label>
                              <br/>
                              <TimePicker disapled="none"
                                      onChange={this.supplyTimeToHandleChange}
                                      value={this.state.supplyTimeTo}
                                      />
                                      <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.supplyTimeTo)}/>
                              </Col>
                  </Form.Row>
                </Col>

                <br/>

                <Col md={{ span: 12, offset: 0 }}><ResponseCard ParentCallBack={this.finalDecisionCallBackFunction}/></Col>
                <Row><br/></Row>
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button variant="danger" className="text-white" type="submit">Submit</Button></Col>
                </Row>
                
                </Form.Group>

                </Form>

                <Row><br/></Row>
                
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                </Col>
                
            </React.Fragment>
        )
      }

}


export default distributionFeedback;
