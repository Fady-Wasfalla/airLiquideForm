import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Form , Col , Row , Card, Button , Spinner , ToggleButtonGroup ,ButtonToolbar,ToggleButton } from "react-bootstrap";
import axios from 'axios'



class questions extends Component {

    state = {
        allQuestions:[],
        pendingQuestions:[],
        submittedQuestions:[],
        displayedQuestion:[],
        loading: true,
        department:"",
        screensNames:[],
      }

     
    componentDidMount(){
    this.setState({loading: true})
    axios
    .get('http://localhost:8000/api/employees/getQuestions/'+this.props.match.params.userName)
    .then(res => {this.setState({displayedQuestion:res.data.allQuestions , loading: false})
    this.setState({allQuestions:res.data.allQuestions , loading: false})
    this.setState({pendingQuestions:res.data.pendingQuestions , loading: false})
    this.setState({submittedQuestions:res.data.submittedQuestions , loading: false})})
    .catch(err => alert(err.message))
    
    }

    submitionColor=(e)=>{
        if (e){
            return "green"
        }
        else{
            return "red"
        }
    }

    submitionSympol=(e)=>{
        if (e){
            return "✔"
        }
        else{
            return "✘"
        }
    }

    reDirect=(id)=>{
        let path = "/viewQuestion/"+id;
        this.props.history.push(path);
    }


    
      render() {
          return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>           

               
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1} onClick={(e)=>this.setState({displayedQuestion:this.state.allQuestions})}>All</ToggleButton>
                    <ToggleButton value={2} onClick={(e)=>this.setState({displayedQuestion:this.state.pendingQuestions})}>pending</ToggleButton>
                    <ToggleButton value={3} onClick={(e)=>this.setState({displayedQuestion:this.state.submittedQuestions})}>Finished</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
               
                <Row><br/></Row>
                
                <Row>
                    
                    {
                        this.state.displayedQuestion.map((Question,index)=>{
                            return (
                                <Col md={{offset:0,span:4}}>
                                <div className="shadow-box-example hoverable">
                                <Card border="primary" bg="light" onClick={(e)=>{this.reDirect(this.state.displayedQuestion[index].formId)}}>
                                <Card.Header as="h5" className="text-center"  variant="link">{this.state.displayedQuestion[index].Form.name}</Card.Header>
                                <Row><br/></Row>
                                <Col md={12}>
                                <Row>              
                                <Col md={7}>
                                <Form>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Form ID : </Card.Text>
                                        <Card.Text># {this.state.displayedQuestion[index].formId} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Date : </Card.Text>
                                        <Card.Text>{this.state.displayedQuestion[index].submitionDate} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Questions : </Card.Text>
                                        <Card.Text>{this.state.displayedQuestion[index].question} </Card.Text>
                                    </Form.Row>
                                </Form>
                                </Col>
                                <Col md={{offset:1}}>
                                    <Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Answered :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedQuestion[index].answer)}}>
                                        {this.submitionSympol(this.state.displayedQuestion[index].answer)}</Card.Text>
                                    </Row>
                                </Col>
                                
                                </Row>
                                </Col>
                                <Row><br/></Row>
                                </Card>
                                </div>
                                
                                <Row><br/></Row>
                                </Col>
                                
                            )
                        }
                        )
                    }
                    
                    </Row>

                    <Row><br/></Row>
                    </Col>
            </React.Fragment>
        )
      }

}


export default questions;
