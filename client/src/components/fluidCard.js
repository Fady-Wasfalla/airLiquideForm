import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class fluidCard extends Component {

    state = {
        fluidOrProduct :[],
        extremePressure:[],
        extremeTemperature:[],
        mail:[],
      }

    addFluid(){
        this.setState({fluidOrProduct:[... this.state.fluidOrProduct,""]})
        this.setState({extremePressure:[... this.state.extremePressure,""]})
        this.setState({extremeTemperature:[... this.state.extremeTemperature,""]})
        this.setState({mail:[... this.state.mail,""]})
      }

      handleChangeFluid(e,index){
        this.state.fluidOrProduct[index] = e.target.value
        this.setState({fluidOrProduct:this.state.fluidOrProduct})
        
      }
      handleChangeextremePressure(e,index){
        this.state.extremePressure[index] = e.target.value
        this.setState({extremePressure:this.state.extremePressure})
      }

      handleChangeextremeTemperature(e,index){
        this.state.extremeTemperature[index] = e.target.value
        this.setState({extremeTemperature:this.state.extremeTemperature})
      }

      handleChangeMail(e,index){
        this.state.mail[index] = e.target.value
        this.setState({mail:this.state.mail})
      }

      removefluid(index){
        this.state.fluidOrProduct.splice(index,1)
        this.setState({fluidOrProduct:this.state.fluidOrProduct})
        this.state.extremePressure.splice(index,1)
        this.setState({extremePressure:this.state.extremePressure})
        this.state.extremeTemperature.splice(index,1)
        this.setState({extremeTemperature:this.state.extremeTemperature})
        this.state.mail.splice(index,1)
        this.setState({mail:this.state.mail})
      }

      render() {
        return (
            <React.Fragment>
                <label>Fluid</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFluid(e)}
                >＋</Button>
               
                <Row>
                <Col md={2}>
                {
                    this.state.fluidOrProduct.map((fluid,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                    <Form.Label>Fluid or Product</Form.Label>
                                    <Form.Control as="textarea" rows="1" onChange={(e)=>this.handleChangeFluid(e , index)} value={fluid} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col md={2}>
                {
                    this.state.extremePressure.map((extremePressure,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                    <Form.Label>extremePressure</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.handleChangeextremePressure(e , index)}  value={extremePressure} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )

                    })
                }
                </Col>
                <Col md={2}>
                {
                    this.state.extremeTemperature.map((extremeTemperature,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                    <Form.Label>extremeTemperature Number</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.handleChangeextremeTemperature(e , index)} value={extremeTemperature} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col md={2}>
                {
                    this.state.mail.map((mail,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.handleChangeMail(e , index)} value={mail} />
                                    </Form.Group>
                                    <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                                        onClick={()=>this.removefluid(index)}>✘</Button>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                
                </Row>
              
              
            </React.Fragment>
        )
      }

}


export default fluidCard;
