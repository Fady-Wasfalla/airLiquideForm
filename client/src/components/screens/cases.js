import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Form , Col , Row , Card, Button , Spinner , ToggleButtonGroup ,ButtonToolbar,ToggleButton } from "react-bootstrap";
import axios from 'axios'
import Select from 'react-select'



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
        chosenField:"allForms",
        search:"",
        searchType:"Customer Name",
        searchPlaceHolder:"Enter Company/Customer Name ...",
        userName:window.localStorage.getItem("sysEmployeeName")
        
      }

     
    componentDidMount(){
    this.setState({loading: true})
    this.setState({screensNames:this.props.screensNames})
    axios
    .post('http://localhost:8000/api/employees/getFormsDisplay/'+this.props.match.params.department , this.state)
    .then(res => { if (res.data.status === 'Unauthorized'){
        alert(res.data.message)
        window.location.assign('http://localhost:3000/Unauthorized')
    }else{
    this.setState({displayedForm:res.data.allForms , loading: false})
    this.setState({allForms:res.data.allForms , loading: false})
    this.setState({pendingForms:res.data.pendingForms , loading: false})
    this.setState({submittedForms:res.data.submittedForms , loading: false})

    this.setState({displayedFd:res.data.allFds})
    this.setState({allFds:res.data.allFds})
    this.setState({pendingFds:res.data.pendingFds})
    this.setState({submittedFds:res.data.submittedFds})}})
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

    

    filterBy = (e,type) =>{
        this.setState({search:e})
        let forms = []
        let proccessing = []
        switch(this.state.chosenField){
            case "allForms" :   forms=this.state.allForms 
                                proccessing = this.state.allFds; break ;
            case "pending" :    forms=this.state.pendingForms  
                                proccessing = this.state.pendingFds ; break ;
            case "Finished" :   forms=this.state.submittedForms 
                                proccessing = this.state.submittedFds ; break ;
            default :   forms=this.state.allForms 
                        proccessing = this.state.allFds ; break ;
        }
        let display = []
        let displayProccessing = []
        for (let i=0;i<forms.length;i++){
            switch(type){
                case "Id" : if( e!==null&&forms[i].id!==null){
                                if (forms[i].id===parseInt(e)){
                                    display = display.concat(forms[i])
                                    displayProccessing = displayProccessing.concat(proccessing[i])
                                }
                            } break ;
                 case "Date" : if( e!==null&&forms[i].date!==null){
                                if ((forms[i].date).toLowerCase().includes(e.toLowerCase())){
                                    display = display.concat(forms[i])
                                    displayProccessing = displayProccessing.concat(proccessing[i])
                                }
                            } break ;
                case "Customer Name" : if( e!==null&&forms[i].name!==null){
                                if ((forms[i].name).toLowerCase().includes(e.toLowerCase())){
                                    display = display.concat(forms[i])
                                    displayProccessing = displayProccessing.concat(proccessing[i])
                                }
                            } break ;
                case "Sales Employee" : if( e!==null&&forms[i].employeeName!==null){
                                if ((forms[i].employeeName).toLowerCase().includes(e.toLowerCase())){
                                    display = display.concat(forms[i])
                                    displayProccessing = displayProccessing.concat(proccessing[i])
                                }
                            } break ;
                default : if( e!==null&&forms[i].name!==null){
                                if ((forms[i].name).toLowerCase().includes(e.toLowerCase())){
                                    display = display.concat(forms[i])
                                    displayProccessing = displayProccessing.concat(proccessing[i])
                                }
                            } break ;
            }
            
        }
        this.setState({displayedForm:display})
        this.setState({displayedFd:displayProccessing})
    }

    searchTypeHandleChange = (e) =>{
        this.setState({searchType:e.value})
        this.filterBy(this.state.search,e.value)
        switch(e.value){
            case "Id" : this.setState({searchPlaceHolder:"Enter ID Number ..."}) ; break ;
            case "Date" : this.setState({searchPlaceHolder:"Enter date (ex : YYYY-MM-DD)"}) ; break ;
            case "Customer Name" : this.setState({searchPlaceHolder:"Enter Company/Customer Name ..."}) ; break ;
            case "Sales Employee" : this.setState({searchPlaceHolder:"Enter Employee Name ..."}) ; break ;
            default :  break ;
        }
    }


    
    render() {
          return (
            this.state.loading ? <div className='App'><Spinner animation='border' variant='primary' /></div> :
            <React.Fragment>
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>           

                <Card border="dark">
                <Card.Header className="text-black" style={{backgroundColor:"#fff"}}>
                <Row>
                        <Col>
                        <Form.Label>Display :</Form.Label>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1} >
                            <ToggleButton variant="primary" size="sm" value={1} onClick={(e)=>{this.setState({displayedForm:this.state.allForms , displayedFd:this.state.allFds , chosenField:"allForms"})
                            this.filterBy(this.state.search,this.state.searchType)}}>All Requests</ToggleButton>
                            <ToggleButton variant="primary" size="sm" value={2} onClick={(e)=>{this.setState({displayedForm:this.state.pendingForms , displayedFd:this.state.pendingFds , chosenField:"pending" })
                            this.filterBy(this.state.search,this.state.searchType)}}>Pending Requests</ToggleButton>
                            <ToggleButton variant="primary" size="sm" value={3} onClick={(e)=>{this.setState({displayedForm:this.state.submittedForms , displayedFd:this.state.submittedFds , chosenField:"Finished"})
                            this.filterBy(this.state.search,this.state.searchType)}}>Finished Requests</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        </Col>

                        <Form.Group as={Col} md={{offset:2,span:2}}>
                        <Form.Label>Search by :</Form.Label>
                            <Select
                                                value={this.state.searchType.value}
                                                onChange={(e)=>{this.searchTypeHandleChange(e)}}
                                                options={ [
                                                            { value: 'Id', label: 'Id' },
                                                            { value: 'Date', label: 'Date' },
                                                            { value: 'Customer Name', label: 'Customer Name' },
                                                            { value: 'Sales Employee', label: 'Sales Employee' },
                                                        ]}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Search :</Form.Label>
                            <Form.Control as="textarea" rows="1" placeHolder={this.state.searchPlaceHolder} onChange={(e)=>{{this.filterBy(e.target.value,this.state.searchType)}}}/>
                        </Form.Group>

                </Row>
                </Card.Header>
                </Card>
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

                                    <Form.Row>
                                        <Card.Text style={{fontWeight:"bold"}}>Sales Employee : </Card.Text>
                                        {this.state.displayedForm[index].employeeName}
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
