import React, { Component } from "react";
import { Form , Col , Row , Card, Button  , Spinner } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "reactjs-popup";
import axios from 'axios'
import ShowPermission from './showPermission'

class editEmployee extends Component {

    state = {
        userName:"",
        email:"",
        departement:"",
        loading: true,
        displayedPermission:[],
        allPermission:[],
        search:""
    }

    componentWillMount(){
        
        this.setState({loading: true})
        axios
        .get('http://localhost:8000/api/employees/getPermissions')
        .then(res =>{   this.setState({displayedPermission:res.data.data , loading: false})
                        this.setState({allPermission:res.data.data , loading: false})})
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
            return <Card.Text style={{color:"green"}}>Activated</Card.Text>
        }
        else{
            return <Card.Text style={{color:"red"}}>Deactivated</Card.Text>
        }
    }

    filter=(e)=>{
        this.setState({search:e})
        let employees = this.state.allPermission
        let displayed=[]
        for (let i=0;i<employees.length;i++){
            if ((employees[i].userName).toLowerCase().includes(e.toLowerCase())){
                    displayed = displayed.concat(employees[i])
            }
        }
        this.setState({displayedPermission:displayed})
    }

    showPermissionMark =(dept,e)=>{
        for(let i=0 ; i<e.length ; i++){
            if (e[i].Screen.name===dept){
                if (e[i].enabled===true){
                    return <Card.Text style={{color:"green"}}>✔</Card.Text>
                }else{
                    return <Card.Text style={{color:"red"}}>✘</Card.Text>
                }
            }
        }
    }

      
     
      render() {
          return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <br/>
                <Card border="secondary" >
                    <Row>
                    <Col>
                    <Row style={{height: .04*window.innerHeight + 'px'}}/>
                    <Form.Label style={{ fontSize:"20px" , fontWeight:"bold"}}>Edit Permissions</Form.Label>
                    </Col>
                    <Col>
                    <Form.Label>Search :</Form.Label>
                    <Form.Control as="textarea" rows="1" onChange={(e)=>{{this.filter(e.target.value)}}}/>
                    </Col>
                    </Row>
                <Row><br/></Row>
                </Card>
                <Row><br/></Row>
                <Col md={12}>
                <Row>
                {
                        this.state.displayedPermission.map((e,index)=>{
                            return (
                                <Col md={{offset:0,span:6}}>
                                <Card border="primary" bg="light">
                               
                                <Row><br/></Row>
                                <Col md={12}>
                               
                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Name : </Card.Text>
                                        <Card.Text>{this.state.displayedPermission[index].userName} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>E-Mail : </Card.Text>
                                        <Card.Text>{this.state.displayedPermission[index].email} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Departement : </Card.Text>
                                        <Card.Text>{this.state.displayedPermission[index].departement} </Card.Text>
                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Status : </Card.Text>
                                        <Card.Text style={{fontWeight:"bold"}}>{this.displayActivation(this.state.displayedPermission[index].activation)}</Card.Text>
                                    </Form.Row>
                                    <br/>
                                    <Form.Row>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>Distribution</Form.Label>
                                            <Form.Label>{this.showPermissionMark("Distribution",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>Sourcing</Form.Label>
                                            <Form.Label>{this.showPermissionMark("Sourcing",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>Fleat</Form.Label>
                                            <Form.Label>{this.showPermissionMark("Fleat",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>PR</Form.Label>
                                            <Form.Label>{this.showPermissionMark("PR",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>CI</Form.Label>
                                            <Form.Label>{this.showPermissionMark("CI",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>Sales</Form.Label>
                                            <Form.Label>{this.showPermissionMark("Sales",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>Finance</Form.Label>
                                            <Form.Label>{this.showPermissionMark("Finance",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col} md={{offset:0}}>
                                            <Form.Label style={{fontWeight:"bold"}}>Admin</Form.Label>
                                            <Form.Label>{this.showPermissionMark("Admin",this.state.displayedPermission[index].Permissions)}</Form.Label>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Col md={{offset:5}}>
                                        <Popup trigger={<Button variant="outline-danger"> Edit </Button>} modal><ShowPermission Data={this.state.displayedPermission[index]}/></Popup>
                                        </Col>
                                    </Form.Row>
                                
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
                <br/>
                <br/>
            </React.Fragment>
        )
      }

}


export default editEmployee;
