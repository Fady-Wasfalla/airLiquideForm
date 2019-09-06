import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

class customerBiDisplay extends Component {

    state = {
        name:"",
        date: new Date(),
        address:"",
        zone:"",
        address:"",

        open:false,
    }
    componentWillMount(){
        console.log(17)
        console.log(this.props)
    } 
      render() {
          let cbiChange = this.props.CBI
          let cbi = Object.assign([{}],cbiChange)
          let cpChange = this.props.CP
          let newCP = Object.assign([{}],cpChange)
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Customer Basics Info</Col>
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

                        <Form.Row>
                            <Form.Group as={Col} >
                                    <Form.Label style={{fontWeight:"bold"}}>Customer name</Form.Label>
                                    <Card.Text>{cbi.name}</Card.Text>
                            </Form.Group>
                            <Form.Group as={Col} >
                                    <Form.Label style={{fontWeight:"bold"}}>Form ID </Form.Label>
                                    <Card.Text># {cbi.id}</Card.Text>
                            </Form.Group>
                            <Form.Group as={Col} >
                                    <Form.Label style={{fontWeight:"bold"}}>Submission Date</Form.Label>
                                    <Card.Text># {cbi.date}</Card.Text>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} >
                                    <Form.Label style={{fontWeight:"bold"}}>Customer Full Address</Form.Label>
                                    <Card.Text>{cbi.address}</Card.Text>
                            </Form.Group>   
                        </Form.Row>

                        <Row><br/></Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                    <Form.Label style={{fontWeight:"bold"}}>Contact Person</Form.Label>
                            </Form.Group>   
                        </Form.Row>
                        <Form.Row>
                            <Col md={3}>
                                <Form.Label style={{textDecoration:"underline"}}>Name</Form.Label>                                
                            </Col>

                            <Col md={3}>
                                <Form.Label style={{textDecoration:"underline"}}>Title</Form.Label>                                                                
                            </Col>

                            <Col md={3}>
                                <Form.Label style={{textDecoration:"underline"}}>Phone</Form.Label>
                            </Col>

                            <Col md={3}>
                                <Form.Label style={{textDecoration:"underline"}}>Email</Form.Label>
                            </Col>
                        </Form.Row>

                        { newCP.map((e,index)=>{
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


export default customerBiDisplay;
