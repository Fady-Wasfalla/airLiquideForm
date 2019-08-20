import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FluidCard from './tryCard'
import 'mdbreact/dist/css/mdb.css'

class fluids extends Component {

    state = {
        fluidOrProduct:[],
        fluidOrProductState:[],
    }

    addFluid = () => {
        this.setState({fluidOrProduct:[... this.state.fluidOrProduct,""]})
    }

    removefluid(index){
        this.state.fluidOrProduct.splice(index,1)
        console.log(index)
        this.setState({fluidOrProduct:this.state.fluidOrProduct})   
        this.setState({fluidOrProduct:this.state.fluidOrProductState})   
    }

    callBackFunction = (Data,i) => {
        this.state.fluidOrProductState[i] = Data
    }

    handleChange =() =>{
        console.log(this.state.fluidOrProductState)
      }
      

      render() {
        return (
            <React.Fragment>
                 <label>Fluid</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFluid(e)}
                >＋</Button>
               
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
                                onClick={()=>this.removefluid(index)}>✗</Button></Col>
                            </Row>
                            </Col></Card.Header>
                            <Row><br/></Row>                   
                            <FluidCard ParentCallBack={this.callBackFunction} ind={index}/>
                            
                            </Card>
                            <Row><br/></Row>
                            </Col>
                        )
                    })
                }
            <Button onClick={this.handleChange}>Print</Button>
            </React.Fragment>
        )
      }

}


export default fluids;
