import React, { Component } from "react";
import { Form , Col , Row , Card, Button , InputGroup ,FormControl} from "react-bootstrap";
import Select from "react-select"
import 'mdbreact/dist/css/mdb.css'

class utilities extends Component {

    state = {
        utility:[""],
        details:[""],
      }

      addUtilities(){
        this.setState({utility:[... this.state.utility,""]})
        this.setState({details:[... this.state.details,""]})
      }

      utilityHandleChange(e,index){
        this.state.utility[index] = e.value
        this.setState({utility:this.state.utility})
        this.props.ParentCallBack(this.state)
      }

      detailsHandleChange(e,index){
        this.state.details[index] = e.target.value
        this.setState({details:this.state.details})
        this.props.ParentCallBack(this.state)
      }

      removeUtilities(e,index){
        this.state.utility.splice(index,1)
        this.setState({utility:this.state.utility})
        this.state.details.splice(index,1)
        this.setState({details:this.state.details})
        this.props.ParentCallBack(this.state)
      }

      render() {
        return (
            <React.Fragment>
                <label>Utilities supplied by the customer</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addUtilities(e)}
                >＋</Button>
                <Row>
                <Col md={4}>
                {
                    this.state.utility.map((utility,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                    <Form.Label>Utility</Form.Label>
                                    
                                    <Row>
                                        <Col>
                                            <Select
                                            placeholder="Please choose Utility"
                                            value={"Please choose Utility"}
                                            onChange={(e)=>this.utilityHandleChange(e , index)}
                                            options={ [
                                                { value: 'Electricity', label: 'Electricity' },
                                                { value: 'Potable Water', label: 'Potable Water' },
                                                                    { value: 'Landline', label: 'Landline' },
                                                                    { value: 'Civil Works', label: 'Civil Works' },
                                                                    { value: 'Cranes', label: 'Cranes' },
                                                                    { value: 'Others', label: 'Others' },
                                                                ]}
                                                                />
                                            </Col>
                                            <Col>
                                            <Card.Text>Utility :{utility}</Card.Text>
                                            </Col>

                                    </Row>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col >
                {
                    this.state.details.map((details,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                    <Form.Label>Details</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.detailsHandleChange(e , index)} value={details} />
                                    </Form.Group>
                                    <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                                        onClick={(e)=>this.removeUtilities(e,index)}>✘</Button>
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


export default utilities;
