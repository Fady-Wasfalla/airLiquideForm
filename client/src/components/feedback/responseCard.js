import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class responseCard extends Component {

    state = {

        decision:""  , /* disapprove   approve   approve with recommendation */
        decisionComment:"", 
        actionPlan:[""],

        actionPlanDisplay:"none",
        commentDisplay:"none",
        fieldset:"",
      }

      addAP(){
        this.setState({actionPlan:[... this.state.actionPlan,""]})
      }

      ApHandleChange(e,index){
        this.state.actionPlan[index] = e.target.value
        this.setState({actionPlan:this.state.actionPlan})
      }

      removeAP(index){
        this.state.actionPlan.splice(index,1)
        this.setState({actionPlan:this.state.actionPlan})
        this.props.ParentCallBack(this.state)
      }

      commentHandleChange=()=>{
        this.props.ParentCallBack(this.state)
      }

    sendData =()=>{
        this.props.ParentCallBack(this.state)
    }

    submitData=()=>{
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled"})
        }
        else{
            this.setState({fieldset:""})
        }
    }

      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="text-black" >Final Decision</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>
                <Form>
                    <Form.Row >
                            <Form.Group as={Col} >
                            <Col md={12}>
                            <Row>
                            <Form.Label style={{fontWeight:"bold"}}> Decision </Form.Label>
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Approve" value={"Approve"}
                                name="decision" id="decision0"
                                onClick={(e) =>{
                                                this.setState({actionPlanDisplay:"none"})
                                                this.setState({commentDisplay:""})
                                                this.setState({decision:e.target.value})}} />  
                            <Col md={{span:1}}/>
                            <Form.Check type="radio" custom={true} label="Disapprove" value={"Disapprove"}
                                name="decision"id="decision1"
                                onClick={(e) =>{this.setState({decision:e.target.value})
                                                this.setState({actionPlanDisplay:"none"})
                                                this.setState({commentDisplay:""})}} /> 
                            <Col md={{span:1}}/>                            
                            <Form.Check type="radio" custom={true} label="Approve with recommendation" value={"Approve with recommendation"}
                                name="decision"id="decision2"
                                onClick={(e) =>{this.setState({decision:e.target.value})
                                                this.setState({actionPlanDisplay:""})
                                                this.setState({commentDisplay:"none"})}} /> 
                            </Row>
                            </Col>
                            </Form.Group>
                    </Form.Row>

                    <Form.Group style={{display:this.state.commentDisplay}}>
                            <Col md={{offset:1,span:10}}>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({decisionComment:e.target.value})
                                                                            this.props.ParentCallBack(this.state)}} />
                            </Col>
                    </Form.Group>

                    <Form.Group style={{display:this.state.actionPlanDisplay}}>
                    <label>Action Plan</label>  
                    <Button variant="outline"  
                    onClick={(e)=>this.addAP(e)}
                    >＋</Button>
                    <Row>
                    <Col md={9}>
                    {
                        this.state.actionPlan.map((actionPlan,index)=>{
                            return (
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="actionPlanactionPlan">
                                        <Form.Label>{index+1} .</Form.Label>
                                        <Form.Control as="textarea" rows="1"
                                        onChange={(e)=>this.ApHandleChange(e , index)} value={actionPlan} />
                                        </Form.Group>
                                        <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                                        onClick={()=>this.removeAP(index)}>✘</Button>
                                    </Form.Row>
                                </Form>
                            )
                        })
                    }
                    </Col>
                    </Row>
                    </Form.Group>
              
            </Form>
            </fieldset>
            
            </Col>
            <Card.Footer > 
                <Row style={{height: .018*window.innerHeight + 'px'}}>
                            <Col md={{offset:11}} >
                            <Form.Check id="submitResponse"
                            custom={true}
                            inline={true}
                            label="Submit"
                            onChange={this.submitData}/>
                            </Col> 
                </Row>
                </Card.Footer>
            </Card>
            </React.Fragment>
        )
      }

}


export default responseCard;
