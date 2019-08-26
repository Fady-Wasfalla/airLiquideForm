import React, { Component } from "react";
import { Form , Col , Row , Card, Button  } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class upload extends Component {

    state = {
        name:[""],
        file:[""],
      }

      addFile(){
        this.setState({name:[... this.state.name,""]})
        this.setState({file:[... this.state.file,""]})
      }

      nameHandleChange(e,index){
        this.state.name[index] = e.target.value
        this.setState({name:this.state.name})
        this.props.ParentCallBack(this.state)
      }

      fileHandleChange(event,index){
        this.state.file[index] = event.target.files[0]
        this.setState({file:this.state.file})
        this.props.ParentCallBack(this.state)
      }

      removeFile(index){
        this.state.name.splice(index,1)
        this.setState({name:this.state.name})
        this.state.file.splice(index,1)
        this.setState({file:this.state.file})
        this.props.ParentCallBack(this.state)
      }

      render() {
        return (
            <React.Fragment>
                <label>Upload Files</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFile(e)}
                >＋</Button>
                <Row>
                <Col md={3}>
                {
                    this.state.name.map((name,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.nameHandleChange(e , index)} value={name} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        )
                    })
                }
                </Col>
                <Col md={6}>
                {
                    this.state.file.map((file,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Col md={4}>
                                    <Row style={{height: .05*window.innerHeight + 'px'}}/>                             
                                        <input type="file" name="file" onChange={(e)=>this.fileHandleChange(e,index)} values={"h"}/>
                                    </Col>
                                        {/* <Col>
                                        <Row style={{height: .04*window.innerHeight + 'px'}}/>                             
                                        <Button variant="outline" style={{height: .05*window.innerHeight + 'px'}}
                                            onClick={()=>this.removeFile(index)}>✘</Button>
                                        </Col> */}
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


export default upload;
