import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse} from "react-bootstrap";
import ResponseDisplay from './responseDisplay'
import IrmrDisplay from './irmrDisplay'




class prFeedback extends Component {

    state = {
        data:{},
        open:false,
      }
    async componentWillMount(){
      this.setState({data:this.props.PrData})

    }

    handleChange=()=>{

    }

     
      render() {
        let newResponseData = this.props.PrData
        let ResponseData = Object.assign([{}],newResponseData)
        console.log("##",ResponseData)
        return (
            <React.Fragment>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>PR Feedback</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                 }}>☰</Button>
                 </Row>
                </Card.Header>                
                <Row><br/></Row>
                <Collapse in={this.state.open}>
                
                <Form>

                <Col md={{ span: 12, offset: 0 }}><IrmrDisplay Data={ResponseData.irmr}/>
                </Col>
                <Row><br/><br/></Row>
                <Col md={{ span: 12, offset: 0 }}><ResponseDisplay FinalDecision={ResponseData.irmr} 
                AP={ResponseData.irmrAP} Files={ResponseData.irmrFiles}/>
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


export default prFeedback;
