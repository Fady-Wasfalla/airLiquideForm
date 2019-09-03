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
      file:null,
      filesNames:[""]
      }

      handleChange =() =>{
        const fd = new FormData()
        var cbiAsString = JSON.stringify(this.state.cbi)
        var lvfAsString = JSON.stringify(this.state.lvf)
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
