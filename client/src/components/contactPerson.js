import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class contactPerson extends Component {

    state = {
        contactPersonName :[],
        contactPersonWay:[]
      }

      addPerson(){
        this.setState({contactPersonName:[... this.state.contactPersonName,""]})
        this.setState({contactPersonWay:[... this.state.contactPersonWay,""]})
      }

      handleChangeName(e,index){
        this.state.contactPersonName[index] = e.target.value
        this.setState({contactPersonName:this.state.contactPersonName})
        
      }
      handleChangePhone(e,index){
        this.state.contactPersonWay[index] = e.target.value
        this.setState({contactPersonWay:this.state.contactPersonWay})
      }

      removePerson(index){
        this.state.contactPersonName.splice(index,1)
        this.setState({contactPersonName:this.state.contactPersonName})
        this.state.contactPersonWay.splice(index,1)
        this.setState({contactPersonWay:this.state.contactPersonWay})
      }

      render() {
        return (
            <React.Fragment>
                <label>Contact Person</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addPerson(e)}
                >＋</Button>
                <Row>
                <Col md={5}>
                {
                    this.state.contactPersonName.map((person,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="customerName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control as="textarea" rows="1" onChange={(e)=>this.handleChangeName(e , index)} value={person} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col md={5}>
                {
                    this.state.contactPersonWay.map((number,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="phone">
                                    <Form.Label>Way</Form.Label>
                                    <Form.Control as="textarea" rows="1" onChange={(e)=>this.handleChangePhone(e , index)}  value={number} />
                                    </Form.Group>
                                    <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                                        onClick={()=>this.removePerson(index)}>✘</Button>
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


export default contactPerson;
