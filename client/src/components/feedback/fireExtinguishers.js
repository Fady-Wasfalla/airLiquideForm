import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class fireExtinguishers extends Component {

    state = {
        number:[],
        capacity:[],
      }

      addFireExtinguishers(){
       
        this.setState({number:[... this.state.number,""]})
        this.setState({capacity:[... this.state.capacity,""]})
      }

      handleChangeNumber(e,index){
        this.state.number[index] = e.target.value
        this.setState({number:this.state.number})
        this.props.ParentCallBack(this.state)
      }

      handleChangeCapacity(e,index){
        this.state.capacity[index] = e.target.value
        this.setState({capacity:this.state.capacity})
        this.props.ParentCallBack(this.state)
      }

      removeFireExtinguishers(index){
        this.state.number.splice(index,1)
        this.setState({number:this.state.number})
        this.state.capacity.splice(index,1)
        this.setState({capacity:this.state.capacity})
        this.props.ParentCallBack(this.state)
      }

      render() {
        return (
            <React.Fragment>
                <label>Fire Extinguishers</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFireExtinguishers(e)}
                >＋</Button>
                <Row>
                <Col md={3}>
                {
                    this.state.number.map((number,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="numberNumber">
                                    <Form.Label>Number</Form.Label>
                                    <Form.Control type={"number"} step={0.01}
                                    onChange={(e)=>this.handleChangeNumber(e , index)} value={number} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col md={3}>
                {
                    this.state.capacity.map((capacity,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="capacity">
                                    <Form.Label>Capacity</Form.Label>
                                    <Form.Control type={"number"} step={0.01}
                                    onChange={(e)=>this.handleChangeCapacity(e , index)} value={capacity} />
                                    </Form.Group>
                                    <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                                        onClick={()=>this.removeFireExtinguishers(index)}>✘</Button>
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


export default fireExtinguishers;
