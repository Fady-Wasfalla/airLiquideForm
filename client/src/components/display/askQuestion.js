import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse , Navbar } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

class askQuestion extends Component {

    state = {

        formId:this.props.FormID,
        asker:window.localStorage.getItem("sysEmployeeName"),
        question:"",
        submitionDate :""
    }

    
    
    handleChange=()=>{
        axios
        .post('http://localhost:8000/api/questions',this.state)
        .then(res => alert("Your question is sent succefully to the sales man"))
        .catch(err => alert(err.message))
    }

   
    
     
      render() {
         
        return (
            <React.Fragment>
                <Card border="secondary" >
                    <Card.Header as="h5" className="bg-danger text-white"> Ask Question  </Card.Header>
                    <Row><br/></Row>
                <Col md={12}>                
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Questions</Form.Label>
                            <Form.Control as="textarea" rows="5" onChange={(e)=>{this.setState({question:e.target.value})}} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Col md={{offset:11,sapn:1}}>
                            <Button onClick={(e)=>{this.handleChange()}}>Ask</Button>
                        </Col>
                    </Form.Row>
                </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default askQuestion
