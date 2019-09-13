import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse , Navbar } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import Select from 'react-select'

class showPermission extends Component {

    state = {
        employeeId:0,
        //status
        distribution:"",
        sourcing:"",
        fleat:"",
        pR:"",
        cI:"",
        sales:"",
        finance:"",
        admin:""
        
    }
    
    
    componentDidMount(){
        this.setState({employeeId:this.props.Data.id})
        this.setState({distribution:this.getPermissionStatus("Distribution",this.props.Data.Permissions)})
        this.setState({sourcing:this.getPermissionStatus("Sourcing",this.props.Data.Permissions)})
        this.setState({fleat:this.getPermissionStatus("Fleat",this.props.Data.Permissions)})
        this.setState({pR:this.getPermissionStatus("PR",this.props.Data.Permissions)})
        this.setState({cI:this.getPermissionStatus("CI",this.props.Data.Permissions)})
        this.setState({sales:this.getPermissionStatus("Sales",this.props.Data.Permissions)})
        this.setState({finance:this.getPermissionStatus("Finance",this.props.Data.Permissions)})
        this.setState({admin:this.getPermissionStatus("Admin",this.props.Data.Permissions)})
    }

    getPermissionStatus =(dept,e)=>{
        for(let i=0 ; i<e.length ; i++){
            if (e[i].Screen.name===dept){
                return e[i].enabled
            }
        }
    }
    
    handleChange=()=>{
        axios
        .put( 'http://localhost:8000/api/employees/editPermissions' , this.state)
        .then(res => alert("Employee permissions updated successfully"))
        .catch(err => alert(err.message))
    }

    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
    }

    deptDefault = (dept,e) =>{
        for(let i=0 ; i<e.length ; i++){
            if (e[i].Screen.name===dept){
                if (e[i].enabled===true){
                    return  { value: true, label: 'Enable' }
                }else{
                    return { value: false, label: 'Disable' }
                }
            }
        }
    }

    
     
      render() {
        let data= this.props.Data        
        return (
            <React.Fragment>
                <Card border="secondary" >
                    <Card.Header as="h5" className="bg-danger text-white"> Edit Employee's Permissions </Card.Header>
                    <Row><br/></Row>
                <Col md={12}>                
                <Form onSubmit={this.handleChange}>
                        
                    <Form.Row>
                            <Form.Group as={Col} md={{offset:0}}>
                            <Form.Label style={{fontWeight:"bold"}}>Name : </Form.Label>
                            <Form.Label>{data.userName} </Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} md={{offset:0}}>
                            <Form.Label style={{fontWeight:"bold"}}>E-Mail : </Form.Label>
                            <Form.Label>{data.email} </Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} md={{offset:0}}>
                            <Form.Label style={{fontWeight:"bold"}}>Departement : </Form.Label>
                            <Form.Label>{data.departement} </Form.Label>
                            </Form.Group>

                    </Form.Row>
                            
                    <Form.Row>
                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>Distribution</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("Distribution",data.Permissions)}
                            value={this.state.distribution.value}
                            onChange={(e)=>{this.setState({ distribution: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>

                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>Sourcing</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("Sourcing",data.Permissions)}
                            value={this.state.sourcing.value}
                            onChange={(e)=>{this.setState({ sourcing: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>
                    </Form.Row>

                    <Form.Row>
                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>Fleat</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("Fleat",data.Permissions)}
                            value={this.state.fleat.value}
                            onChange={(e)=>{this.setState({ fleat: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>

                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>PR</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("PR",data.Permissions)}
                            value={this.state.pR.value}
                            onChange={(e)=>{this.setState({ pR: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>
                    </Form.Row>

                    <Form.Row>
                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>CI</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("CI",data.Permissions)}
                            value={this.state.cI.value}
                            onChange={(e)=>{this.setState({ cI: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>

                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>Sales</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("Sales",data.Permissions)}
                            value={this.state.sales.value}
                            onChange={(e)=>{this.setState({ sales: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>
                    </Form.Row>

                    <Form.Row>
                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>Finance</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("Finance",data.Permissions)}
                            value={this.state.finance.value}
                            onChange={(e)=>{this.setState({ finance: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
                            </Form.Group>

                            <Form.Group as={Col} md={{span:6}}>
                            <Form.Label>Admin</Form.Label>
                            <Select
                            defaultValue={this.deptDefault("Admin",data.Permissions)}
                            value={this.state.admin.value}
                            onChange={(e)=>{this.setState({ admin: e.value})}}
                            options={ [
                                        { value: true,  label: 'Enable' },
                                        { value: false, label: 'Disable' },
                                    ]}
                            />
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


export default showPermission
