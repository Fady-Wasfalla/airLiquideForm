import React, { Component } from "react";
import { Form , Col , Row , Card, Button  } from "react-bootstrap";
import ContactPerson from './contactPerson'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class customerBasicInfo extends Component {

    state = {
        name:"",
        date: new Date(),
        zone:"",
        address:"",
        contactPerson:{},
        fieldset:"",
        done:"✘",
        dodo:true
    }

    handleChange(date) {
        let x = date
        let hoursDiff = x.getHours() - x.getTimezoneOffset() / 60;
        let minutesDiff = (x.getHours() - x.getTimezoneOffset()) % 60;
        x.setHours(hoursDiff);
        x.setMinutes(minutesDiff);
        this.setState({date: x})
      }
    
    
    sendData =()=>{
        let sentData = Object.assign({},this.state)
        delete sentData.fieldset
        this.props.ParentCallBack(sentData)
    }

    submitData=(event)=>{
        this.setState({dodo:!this.state.dodo})
        event.preventDefault();
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled",
                           done:"✔" })
        }
        else{
            this.setState({fieldset:"",
                           done:"✘" })
        }
    }

    contactPersonCallBackFunction = (childData) => {
        this.setState({contactPerson:childData})
    }

    submissionColor=(e)=>{
        if (e==="✔"){
            return "green"
        }else{
            return "red"
        }
    }
      
     
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Form onSubmit={this.submitData}>
                <Card.Header as="h5" className="bg-dark text-white" > Customer Basics Info</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>
                        <Form.Row>
                            
                            <Form.Group as={Col} >
                            <Form.Label>Customer Name <span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1" required
                            onChange={(e)=>{this.setState({name:e.target.value})}}/>
                            
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Customer Zone <span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="1" required 
                            onChange={(e)=>{this.setState({zone:e.target.value})}} />
                            {/* <Form.Text className="text-muted"> 5555 </Form.Text> */}
                            </Form.Group>

                        </Form.Row>

                        <fieldset disabled={"disabled"}>
                        <Form.Row>
                        <Form.Group as={Col} controlId="customerName">
                            <Form.Label>Submission Date</Form.Label>
                            <br/>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                        </Form.Row>
                        </fieldset>

                        <Form.Row>
                            <Form.Group as={Col} controlId="textarea">
                            <Form.Label>Customer Full Address <span style={{color:"red"}}>✶</span></Form.Label>
                            <Form.Control as="textarea" rows="2" required
                            onChange={(e)=>{this.setState({address:e.target.value})}}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Col md={12}><ContactPerson ParentCallBack={this.contactPersonCallBackFunction}/></Col>
                        </Form.Row>
                        
                </fieldset>
                </Col>
                <Card.Footer > 
                            <Col md={{offset:5}} >
                            <Button type="submit" variant="outline" style={{color:this.submissionColor(this.state.done)}}>Check if done {this.state.done}</Button>
                            </Col> 
                            
                </Card.Footer>
                </Form>
                </Card>
            </React.Fragment>
        )
      }

}


export default customerBasicInfo;
