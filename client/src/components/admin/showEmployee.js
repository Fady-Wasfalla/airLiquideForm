import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse , Navbar } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

class showEmployee extends Component {

    state = {
        userName:"",
        email:"",
        departement:"",
        
    }
    
    
    componentDidMount(){
        this.setState({userName:this.props.Data.userName})
        this.setState({email:this.props.Data.email})
        this.setState({departement:this.props.Data.departement})
        this.setState({activation:this.props.Data.activation})
    }
    
    handleChange=()=>{
        
    }
    
    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
    }
    
     
      render() {
        let data= this.props.Data        
        return (
            <React.Fragment>
                <Card border="secondary" >
                    <Card.Header as="h5" className="bg-danger text-white"> Ask Question  </Card.Header>
                    <Row><br/></Row>
                <Col md={12}>                
                <Form onSubmit={this.handleChange}>
                    <Form.Row> 
                            <Form.Group as={Col}>
                            <Form.Label>Name<span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1"  
                            onChange={(e)=>{this.setState({userName:e.target.value})}}>{data.userName}</Form.Control>
                            <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.userName)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Mail<span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1"  
                            onChange={(e)=>{this.setState({email:e.target.value})}}>{data.email}</Form.Control>
                            <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.email)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Departement<span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({departement:e.target.value})}}>{data.departement}</Form.Control>
                             <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.departement)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Activation<span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="checkBox" rows="1" 
                            onChange={(e)=>{this.setState({activation:e.target.value})}}></Form.Control>
                            
                            </Form.Group>
                    </Form.Row>
                    <Form.Row>
                            <Col md={{offset:5,span:1}}>
                                <Button type="submit">Save</Button>
                            </Col>
                    </Form.Row>
                </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default showEmployee
