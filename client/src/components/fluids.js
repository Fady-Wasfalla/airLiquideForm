import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import FluidCard from './tryCard'
import 'mdbreact/dist/css/mdb.css'

class fluids extends Component {

    state = {
        fluidOrProduct:[],
       
    }

    addFluid = () => {
        this.setState({fluidOrProduct:[... this.state.fluidOrProduct,""]})
    }

    removefluid(index){
        this.state.fluidOrProduct.splice(index,1)
        this.setState({fluidOrProduct:this.state.fluidOrProduct})
    }
      

      render() {
        return (
            <React.Fragment>
                 <label>Fluid</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFluid(e)}
                >＋</Button>
               
                {
                    this.state.fluidOrProduct.map((fluid,index)=>{
                        return (
                            <Col>
                            <Card border="secondary">  
                            <Card.Header as="h2">Fluid Information</Card.Header>
                            <Row><br/></Row>                   
                            <FluidCard/>
                            <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                            onClick={()=>this.removefluid(index)}>✘</Button>
                            </Card>
                            <Row><br/></Row>
                            </Col>
                        )
                    })
                }
            
            </React.Fragment>
        )
      }

}


export default fluids;
