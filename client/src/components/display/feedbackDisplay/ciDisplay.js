import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse} from "react-bootstrap";
import ResponseDisplay from './responseDisplay'




class ciDisplay extends Component {

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
      this.setState({data:this.props.CifResponseData})

    }

    handleChange=()=>{

    }

     
      render() {
        let newResponseData = this.props.CifResponseData
        let ResponseData = Object.assign([{}],newResponseData)
        return (
            <React.Fragment>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>CI Feedback</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                 }}>☰</Button>
                 </Row>
                </Card.Header>                
                <Row><br/></Row>
                <Collapse in={this.state.open}>
                
                <Form>

                <Col md={{ span: 12, offset: 0 }}><ResponseDisplay FinalDecision={ResponseData.cifResponse} 
                AP={ResponseData.cifAP} Files={ResponseData.cifFiles}/>
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


export default ciDisplay;
