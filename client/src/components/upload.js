import React, { Component } from "react";
import { Form , Col , Row , Card, Button  } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css'

class upload extends Component {

    state = {
        name:[""],
        file:[],
      }

      addFile(){
        this.setState({name:[... this.state.name,""]})
        this.setState({file:[... this.state.file,""]})
      }

      nameHandleChange(e,index){
        this.state.name[index] = e.target.value
        this.setState({name:this.state.name})
        this.props.nameParentCallBack(this.state.name)
        this.props.fileParentCallBack(this.state.file)
      }

      fileHandleChange(event,index){
        this.state.file[index] = event.target.files[0]
        this.setState({file:this.state.file})
        this.props.nameParentCallBack(this.state.name)
        this.props.fileParentCallBack(this.state.file)
      }

      removeFile(index){
        this.state.name.splice(index,1)
        this.setState({name:this.state.name})
        this.state.file.splice(index,1)
        this.setState({file:this.state.file})
        this.props.ParentCallBack(this.state)
      }

      onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

      render() {
        return (
            <React.Fragment>
                <label>Upload Files</label>  
                <Button variant="outline"  
                onClick={(e)=>this.addFile(e)}
                >＋</Button>
                  <input type="file" name="file" onChange={(e)=>{this.fileHandleChange(e,index)}}/>

                 
              
                
            </React.Fragment>
        )
      }

}


export default upload;
