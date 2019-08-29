import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Spinner } from "react-bootstrap";
import axios from 'axios'



class cases extends Component {

    state = {
        forms:[],
        loading: true,
      }

    componentDidMount(){
    this.setState({ loading: true})
    axios
      .get('http://localhost:8000/api/forms')
      .then(res => this.setState({forms:res.data.data , loading: false}))
      .catch(err => alert(err.message))
      
    }

    submitionColor=(e)=>{
        if (e===true){
            return "✓"
        }
        else{
            return "red"
        }
    }

    submitionSympol=(e)=>{
        if (e===true){
            return "✔"
        }
        else{
            return "✘"
        }
    }

    
      render() {
          return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>           

                <Card.Header style={{fontWeight:"bold"}}>Cases</Card.Header>
                <Row><br/></Row>
                
                <Row>
                    
                    {
                        this.state.forms.map((form,index)=>{
                            return (
                                
                                <Col md={{offset:0,span:6}}>
                                 <div >
                                <Card border="primary" bg="light"  onClick={() => {alert("Hello from here")}}>
                                <Card.Header as="h5" className="text-center"> {this.state.forms[index].name} </Card.Header>
                                <Row><br/></Row>
                                <Col md={12}>
                                <Row>              
                                <Col md={7}>
                                <Form>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>ID : </Card.Text>
                                        <Card.Text># {this.state.forms[index].id} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Date : </Card.Text>
                                        <Card.Text>{this.state.forms[index].date} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Zone : </Card.Text>
                                        <Card.Text>{this.state.forms[index].zone} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Full address : </Card.Text>
                                        <Card.Text>{this.state.forms[index].address} </Card.Text>
                                    </Form.Row>

                                </Form>
                                </Col>
                                <Col md={5} >
                                    <Card border="primary">
                                    <Card.Header style={{fontWeight:"bold"}}>Feedback</Card.Header>

                                    <Form.Row>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Distribution  :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.forms[index].distributionSubmition)}}>
                                        {this.submitionSympol(this.state.forms[index].distributionSubmition)}</Card.Text>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Sourcing :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.forms[index].sourcingSubmition)}}>
                                        {this.submitionSympol(this.state.forms[index].sourcingSubmition)}</Card.Text>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Fleat :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.forms[index].fleatSubmition)}}>
                                        {this.submitionSympol(this.state.forms[index].fleatSubmition)}</Card.Text>
                                        <Col md={{span:3}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Irmr :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.forms[index].irmrSubmition)}}>
                                        {this.submitionSympol(this.state.forms[index].irmrSubmition)}</Card.Text>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>CI :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.forms[index].ciSubmition)}}>
                                        {this.submitionSympol(this.state.forms[index].ciSubmition)}</Card.Text>
                                    </Form.Row>
                                    </Card>
                                </Col>
                                </Row>
                                </Col>
                                <Row><br/></Row>
                                </Card>
                                </div>
                                <Row><br/></Row>
                                </Col>
                            )
                        })
                    }
                    
                    </Row>

                    <Row><br/></Row>
                    
                    

                    <Row><br/></Row>
                    <Row><br/></Row>
                    </Col>
            </React.Fragment>
        )
      }

}


export default cases;
