import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class contactPerson extends Component {

    state = {
        contactPersons :[],
        numbers:[]
      }

      addPerson(){
        this.setState({contactPersons:[... this.state.contactPersons,""]})
        this.setState({numbers:[... this.state.numbers,""]})
      }

      handleChangeName(e,index){
        this.state.contactPersons[index] = e.target.value
        this.setState({contactPersons:this.state.contactPersons})
      }
      handleChangePhone(e,index){
        this.state.numbers[index] = e.target.value
        this.setState({numbers:this.state.numbers})
      }

      removePerson(index){
        this.state.contactPersons.splice(index,1)
        this.setState({contactPersons:this.state.contactPersons})
        this.state.numbers.splice(index,1)
        this.setState({numbers:this.state.numbers})
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
                    this.state.contactPersons.map((person,index)=>{
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
                    this.state.numbers.map((number,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
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
