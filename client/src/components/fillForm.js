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
      cbi:{},
      lvf:{},
      cif:{},
      pri:{},
      file:null
      }

      handleChange =() =>{
       //  console.log("Customer Basics info",this.state.cbi)
        // console.log("LVF",this.state.lvf)
        // console.log("CIF",this.state.cif)
        // console.log("PRI",this.state.pri)
        // console.log("file",this.state.file)
        // console.log("name",this.state.name)
        // console.log("image",this.state.selectedFile)
        // console.log(this.state.file)
        // this.state.cbi.forEach(element => {
          
        // });
        const fd = new FormData()
        var x = JSON.stringify(this.state.cbi)
        console.log(x)
        const test = [this.state.cbi.toString(),this.state.cif.toString()]
        fd.append('test',x)
        // fd.append('file',this.state.file)
        // here we will 
        // console.log(fd)
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
        this.setState({name:childData})
     }

     fileUploadCallBackFunction = (childData) => {
      this.setState({file:childData})
    }

    send = (childData) => {
      this.setState({selectedFile:childData})
    }

    onChangeHandlerfile1=event=>{
      // console.log(event.target.files[0])
      // var temp = [event.target.files[0]]
      // const temp2 = this.state.files.concat(temp)
      // this.setState({files: temp2})
      this.setState({file:event.target.files[0]})
    }
    // onChangeHandlerfile2=event=>{
    //   // console.log(event.target.files[0])
    //   var temp = [event.target.files[0]]
    //   const temp2 = this.state.files.concat(temp)
    //   this.setState({files: temp2})
    // }

      render() {
        return (
          <div style={{  'overflow-x':'hidden' }}>
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
                                                          fileParentCallBack={this.fileUploadCallBackFunction}
                                                          sendData={this.send}/></Col>
                <Row><br/></Row>

                {/* <input type="file" name="file" onChange={this.onChangeHandlerfile1}/> */}
                {/* <input type="file" name="file" onChange={this.onChangeHandlerfile2}/> */}
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
