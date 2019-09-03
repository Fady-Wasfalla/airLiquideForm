import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import ResponseCard from './responseCard'
import FormDisplay from '../display/formDisplay'
import Upload from '../upload'
import axios from 'axios'




class sourcingFeedback extends Component {

    state = {
      finalDecision:{},
      formId:0,
    }

    componentWillMount(){
      const formId  = this.props.match.params.id
      this.setState({formId:formId})
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
        console.log(this.state)
        axios
        .post('http://localhost:8000/api/employees/sourcingsFB',this.state)
        .then(res => alert(res.data.message))
        .catch(err => alert(err.message))
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
