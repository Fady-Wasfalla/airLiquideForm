import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import ResponseCard from './responseCard'
import FormDisplay from '../display/formDisplay'
import Upload from '../upload'
import axios from 'axios'




class sourcingFeedback extends Component {

    state = {
      finalDecision:{dodo:false},
      formId:0,
      file:null,
      filesNames:[""],
      displayDecision:"none",
      data:{},
      userName:window.localStorage.getItem("sysEmployeeName"),
    }

    async componentWillMount(){
      const formId  = this.props.match.params.id
      this.setState({formId:formId})
      await axios
      .get('http://localhost:8000/api/forms/'+this.props.match.params.id)
      .then(res => {this.setState({ data : res.data.data })})
      .catch(err => alert(err.message))
      if (this.state.data.sourcingSubmition){
          this.setState({displayDecision:"none"})
      }else{
          this.setState({displayDecision:""})
      }
    }

    finalDecisionCallBackFunction = (childData) => {
          this.setState({finalDecision:childData})
     }

     nameUploadCallBackFunction = (childData) => {
      this.setState({filesNames:childData})
    }

    fileUploadCallBackFunction = (childData) => {
      this.setState({file:childData})
    }
      
    handleChange=()=>{
      if (this.state.finalDecision.dodo===false){
        return alert("please check the box in Final Decision part")
      }
      const fd = new FormData()
      let finalDecisionAsString = JSON.stringify(this.state.finalDecision)
      let filesNamesAsString = JSON.stringify(this.state.filesNames)
      var employee = JSON.stringify(this.state.userName)        
      fd.append('employeeName',employee)
      fd.append('finalDecision', finalDecisionAsString)
      fd.append('formId',this.state.formId)
      fd.append('filesNames',filesNamesAsString)
      if(this.state.file){
        for(let i = 0 ; i<this.state.file.length; i++){
          fd.append('file',this.state.file[i])
        }
      }
        axios
        .post('http://localhost:8000/api/employees/sourcingsFB',fd)
        .then(res => alert(res.data.message))
        .catch(err => alert(err.message))
        window.location.assign('http://localhost:3000/cases/Sourcing')
    }
     
    render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" className="bg-primary text-white">Sourcing Feedback</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                <Col md={{ span: 12, offset: 0 }}><FormDisplay formId={this.state.formId}/></Col>
                <Row><br/></Row>

                <Form.Group style={{display:this.state.displayDecision}}>
                <Col md={{ span: 12, offset: 0 }}><Upload nameParentCallBack={this.nameUploadCallBackFunction}
                                                          fileParentCallBack={this.fileUploadCallBackFunction}/></Col>
                <Row><br/></Row>


                <Col md={{ span: 12, offset: 0 }}><ResponseCard ParentCallBack={this.finalDecisionCallBackFunction}/></Col>
                <Row><br/></Row>
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button className="bg-primary text-white"
                onClick={this.handleChange}>Submit</Button></Col>
                </Row>
                </Form.Group>
                <Row><br/></Row>
                
                </Card>

                

                <Row><br/></Row>
                <Row><br/></Row>
                </Col>
            </React.Fragment>
        )
      }

}


export default sourcingFeedback;
