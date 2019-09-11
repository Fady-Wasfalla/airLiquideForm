import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse} from "react-bootstrap";
import ResponseDisplay from './responseDisplay'
import PdiDisplay from './pdiDisplay'
import axios from 'axios'



class fleatDisplay extends Component {

    state = {
        data:{},
        open:false,
      }
    async componentWillMount(){
      this.setState({data:this.props.PdiData})

    }

    handleChange=()=>{

    }

     
      render() {
        let newResponseData = this.props.PdiData
        let ResponseData = Object.assign([{}],newResponseData)
        console.log("##",ResponseData)
        return (
            <React.Fragment>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Fleat Feedback</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                 }}>☰</Button>
                 </Row>
                </Card.Header>                
                <Row><br/></Row>
                <Collapse in={this.state.open}>
                
                <Form>

                <Col md={{ span: 12, offset: 0 }}><PdiDisplay FireExt={ResponseData.fireExtinguishers} Data={ResponseData.pdi}/>
                </Col>
                <Row><br/><br/></Row>
                <Col md={{ span: 12, offset: 0 }}><ResponseDisplay FinalDecision={ResponseData.pdi} 
                AP={ResponseData.pdiAP} Files={ResponseData.pdiFiles}/>
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


export default fleatDisplay;
