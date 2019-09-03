import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FormDisplay from '../display/formDisplay'
import Upload from '../upload'
import axios from 'axios'



class viewQuestion extends Component {

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

    handleChange=()=>{
      console.log(this.state)
      axios
      .post('http://localhost:8000/api/employees/distributionsFB',this.state)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
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

                
                
                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button className="bg-primary text-white" type="submit"
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


export default viewQuestion;
