import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FormDisplay from '../display/formDisplay'
import ResponseCard from './responseCard'
import Upload from '../upload'
import axios from 'axios'



class salesFeedback extends Component {

    state = {
        finalDecision:{},
        formId:0,
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
        .then(res => {this.setState({ data : res.data.data })
          console.log(res.data)})
        .catch(err => alert(err.message))
      }
    finalDecisionCallBackFunction = (childData) => {
        this.setState({finalDecision:childData})
    }

    handleChange=()=>{
      const fd = new FormData()
      let finalDecisionAsString = JSON.stringify(this.state.finalDecision)
      let filesNamesAsString = JSON.stringify(this.state.filesNames)
      fd.append('finalDecision', finalDecisionAsString)
      fd.append('formId',this.state.formId)
      fd.append('filesNames',filesNamesAsString)
      if(this.state.file){
        for(let i = 0 ; i<this.state.file.length; i++){
          fd.append('file',this.state.file[i])
        }
      }
      axios
      .post('http://localhost:8000/api/employees/financeFB',fd)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
      window.location.assign('http://localhost:3000/cases/Finance')
    }

    nameUploadCallBackFunction = (childData) => {
      this.setState({filesNames:childData})
    }

    fileUploadCallBackFunction = (childData) => {
      this.setState({file:childData})
    }
     
      render() {
        return (
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" className="text-white" style={{backgroundColor:"#375f9b"}}>Finance Feedback</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                <Col md={{ span: 12, offset: 0 }}><FormDisplay ShowAsk={"none"} formId={this.state.formId}/></Col>
                <Row><br/></Row>


                <Row><br/></Row>
                
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                </Col>
                
            </React.Fragment>
        )
      }

}


export default salesFeedback;
