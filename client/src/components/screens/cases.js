import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Form , Col , Row , Card, Button , Spinner , ToggleButtonGroup ,ButtonToolbar,ToggleButton } from "react-bootstrap";
import axios from 'axios'



class cases extends Component {

    state = {
        allForms:[],
        pendingForms:[],
        submittedForms:[],
        displayedForm:[],
        allFds:[],
        pendingFds:[],
        submittedFds:[],
        displayedFd:[],
        loading: true,
        department:"",
        screensNames:[],
      }

     
    componentDidMount(){
    this.setState({loading: true})
    this.setState({screensNames:this.props.screensNames})
    axios
    .get('http://localhost:8000/api/employees/getFormsDisplay/'+this.props.match.params.department)
    .then(res => {this.setState({displayedForm:res.data.allForms , loading: false})
    this.setState({allForms:res.data.allForms , loading: false})
    this.setState({pendingForms:res.data.pendingForms , loading: false})
    this.setState({submittedForms:res.data.submittedForms , loading: false})

    this.setState({displayedFd:res.data.allFds})
    this.setState({allFds:res.data.allFds})
    this.setState({pendingFds:res.data.pendingFds})
    this.setState({submittedFds:res.data.submittedFds})})
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

    reDirect=(id)=>{
        let path = "/"+this.props.match.params.department+"Feedback/"+id;
        this.props.history.push(path);
    }

    getColor=(e)=>{
        if (e==="Rejected"){
            return <Card.Text style={{color:"red"}}>Rejected ✘</Card.Text>
        }
        if (e==="In proccessing"){
            return <Card.Text style={{color:"blue"}}>In proccessing ?</Card.Text>
        }
        if (e==="Accepted"){
            return <Card.Text style={{color:"green"}}>Accepted ✔</Card.Text>
        }
    }


    
      render() {
          return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>           

                <Card.Header>
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1} onClick={(e)=>this.setState({displayedForm:this.state.allForms , displayedFd:this.state.allFds})}>All</ToggleButton>
                    <ToggleButton value={2} onClick={(e)=>this.setState({displayedForm:this.state.pendingForms , displayedFd:this.state.pendingFds })}>pending</ToggleButton>
                    <ToggleButton value={3} onClick={(e)=>this.setState({displayedForm:this.state.submittedForms , displayedFd:this.state.submittedFds })}>Finished</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                </Card.Header>
                <Row><br/></Row>
                
                <Row>
                    
                    {
                        this.state.displayedForm.map((form,index)=>{
                            return (
                                <Col md={{offset:0,span:6}}>
                                <div className="shadow-box-example hoverable">
                                <Card border="primary" bg="light" onClick={(e)=>{this.reDirect(this.state.displayedForm[index].id)}}>
                                <Card.Header as="h5" className="text-center"  variant="link">{this.state.displayedForm[index].name}</Card.Header>
                                <Row><br/></Row>
                                <Col md={12}>
                                <Row>              
                                <Col md={7}>
                                <Form>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>ID : </Card.Text>
                                        <Card.Text># {this.state.displayedForm[index].id} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Date : </Card.Text>
                                        <Card.Text>{this.state.displayedForm[index].date} </Card.Text>
                                    </Form.Row>

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Final Decision : </Card.Text>
                                        {this.getColor(this.state.displayedFd[index])}
                                    </Form.Row>

                                </Form>
                                </Col>
                                <Col md={5} >
                                    <Card border="primary">
                                    <Card.Header style={{fontWeight:"bold"}}>Feedback</Card.Header>

                                    <Form.Row>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Distribution  :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedForm[index].distributionSubmition)}}>
                                        {this.submitionSympol(this.state.displayedForm[index].distributionSubmition)}</Card.Text>
                                        <Col md={{span:0}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Sourcing :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedForm[index].sourcingSubmition)}}>
                                        {this.submitionSympol(this.state.displayedForm[index].sourcingSubmition)}</Card.Text>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Fleat :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedForm[index].fleatSubmition)}}>
                                        {this.submitionSympol(this.state.displayedForm[index].fleatSubmition)}</Card.Text>
                                        <Col md={{span:3}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Irmr :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedForm[index].irmrSubmition)}}>
                                        {this.submitionSympol(this.state.displayedForm[index].irmrSubmition)}</Card.Text>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col md={{span:1}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>CI :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedForm[index].ciSubmition)}}>
                                        {this.submitionSympol(this.state.displayedForm[index].ciSubmition)}</Card.Text>
                                        <Col md={{span:4}}></Col>
                                        <Card.Text style={{fontWeight:"bold"}}>Finance :</Card.Text>
                                        <Card.Text style={{color:this.submitionColor(this.state.displayedForm[index].financeSubmition)}}>
                                        {this.submitionSympol(this.state.displayedForm[index].financeSubmition)}</Card.Text>
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
                        }
                        )
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
