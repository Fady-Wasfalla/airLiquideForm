import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'
import CustomerBasicInfo from './customerBasicInfo'
import LogisticsValidationForm from './logisticsValidationForm'
import CustomerInstallationForm from './customerInstallationForm'
import Upload from './upload'
import PriForm from './priForm'
import axios from 'axios'



class fillForm extends Component {

    state = {
      cbi:{dodo:false},
      lvf:{dodo:false},
      cif:{dodo:false},
      pri:{dodo:false},
      file:null,
      filesNames:[""],
      userName:window.localStorage.getItem("sysEmployeeName"),      
      }

    async componentDidMount(){
        await axios
        .post('http://localhost:8000/api/employees/getStarted',this.state)
        .then( (res) => { if (res.data.status === 'Failed'){
                              alert(res.data.message)
                              window.location.assign('http://localhost:3000/Unauthorized')
                          }else{
                          this.props.CallBack(res.data.data)
                          window.localStorage.setItem("screens",res.data.data)
                        } })
        .catch(err => alert(err.message))

    }

      handleChange =() =>{
        if (this.state.cbi.dodo===false){
          return alert("please check the box in Customer Basics Info part")
        }
        if (this.state.lvf.dodo===false){
          return alert("please check the box in Logistics Validation Form part")
        }
        if (this.state.cif.dodo===false){
          return alert("please check the box in Customer Installation Form part")
        }
        if (this.state.pri.dodo===false){
          return alert("please check the box in PRI Form part")
        }
        const fd = new FormData()
        console.log(this.state.lvf.startDeliveryDate)
        var cbiAsString = JSON.stringify(this.state.cbi)
        var lvfAsString = JSON.stringify(this.state.lvf)
        console.log(lvfAsString)
        var cifAsString = JSON.stringify(this.state.cif)
        var priAsString = JSON.stringify(this.state.pri)
        var filesNamesAsString = JSON.stringify(this.state.filesNames)
        fd.append('cbi',cbiAsString)
        fd.append('lvf',lvfAsString)
        fd.append('cif',cifAsString)
        fd.append('pri',priAsString)
        fd.append('filesNames',filesNamesAsString)
        if(this.state.file){
          for(let i = 0 ; i<this.state.file.length; i++){
            fd.append('file',this.state.file[i])
          }
        }
      axios
      .post('http://localhost:8000/api/employees/newForm',fd)
      .then(res => alert(res.data.message))
      .catch(err => alert(err.message))
      }

      cbiCallBackFunction = (childData) => {
        this.setState({cbi:childData})
      }

      lvfCallBackFunction = (childData) => {
        this.setState({lvf:childData})
      }

      cifCallBackFunction = (childData) => {
        this.setState({cif:childData})
      }

      priCallBackFunction = (childData) => {
         this.setState({pri:childData})
      }

    nameUploadCallBackFunction = (childData) => {
        this.setState({filesNames:childData})
     }

     fileUploadCallBackFunction = (childData) => {
      this.setState({file:childData})
    }

    send = (childData) => {
      this.setState({selectedFile:childData})
    }

    onChangeHandlerfile1=event=>{
      // var temp = [event.target.files[0]]
      // const temp2 = this.state.files.concat(temp)
      // this.setState({files: temp2})
      this.setState({file:event.target.files[0]})
    }
    // onChangeHandlerfile2=event=>{
    //   var temp = [event.target.files[0]]
    //   const temp2 = this.state.files.concat(temp)
    //   this.setState({files: temp2})
    // }

      render() {
        return (
          <div style={{  'overflowX':'hidden' }}>
            <React.Fragment >
                <Row><br/></Row>
                <Col md={{ span: 12, offset: 0 }}>
                <Card border="secondary">
                <Card.Header as="h4" style={{backgroundColor:"#375f9b"}} className="text-white">Request for a job offer</Card.Header>                
                <Row><br/></Row>
                <Col  md={{ span: 12, offset: 0 }}>
                <Row><br/></Row>
                </Col>
                <Col md={{ span: 12, offset: 0 }}><CustomerBasicInfo ParentCallBack={this.cbiCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><LogisticsValidationForm ParentCallBack={this.lvfCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><CustomerInstallationForm ParentCallBack={this.cifCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><PriForm ParentCallBack={this.priCallBackFunction}/></Col>
                <Row><br/></Row>

                <Col md={{ span: 12, offset: 0 }}><Upload nameParentCallBack={this.nameUploadCallBackFunction}
                                                          fileParentCallBack={this.fileUploadCallBackFunction}/></Col>
                <Row><br/></Row>

                <Row>
                <Col md={{ span: 12, offset: 5 }}>
                <Button variant="danger" className="text-white" 
                onClick={this.handleChange}>Submit</Button></Col>
                </Row>

                <Row><br/></Row>
                
                </Card>

                <Row><br/></Row>
                <Row><br/></Row>
                </Col>
            </React.Fragment>
            </div>
        )
      }

}


export default fillForm;
