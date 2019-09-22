import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Form, Col ,Row} from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
export class changePass extends Component {
  state= {
    firstPassword: undefined,
    secondPassword: undefined,
    oldPassword:undefined,
    userName:window.localStorage.getItem("sysEmployeeName"),
  }
  validateItem=(e)=>{
    const passwordRegx = /(?=.*[!@#$%^&*_])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return passwordRegx.test(this.state.firstPassword)? false : true 
  }
  render () {
    return (
        <React.Fragment>
                    <Form onSubmit={this.clicked}>
                    <Row style={{height: .15*window.innerHeight + 'px'}}/>                    
                    <Row>
                    <Col md={{offset:0,span:4}}/>
                    <Col md={{offset:0,span:4}}>
                    <Form.Row>
                            <Form.Group as={Col} controlId="textarea">
                            <Form.Label>Old Password <span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control type="password" required
                            onChange={(e)=>{this.setState({oldPassword:e.target.value})}}/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="textarea">
                        <Form.Label>New password <span style={{color:"red"}}>✶</span></Form.Label>
                        <Form.Control type="password" required
                        onChange={e => this.setState({ firstPassword: e.target.value })}/>
                        <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.availableDelivery)}/>
                        <Form.Text className="text-muted"> {this.validatePassword()? '': this.errors()[0]} </Form.Text>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="textarea">
                        <Form.Label>Confirm new password<span style={{color:"red"}}>✶</span></Form.Label>
                        <Form.Control type="password" required
                        onChange={e => this.setState({ secondPassword: e.target.value })}/>
                        <Form.Text className="text-muted"> {this.checkMatching()} </Form.Text>
                    </Form.Group>
                </Form.Row>
                <Row>
                  <Col md={{offset:0,span:4}}/>
                  <Col md={{offset:0,span:1}}>
                <Button variant='primary' type='submit' disabled={this.state.firstPassword!==this.state.secondPassword}>
                                    Submit
                </Button>
                </Col>
                </Row>
                </Col>
                </Row>
                </Form>
    </React.Fragment>
    )
  }
  validatePassword = () =>{
    const passwordRegx = /(?=.*[!@#$%^&*_])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return passwordRegx.test(this.state.firstPassword)? true : false 
  }
  errors = () => {
    var errors = []
    if(this.state.firstPassword){
    if (this.state.firstPassword.length < 8) {
      errors.push('Your password must be at least 8 characters')
    }
    if (this.state.firstPassword.search(/[a-z]/i) < 0) {
      errors.push('Your password must contain at least one small letter')
    }
    if (this.state.firstPassword.search(/[A-Z]/) < 0) {
      errors.push('Your password must contain at least one capital letter')
    }
    if (this.state.firstPassword.search(/[0-9]/) < 0) {
      errors.push('Your password must contain at least one digit.')
    }
    if (this.state.firstPassword.search(/[!@#$%^&*_]/) < 0) {
      errors.push('Your password must contain at least one special character like * ! ^ !')
    }
  }
    return errors
  }

  clicked = e => {
    e.preventDefault()
    axios
        .put('http://localhost:8000/api/employees/changePassword', this.state)
        .then(res =>{if(res.data.status==="Success"){
          alert(res.data.message)
          window.location.assign('http://localhost:3000/home') 
        } else{
          alert(res.data.message)
          }
        })
        .catch(error => alert(error.response.data.message))
    } 
    checkMatching = ()=>{
      if(!this.state.secondPassword){
        return ''
      }
      return  (this.state.firstPassword===this.state.secondPassword)? '' : `Passwords don't match`
    }
    
}

export default changePass