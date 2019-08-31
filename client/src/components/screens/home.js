import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Form , Col , Row , Card, Button , Spinner } from "react-bootstrap";
import axios from 'axios'



class cases extends Component {

    state = {
    }

    componentDidMount(){
    }
    reDirect=(dept)=>{
        let path = ""
        switch(dept) {
            case "Distribution" :  path= "/cases/Distribution" ; break;
            case "Sourcing" : path= "/cases/Sourcing" ; break;
            case "Fleat" : path= "/cases/Fleat" ; break;
            case "PR" : path= "/cases/PR" ; break;
            case "CI" :  path= "/cases/CI" ; break;
            case "Sales" : path= "/cases/Sales" ; break;
            default:
              
          }
        this.props.history.push(path);
    }


    
      render() {
          let screensNames = this.props.screensNames
          console.log ("##",screensNames)
          console.log(this.props.screensNames)
          return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <Row><br/></Row>
                <Card.Text className="text-center" style={{ color:"black" , fontSize:"50px" , textDecoration:"underline" }}>
                            Welocme </Card.Text>
                <Col md={{ span: 12, offset: 0 }}>           
                <Row>
                    
                    {
                        this.props.screensNames.map((form,index)=>{
                            return (
                                <Col md={{offset:0,span:3}}>
                                <div className="shadow-box-example hoverable">
                                <Card border="primary" bg="light" onClick={(e)=>{this.reDirect(this.props.screensNames[index])}}>
                                <Card.Header as="h5" className="text-center"  variant="link">{this.props.screensNames[index]}</Card.Header>
                                </Card>
                                </div>
                                
                                <Row><br/></Row>
                                </Col>
                                
                            )
                        }
                        )
                    }
                    
                    </Row>

                    </Col>
            </React.Fragment>
        )
      }

}


export default cases;
