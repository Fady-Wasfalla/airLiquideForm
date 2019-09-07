import React, { Component } from "react";
import { Form , Col , Row , Card, Button } from "react-bootstrap";
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
        this.props.nameParentCallBack(this.state.name)
      }

      fileHandleChange(event,index){
        this.state.file[index] = event.target.files[0]
        this.setState({file:this.state.file})
        this.props.fileParentCallBack(this.state.file)
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
                {/* <Button variant="outline"  
                onClick={(e)=>{this.setState({name:[]})
                                this.setState({file:[]})}}
                                >Clear All</Button> */}
                <Row>
                <Col md={3}>
                {
                    this.state.name.map((name,index)=>{
                        return (
                            <Form>
                                <Form.Row>
                                    <Row>
                                    <Form.Group as={Col} >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control as="textarea" rows="1"
                                    onChange={(e)=>this.nameHandleChange(e , index)} value={name} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                     <input type="file" name="file" onChange={(e)=>this.fileHandleChange(e,index)} />
                                    </Form.Group>
                                    </Row>
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
