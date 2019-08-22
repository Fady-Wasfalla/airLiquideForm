import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class fluidCard extends Component {

    state = {
      display:{
        fluidOrProduct:this.props.data.fluidOrProduct ,
        extremePressure:this.props.data.extremePressure,
        extremeTemperature:this.props.data.extremeTemperature,
        maximumFlow:this.props.data.maximumFlow,
        volumeStored:this.props.data.volumeStored ,
        characteristics:this.props.data.characteristics,
        nature1:this.props.data.nature1,
        nature2:this.props.data.nature2,
        nature3:this.props.data.nature3,
        natureOther:this.props.data.natureOther,
        },
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

      sendData =(i)=>{
        this.props.ParentCallBack(this.state,i)
      }

      handle=()=>{
        this.sendData(this.props.ind)
      }

      render() {
        return (
            <React.Fragment>
              <Col md={12}>
            <Form>

                <Form.Row>
                            <Form.Group as={Col} >
                            <Form.Label>Fluid / Product {this.props.ind} </Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            value={this.state.display.fluidOrProduct}
                            onChange={(e)=>{this.setState({fluidOrProduct:e.target.value})}}/>
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
                            <Col md={12}>
                            <Card border="secondary">
                            <Form.Row>
                            <Form.Group as={Col} >
                            <Form.Label>Natures</Form.Label>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({nature1:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>
                            
                            <Form.Group as={Col} >
                            <Row style={{height: .044*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({nature2:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Row style={{height: .044*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="1" 
                            onChange={(e)=>{this.setState({nature3:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Row style={{height: .044*window.innerHeight + 'px'}}/>
                            <Form.Control as="textarea" rows="2" 
                            placeHolder={"if there are more than three fluids , Write them all here"}
                            onChange={(e)=>{this.setState({natureOther:e.target.value})
                            console.log(e.target.value)}}/>
                            </Form.Group>

                            </Form.Row>

                            <Button variant="outline" 
                                onClick={()=>this.props.remove(this.props.ind)}>✗</Button>
                            </Card>
                            <Row><br/></Row>
                            </Col>    
                </Form.Row>      


            </Form>
            </Col>
            </React.Fragment>
        )
      }

}


export default fluidCard;
