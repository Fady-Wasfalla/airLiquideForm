import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FormDisplay from '../display/formDisplay'
import ResponseCard from './responseCard'
import Upload from '../upload'
import axios from 'axios'



class distributionFeedback extends Component {

    state = {
        finalDecision:{},
        formId:0,
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
      if (this.state.data.distributionSubmition){
          this.setState({displayDecision:"none"})
      }else{
          this.setState({displayDecision:""})
      }

    }
    finalDecisionCallBackFunction = (childData) => {
        this.setState({finalDecision:childData})
    }

    handleChange=()=>{
      console.log(this.state)
      axios
      .post('http://localhost:8000/api/employees/distributionsFB',this.state)
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
                <Form.Group style={{display:this.state.displayDecision}}>
                <Col md={{ span: 12, offset: 0 }}><Upload nameParentCallBack={this.nameUploadCallBackFunction}
                                                          fileParentCallBack={this.fileUploadCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><ResponseCard ParentCallBack={this.finalDecisionCallBackFunction}/></Col>
                <Row><br/></Row>
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button className="bg-primary text-white" type="submit"
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


export default distributionFeedback;
