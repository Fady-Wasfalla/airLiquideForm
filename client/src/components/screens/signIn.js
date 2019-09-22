import React ,{ Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import axios from 'axios';
import {InputGroup,FormControl,Row,Col,Card} from "react-bootstrap";
import { Route, Redirect } from 'react-router-dom'
const padding = {margin: '20'};
const image1 =require('../../images/Air-Liquide.jpg')
const style = { backgroundImage:" url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg=="}


class signIn extends Component  {
    
    state = {
        userName:"",
        password:"",
        type:"password"
    }
  
    submit =(event)=>{
        event.preventDefault();
         axios
        .post('http://localhost:8000/api/employees/login',this.state)  
        .then( (res) => { if (res.data.status === 'Failed'){
                              alert(res.data.message)
                          }else{
                          window.localStorage.setItem('sysEmployeeName', res.data.data)
                          window.location.assign('http://localhost:3000/home')
                        }
      })
        .catch(err => alert(err.message))
    }

    handleClick = () => this.setState(({type}) => ({
      type: type === 'text' ? 'password' : 'text'
    }))

    

    render(){
        console.log(this.state)
    return (
      <React.Fragment>
        <Col md={12}>
        <Row style={{height: .09*window.innerHeight + 'px'}}>  </Row>
        <legend  className="the-legend" style={{color: "#428bca"}}>Sign in</legend>
        <Form onSubmit={this.submit}>
        <Row style={{height: .1*window.innerHeight + 'px'}}>  </Row>
        <Row>
            <Col md={{span:3,offset:0}}/>
            <Col md={{offset:0,span:3}}>
            <Form.Label style={{color: "#428bca"}}>User name</Form.Label>
            <FormControl type="mail" placeholder="User Name" required
                onChange={(e) => {this.setState({userName:e.target.value})}} />
            <Form.Label style={{color: "#428bca"}}>Password</Form.Label>
            <FormControl type={this.state.type} placeholder="Password" 
                onChange={(e) => {this.setState({password:e.target.value})}} required />
                <Row>
                <Col md={{span:10}}/>  <Button variant="outline" onClick={this.handleClick}>👁‍</Button></Row>
            </Col>

            <Col md={{offset:0,span:3}}>
                <img width={.15*window.innerWidth} height={.3*window.innerHeight} src={image1} />
            </Col>
        </Row>
        <Col md={{offset:5,spin:1}}>
        <Button type="submit">Log in</Button>
        </Col>
        </Form>
        
        </Col>
      </React.Fragment>        
  )
    
  }
  
}





export default signIn
