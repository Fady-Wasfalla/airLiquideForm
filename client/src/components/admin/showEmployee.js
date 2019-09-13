import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse , Navbar } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import Select from 'react-select'

class showEmployee extends Component {

    state = {
        id:0,
        userName:"",
        email:"",
        departement:"",
        activation:"",
        
    }
    
    
    componentDidMount(){
        this.setState({id:this.props.Data.id})
        this.setState({userName:this.props.Data.userName})
        this.setState({email:this.props.Data.email})
        this.setState({departement:this.props.Data.departement})
        this.setState({activation:this.props.Data.activation})
    }
    
    handleChange=()=>{
        axios
        .put('http://localhost:8000/api/employees/'+this.state.id , this.state)
        .then(res => alert("Employee data updated successfully"))
        .catch(err => alert(err.message))
    }

    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
    }

    activationDefault=(e)=>{
        if (e===true){
            return  { value: true, label: 'Activated' }
            
        }
            return { value: false, label: 'Deactivated' }

    }

    deptDefault=(e)=>{
        return { value: e , label: e }
    }
    
     
      render() {
        let data= this.props.Data        
        return (
            <React.Fragment>
                <Card border="secondary" >
                    <Card.Header as="h5" className="bg-danger text-white"> Edit Employee </Card.Header>
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
                            <Select
                            defaultValue={this.deptDefault(data.departement)}
                            value={this.state.departement.value}
                            onChange={(e)=>{this.setState({ departement: e.value})}}
                            options={ [
                                        { value: 'Sales', label: 'Sales' },
                                        { value: 'Logistics', label: 'Logistics' },
                                        { value: 'Dept.1', label: 'Dept.1' },
                                        { value: 'Dept.2', label: 'Dept.2' },
                                    ]}
                            />
                             <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.departement)}/>
                            </Form.Group>

                            <Form.Group as={Col} md={{span:4}}>
                            <Form.Label>Activation</Form.Label>
                            <Select
                            defaultValue={this.activationDefault(data.activation)}
                            value={this.state.activation.value}
                            onChange={(e)=>{this.setState({ activation: e.value})}}
                            options={ [
                                        { value: true, label: 'Activated' },
                                        { value: false, label: 'Deactivated' },
                                    ]}
                            />
                             <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.activation)}/>
                            
                            </Form.Group>


                    </Form.Row>
                    <Form.Row>
                            <Col md={{offset:5,span:1}}>
                                <Button type="submit">Save</Button>
                            </Col>
                    </Form.Row>
                </Form>
                <br/>
                <br/>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default showEmployee
