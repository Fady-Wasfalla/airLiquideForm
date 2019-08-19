import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class tryCard extends Component {

    state = {
        fluidOrProduct:"" ,
        extremePressure:0,
        extremeTemperature:0,
        maximumFlow:0 ,
        volumeStored:0 ,
        characteristics:0 ,
        nature1:"",
        nature2:"",
        nature3:"",
        natureOther:"",
      }

   

      render() {
        return (
            <React.Fragment>
              <Col md={12}>
            <Form>

                <Form.Row>
                            <Form.Group as={Col} >
                            <Form.Label>Fluid / Product</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({fluidOrProduct:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Extreme pressure (Bar)</Form.Label>
                            <Form.Control type={"number"} step={0.1}  onChange={(e)=>{this.setState({extremePressure:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Extreme temperature (°C)</Form.Label>
                            <Form.Control type={"number"} step={0.1}  onChange={(e)=>{this.setState({extremeTemperature:e.target.value})}} />
                            </Form.Group>
                </Form.Row>

                <Form.Row>
                
                            <Form.Group as={Col} >
                            <Form.Label>Maximum flow (Nm3/hr)</Form.Label>
                            <Form.Control type={"number"} step={0.1}  onChange={(e)=>{this.setState({maximumFlow:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Volume stored(Ltrs / Cyls.)</Form.Label>
                            <Form.Control type={"number"} step={0.1}  onChange={(e)=>{this.setState({volumeStored:e.target.value})}} />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Characteristics(Purity...)</Form.Label>
                            <Form.Control type={"number"} step={0.1}  onChange={(e)=>{this.setState({Characteristics:e.target.value})}} />
                            </Form.Group>

                </Form.Row>

                <Form.Row>
                            <Col md={4}>
                            <Card border="secondary">
                            <Form.Group as={Col} >
                            <Form.Label>Natures</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({fluidOrProduct:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>
                            
                            <Form.Group as={Col} >
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({fluidOrProduct:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({fluidOrProduct:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>
                            </Card>
                            </Col>          
                </Form.Row>


            </Form>
            </Col>
            </React.Fragment>
        )
      }

}


export default tryCard;
