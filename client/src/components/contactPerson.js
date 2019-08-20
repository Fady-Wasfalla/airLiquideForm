import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class contactPerson extends Component {

    state = {
        contactPersonName :[],
        title:[],
        phone:[],
        mail:[],
      }

      addPerson(){
        this.setState({contactPersonName:[... this.state.contactPersonName,""]})
        this.setState({title:[... this.state.title,""]})
        this.setState({phone:[... this.state.phone,""]})
        this.setState({mail:[... this.state.mail,""]})
      }

      handleChangeName(e,index){
        this.state.contactPersonName[index] = e.target.value
        this.setState({contactPersonName:this.state.contactPersonName})
      }
      handleChangeTitle(e,index){
        this.state.title[index] = e.target.value
        this.setState({title:this.state.title})
      }

      handleChangePhone(e,index){
        this.state.phone[index] = e.target.value
        this.setState({phone:this.state.phone})
      }

      handleChangeMail(e,index){
        this.state.mail[index] = e.target.value
        this.setState({mail:this.state.mail})
      }

      removePerson(index){
        this.state.contactPersonName.splice(index,1)
        this.setState({contactPersonName:this.state.contactPersonName})
        this.state.title.splice(index,1)
        this.setState({title:this.state.title})
        this.state.phone.splice(index,1)
        this.setState({phone:this.state.phone})
        this.state.mail.splice(index,1)
        this.setState({mail:this.state.mail})
      }

      render() {
        return (
            <React.Fragment>
                <label>Contact Person</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addPerson(e)}
                >＋</Button>
                <Row>
                <Col md={3}>
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
                <Col md={3}>
                {
                    this.state.title.map((title,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="phone">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.handleChangeTitle(e , index)}  value={title} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )

                    })
                }
                </Col>
                <Col md={3}>
                {
                    this.state.phone.map((phone,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="PhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control as="textarea" rows="1" placeHolder={"(+2) 01xxxxxxxxx"}
                                    onChange={(e)=>this.handleChangePhone(e , index)} value={phone} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col md={3}>
                {
                    this.state.mail.map((mail,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="Mail">
                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control as="textarea" rows="1" placeHolder={"mail@example.com"}
                                    onChange={(e)=>this.handleChangeMail(e , index)} value={mail} />
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
