import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse , Spinner } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "reactjs-popup";
import Select from 'react-select'
import axios from 'axios'
import ShowEmployee from './showEmployee'

class editEmployee extends Component {

    state = {
        userName:"",
        email:"",
        departement:"",
        loading: true,
        displayedEmployee:[],
        allEmployee:[],
    }

    componentWillMount(){
        
        this.setState({loading: true})
        axios
        .get('http://localhost:8000/api/employees')
        .then(res =>{   this.setState({displayedEmployee:res.data.data , loading: false})
                        this.setState({allEmployee:res.data.data , loading: false})})
        .catch(err => alert(err.message))
    
    }

    addEmployee=()=>{
        axios
        .post('http://localhost:8000/api/employees',this.state)
        .then(res => alert("New Employee is added successfully"))
        .catch(err => alert(err.message))
    }

    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
    }

    displayActivation =(e)=>{
        if (e===true){
            return <Card.Text style={{color:"green"}}>✔</Card.Text>
        }
        else{
            return <Card.Text style={{color:"red"}}>✘</Card.Text>
        }
    }

      
     
      render() {
        return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <br/>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Edit Employee</Card.Header>
                <Row><br/></Row>
                <Col md={12}>

                    <Card border="primary">
                    <Card.Header>Add New Employee</Card.Header>
                    <br/>
                    <Col md={12}>
                    <Form onSubmit={this.addEmployee}>

                        <Form.Row>
                            
                            <Form.Group as={Col}>
                            <Form.Label>Name<span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1" required placeHolder="firstName . lastName"
                            onChange={(e)=>{this.setState({userName:e.target.value})}}/>
                            
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Mail<span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1" required placeHolder="email@example.com"
                            onChange={(e)=>{this.setState({email:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Departement<span style={{color:"red"}}>✶</span></Form.Label>
                            <Select
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

                        </Form.Row>

                        <Form.Row>
                            <Col md={{offset:5,span:1}}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    </Col>
                    <br/>
                    </Card>

                    <br/>
                    <Card border="primary">
                    <Card.Header>Edit Employee</Card.Header>
                    <br/>
                    <Col md={12}>
                    <Row>
                    
                    {
                        this.state.displayedEmployee.map((e,index)=>{
                            return (
                                <Col md={{offset:0,span:4}}>
                                <Card border="primary" bg="light">
                               
                                <Row><br/></Row>
                                <Col md={12}>
                                <Row>              
                                <Col md={7}>
                                <Form>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Name : </Card.Text>
                                        <Card.Text>{this.state.displayedEmployee[index].userName} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>E-Mail : </Card.Text>
                                        <Card.Text>{this.state.displayedEmployee[index].email} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Departement : </Card.Text>
                                        <Card.Text>{this.state.displayedEmployee[index].departement} </Card.Text>
                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Row>
                                        <Col md={{span:6}}>
                                        <Card.Text style={{fontWeight:"bold"}}>Activation :</Card.Text>
                                        </Col>
                                        <Col md={{span:1}}>
                                        {this.displayActivation(this.state.displayedEmployee[index].activation)}
                                        </Col>
                                        <Col md={{offset:1,span:1}}>
                                        <Popup trigger={<Button size="small" variant="outline-danger"> Edit </Button>} modal><ShowEmployee Data={this.state.displayedEmployee[index]}/></Popup>
                                        </Col>
                                        </Row>
                                    </Form.Row>
                                </Form>
                                </Col>
                                
                                <Form.Row>
                                <Col md={{offset:9,span:2}}>
                                </Col>
                                </Form.Row>

                                </Row>
                                </Col>
                                <Row><br/></Row>
                                </Card>
                                
                                <Row><br/></Row>
                                </Col>
                                
                            )
                        }
                        )
                    }
                    
                    </Row>
                    </Col>
                    <br/>
                    </Card>



                </Col>
                <br/>
                </Card>
                <br/>
                <br/>
            </React.Fragment>
        )
      }

}


export default editEmployee;
