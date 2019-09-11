import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'
import Select from "react-select"

class fluids extends Component {

    state = {
            fluidOrProduct:[""] ,
            extremePressure:[""],
            extremeTemperature:[""],
            maximumFlow:[""] ,
            volumeStored:[""] ,
            characteristics:[""] ,
            nature1:[""],
            nature2:[""],
            nature3:[""],
            natureOther:[""],
    }

    addFluid = () => {
        this.setState({fluidOrProduct:[... this.state.fluidOrProduct,""]})
        this.setState({extremePressure:[... this.state.extremePressure,""]})
        this.setState({extremeTemperature:[... this.state.extremeTemperature,""]})
        this.setState({maximumFlow:[... this.state.maximumFlow,""]})
        this.setState({volumeStored:[... this.state.volumeStored,""]})
        this.setState({characteristics:[... this.state.characteristics,""]})
        this.setState({nature1:[... this.state.nature1,""]})
        this.setState({nature2:[... this.state.nature2,""]})
        this.setState({nature3:[... this.state.nature3,""]})
        this.setState({natureOther:[... this.state.natureOther,""]})
    }

    removefluid = (index) => {
        this.state.fluidOrProduct.splice(index,1)
        this.setState({fluidOrProduct:this.state.fluidOrProduct})
        this.state.extremePressure.splice(index,1)
        this.setState({extremePressure:this.state.extremePressure})
        this.state.extremeTemperature.splice(index,1)
        this.setState({extremeTemperature:this.state.extremeTemperature})
        this.state.maximumFlow.splice(index,1)
        this.setState({maximumFlow:this.state.maximumFlow})
        this.state.volumeStored.splice(index,1)
        this.setState({volumeStored:this.state.volumeStored})
        this.state.characteristics.splice(index,1)
        this.setState({characteristics:this.state.characteristics})
        this.state.nature1.splice(index,1)
        this.setState({nature1:this.state.nature1})
        this.state.nature2.splice(index,1)
        this.setState({nature2:this.state.nature2})
        this.state.nature3.splice(index,1)
        this.setState({nature3:this.state.nature3})
        this.state.natureOther.splice(index,1)
        this.setState({natureOther:this.state.natureOther})
        this.props.ParentCallBack(this.state)
   
    }

    fluidOrProductHandleChange(e,index){
        this.state.fluidOrProduct[index] = e.target.value
        this.setState({fluidOrProduct:this.state.fluidOrProduct})
        this.props.ParentCallBack(this.state)
    }
    
    extremePressureHandleChange(e,index){
        this.state.extremePressure[index] = e.target.value
        this.setState({extremePressure:this.state.extremePressure})
        this.props.ParentCallBack(this.state)
    }

    extremeTemperatureHandleChange(e,index){
        this.state.extremeTemperature[index] = e.target.value
        this.setState({extremeTemperature:this.state.extremeTemperature})
        this.props.ParentCallBack(this.state)
    }

    maximumFlowHandleChange(e,index){
        this.state.maximumFlow[index] = e.target.value
        this.setState({maximumFlow:this.state.maximumFlow})
        this.props.ParentCallBack(this.state)
    }

    volumeStoredHandleChange(e,index){
        this.state.volumeStored[index] = e.target.value
        this.setState({volumeStored:this.state.volumeStored})
        this.props.ParentCallBack(this.state)
    }

    characteristicsHandleChange(e,index){
        this.state.characteristics[index] = e.target.value
        this.setState({characteristics:this.state.characteristics})
        this.props.ParentCallBack(this.state)
    }

    nature1HandleChange(e,index){
        this.state.nature1[index] = e.value
        this.setState({nature1:this.state.nature1})
        this.props.ParentCallBack(this.state)
    }

    nature2HandleChange(e,index){
        this.state.nature2[index] = e.value
        this.setState({nature2:this.state.nature2})
        this.props.ParentCallBack(this.state)
    }

    nature3HandleChange(e,index){
        this.state.nature3[index] = e.value
        this.setState({nature3:this.state.nature3})
        this.props.ParentCallBack(this.state)
    }

    natureOtherHandleChange(e,index){
        this.state.natureOther[index] = e.target.value
        this.setState({natureOther:this.state.natureOther})
        this.props.ParentCallBack(this.state)
    }

    validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
    }

    

      render() {
        return (
            <React.Fragment>
                 <label>Fluid</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFluid(e)}
                >＋</Button>
                <Form>
                {
                    this.state.fluidOrProduct.map((val,index)=>{
                        return (
                            <Col md={12}>
                            <Card border="secondary">
                            <Card.Header>
                            
                            <Col >
                            <Row>
                            <Card.Text style={{ color:"black" , fontSize:"18px" }}>Fluid Information</Card.Text>
                            <Col md={{offset:10}}><Button variant="outline" 
                                onClick={(e)=>this.removefluid(index)}>✗</Button></Col>
                            </Row>
                            </Col></Card.Header>
                            <Row><br/></Row>                   
                            
                            <Col md={12}>
                            <Form>
                                <Form.Row>
                                            <Form.Group as={Col} >
                                            <Form.Label>Fluid / Product {this.props.ind} </Form.Label>
                                            <Form.Control as="textarea" rows="1" 
                                            onChange={(e)=>this.fluidOrProductHandleChange(e , index)} value={this.state.fluidOrProduct[index]}/>
                                            </Form.Group>
                                            

                                            <Form.Group as={Col} >
                                            <Form.Label>Extreme pressure (Bar)</Form.Label>
                                            <Form.Control type={"number"} step={0.1}  
                                            onChange={(e)=>this.extremePressureHandleChange(e , index)} value={this.state.extremePressure[index]} />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label>Extreme temperature (°C)</Form.Label>
                                            <Form.Control type={"number"} step={0.1} 
                                            onChange={(e)=>this.extremeTemperatureHandleChange(e , index)} value={this.state.extremeTemperature[index]} />
                                            </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                
                                            <Form.Group as={Col} >
                                            <Form.Label>Maximum flow (Nm3/hr)</Form.Label>
                                            <Form.Control type={"number"} step={0.1}  
                                            onChange={(e)=>this.maximumFlowHandleChange(e , index)} value={this.state.maximumFlow[index]} />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label>Volume stored(Ltrs / Cyls.)</Form.Label>
                                            <Form.Control type={"number"} step={0.1}  
                                            onChange={(e)=>this.volumeStoredHandleChange(e , index)} value={this.state.volumeStored[index]} />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label>Characteristics(Purity...)</Form.Label>
                                            <Form.Control type={"number"} step={0.1}  
                                            onChange={(e)=>this.characteristicsHandleChange(e , index)} value={this.state.characteristics[index]} />
                                            </Form.Group>

                                </Form.Row>
                                
                                <Form.Row>
                                            <Col md={12}>
                                            <Card border="secondary">
                                            <Form.Row>
                                            <Form.Group as={Col} >
                                            <Form.Label>Natures <span style={{color:"red"}}>✶</span></Form.Label>
                                            </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                            <Form.Group as={Col} >
                                                <Select
                                                value={this.state.nature1[index].value}
                                                onChange={(e)=>{this.nature1HandleChange(e,index)}}
                                                options={ [
                                                            { value: 'Flammable', label: 'Flammable' },
                                                            { value: 'Oxidizer', label: 'Oxidizer' },
                                                            { value: 'Explosive', label: 'Explosive' },
                                                            { value: 'Toxic', label: 'Toxic' },
                                                            { value: 'Pyrophoric', label: 'Pyrophoric' },
                                                            { value: 'Suffocating', label: 'Suffocating' },
                                                            { value: 'Corrosive', label: 'Corrosive' },

                                                        ]}
                                                />
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} >
                                                <Select
                                                value={this.state.nature2[index].value}
                                                onChange={(e)=>{this.nature2HandleChange(e,index)}}
                                                options={ [
                                                            { value: 'Flammable', label: 'Flammable' },
                                                            { value: 'Oxidizer', label: 'Oxidizer' },
                                                            { value: 'Explosive', label: 'Explosive' },
                                                            { value: 'Toxic', label: 'Toxic' },
                                                            { value: 'Pyrophoric', label: 'Pyrophoric' },
                                                            { value: 'Suffocating', label: 'Suffocating' },
                                                            { value: 'Corrosive', label: 'Corrosive' },

                                                        ]}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                                <Select
                                                value={this.state.nature3[index].value}
                                                onChange={(e)=>{this.nature3HandleChange(e,index)}}
                                                options={ [
                                                            { value: 'Flammable', label: 'Flammable' },
                                                            { value: 'Oxidizer', label: 'Oxidizer' },
                                                            { value: 'Explosive', label: 'Explosive' },
                                                            { value: 'Toxic', label: 'Toxic' },
                                                            { value: 'Pyrophoric', label: 'Pyrophoric' },
                                                            { value: 'Suffocating', label: 'Suffocating' },
                                                            { value: 'Corrosive', label: 'Corrosive' },

                                                        ]}
                                                />
                                            </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                            <Form.Group as={Col} >
                                            <Row style={{height: .044*window.innerHeight + 'px'}}/>
                                            <Form.Control as="textarea" rows="2" 
                                            placeHolder={"if there are more than three natures , Write them all here"}
                                            onChange={(e)=>this.natureOtherHandleChange(e , index)} value={this.state.natureOther[index]}/>
                                            </Form.Group>
                                            </Form.Row>

                                            </Card>
                                            <Row><br/></Row>
                                            </Col>    
                                </Form.Row>      
                            </Form>
                            </Col>
                            
                            </Card>
                            <Row><br/></Row>
                            </Col>
                        )
                    })
                }
                </Form>
                
            </React.Fragment>
        )
      }

}


export default fluids;
