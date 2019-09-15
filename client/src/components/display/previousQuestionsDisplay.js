import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

class previousQuestionsDisplay extends Component {

    state = {
        name:"",
        date: new Date(),
        address:"",
        zone:"",
        address:"",

        open:false,
    }

    showDateOnly=(e)=>{
        if(e){

            return e.substr(0,10)
        }
        return ""
    }

    
    
    
     
      render() {
          let qsChange = this.props.Data
          let qs = Object.assign([{}],qsChange)
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Previous Questions</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open})
                                }}>☰</Button>
                 </Row>
                </Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <Collapse in={this.state.open}>
                <fieldset disabled="disabled">
                    <Form>

                        {qs.map((e,index)=>{
                            return(
                                <Form>
                                     <Form.Row>
                                            <Col md={9}>
                                                <Form.Label >{index+1} {")"} {qs[index].question}</Form.Label>                                                            
                                            </Col>

                                            <Col md={3}>
                                                <Form.Label> Submition Date : #</Form.Label>
                                                <Form.Label >{this.showDateOnly(qs[index].submitionDate)}</Form.Label>                                                                
                                            </Col>                                           
                                        </Form.Row>

                                        <Form.Row>
                                            <Col md={9}>
                                                <Form.Label >{index+1}{" . "}{qs[index].answer}</Form.Label>                                                          
                                            </Col>

                                            <Col md={3}>
                                                <Form.Label> Replay Date : #</Form.Label>
                                                <Form.Label >{this.showDateOnly(qs[index].replayDate)}</Form.Label>                                                                
                                            </Col>   
                                        </Form.Row>
                                        <br/>
                                </Form>
                            )
                        })}

                        
                    </Form>
                    </fieldset>
                    </Collapse>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default previousQuestionsDisplay;
