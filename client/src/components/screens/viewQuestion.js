import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FormDisplay from '../display/formDisplay'
import axios from 'axios'



class viewQuestion extends Component {

    state = {
        finalDecision:{},
        formId:0,
        question:{},
        answer:"",
        replayDate : new Date(),
        displayDecision:"none",
        displayAnswer:"none",


      }
      async componentWillMount(){
      const formId  = this.props.match.params.formId
      this.setState({formId:formId})
      await  axios
        .get('http://localhost:8000/api/questions/'+this.props.match.params.questionId)
        .then(res => { this.setState({question:res.data.data}) })
        .catch(err => alert(err.message))
        if (this.state.question.answer){
            this.setState({displayDecision:"none" , displayAnswer:"" })
        }else{
            this.setState({displayDecision:"" , displayAnswer:"none"})
        }
    }

    handleChange=()=>{
        let sentData = Object.assign({},this.state)
        delete sentData.finalDecision
        delete sentData.formId
        delete sentData.question
        axios
        .put('http://localhost:8000/api/questions/'+this.props.match.params.questionId,sentData)
        .then(res => alert("Submitted Successfully"))
        .catch(err => alert(err.message))
      let href = "http://localhost:3000/getMyQuestions/" + window.localStorage.getItem("sysEmployeeName")
      window.location.assign(href)
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
                <Card.Header as="h4" className="text-white" style={{backgroundColor:"#375f9b"}}>Answer Question</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>

                <Col md={{ span: 12, offset: 0 }}><FormDisplay ShowAsk={"none"}  formId={this.state.formId}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 11, offset: 1 }}>
                <Form.Row>
                            <Form.Group as={Col} >
                                    <Form.Label style={{fontWeight:"bold"}}>{"Q)"}{this.state.question.question}</Form.Label>
                            </Form.Group>
                </Form.Row>

                <Form.Row>
                            <Form.Group as={Col} md={10} style={{display:this.state.displayAnswer}}>
                                <Form.Label style={{fontWeight:"bold"}}>Answer :</Form.Label>
                                <Card.Text>{this.state.question.answer}</Card.Text>
                            </Form.Group>
                </Form.Row>

                <Form.Row>
                            <Form.Group as={Col} md={10} style={{display:this.state.displayDecision}}>
                                <Form.Label style={{fontWeight:"bold"}}>Answer :</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({answer:e.target.value})}} />
                            </Form.Group>
                </Form.Row>

                </Col>
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Form.Group style={{display:this.state.displayDecision}}>
                <Button className="bg-primary text-white" type="submit"
                onClick={this.handleChange}>Submit</Button>
                </Form.Group>
                </Col>
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


export default viewQuestion;
