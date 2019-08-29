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

        open:true,
    }

    
    
    
     
      render() {
          let cpChange = this.props.CP
          let newCP = Object.assign([{}],cpChange)
          let cbi = this.props.CBI
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

                        {newCP.map((e,index)=>{
                            return(
                                <Form>
                                     <Form.Row>
                                            <Col md={3}>
                                                <Form.Label >{index+1}{" . "}{newCP[index].contactPersonName}</Form.Label>                                                                
                                            </Col>

                                            <Col md={3}>
                                                <Form.Label >{newCP[index].phone}</Form.Label>                                                                
                                            </Col>

                                            <Col md={3}>
                                                <Form.Label >{newCP[index].title}</Form.Label>
                                            </Col>

                                            <Col md={3}>
                                                <Form.Label >{newCP[index].mail}</Form.Label>
                                            </Col>
                                        </Form.Row>
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
