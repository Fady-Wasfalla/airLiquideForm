import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse} from "react-bootstrap";
import ResponseDisplay from './responseDisplay'
import axios from 'axios'



class distributionDisplay extends Component {

    state = {
        finalDecision:{dodo:false},
        formId:0,
        file:null,
        filesNames:[""],
        displayDecision:"none",
        data:{},
        open:false,
      }
    async componentWillMount(){
      this.setState({data:this.props.DistributionsResponseData})

    }

    handleChange=()=>{

    }

     
      render() {
        let newResponseData = this.props.DistributionsResponseData
        let ResponseData = Object.assign([{}],newResponseData)
        console.log(32,ResponseData)
        return (
            <React.Fragment>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Distribution Feedback</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                 }}>☰</Button>
                 </Row>
                </Card.Header>                
                <Row><br/></Row>
                <Collapse in={this.state.open}>
                
                <Form>

                <Col md={{ span: 12, offset: 0 }}><ResponseDisplay FinalDecision={ResponseData.distributions} 
                AP={ResponseData.distributionsAP} Files={ResponseData.distributionsFiles}/>
                </Col>
                <Row><br/></Row>
                </Form>
                </Collapse>
                </Card>

                <Row><br/></Row>

                </Col>
                
            </React.Fragment>
        )
      }

}


export default distributionDisplay;
