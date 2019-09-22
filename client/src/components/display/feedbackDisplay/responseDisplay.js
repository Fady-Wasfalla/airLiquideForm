import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";




class responseDisplay extends Component {

    state = {
        data:{},
        displayComment:"none",
        displayAP:"none"
      }
    
    display=(e)=>{
        if (e){
            return ""
        }else{
            return "none"
        }
    }
    displayComment=(e)=>{
        if (e === "Approve with recommendation"){
            return "none"
        }else{
           return ""
        }
    }

    displayAP=(e)=>{
        if (e === "Approve with recommendation"){
            return ""
        }else{
            return "none"
        }
    }

    displayFiles=(e)=>{
        if (e.length>0){
            return ""
        }else{
            return "none"
        }
    }

    handleChange=(e)=>{
        
    }

     
      render() {
        let decisionChange = this.props.FinalDecision
        let decision = Object.assign([{}],decisionChange)
        let apChange = this.props.AP
        let ap = Object.assign([{}],apChange)
        let filesChange = this.props.Files
        let files = Object.assign([],filesChange)
        
        return (
            <React.Fragment>
                
                <Col  md={{ span: 12, offset: 0 }}>

                    <Form.Row>
                                <Form.Group as={Col} >
                                        <Form.Label style={{fontWeight:"bold"}}>Decision : </Form.Label>
                                        <Form.Row>
                                        <Col md={{offset:1}}>
                                        <Card.Text>{decision.decision}</Card.Text></Col> </Form.Row>
                                </Form.Group>
                    </Form.Row>


                    <Form style={{display:this.display(decision.decision)}}>

                    <Form.Row style={{display:this.displayAP(decision.decision)}}>
                        <Form.Group as={Col} >
                                <Form.Label style={{fontWeight:"bold"}}>Action Plan : </Form.Label>
                                { ap.map((e,index)=>{
                                        return(
                                            <Form>
                                                <Form.Row>
                                                        <Col md={{offset:1}}>
                                                            <Form.Label >{index+1}{" . "}{ap[index].actions}</Form.Label>                                                                
                                                        </Col>
                                                    </Form.Row>
                                            </Form>
                                        )
                                    })}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{display:this.displayComment(decision.decision)}}>
                                <Form.Group as={Col} >
                                        <Form.Label style={{fontWeight:"bold"}}>Comment : </Form.Label>
                                        <Card.Text>{decision.decisionComment}</Card.Text>
                                </Form.Group>
                    </Form.Row>

                    </Form>

                    <Form.Group as={Col} style={{display:this.displayFiles(files)}}>
                    <Row>
                            <Form.Label style={{fontWeight:"bold"}}>Files: </Form.Label>
                                { files.map((e,index)=>{
                                        return(
                                            <Col md={{offset:0,span:3}}>                                                    
                                                <Button variant="link" size={"sm"} href= {"http://localhost:8000/"+files[index].path} target="_blank"
                                                style={{textDecoration:"underline", color:"black" ,  fontSize:"14px"}}>
                                                    {files[index].name+" ▼ "}</Button>
                                            </Col>
                                        )
                                })}
                    </Row>
                    </Form.Group>
                

                </Col>
                
            </React.Fragment>
        )
      }

}


export default responseDisplay;
