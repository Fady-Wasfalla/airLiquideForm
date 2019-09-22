import React, { Component } from "react";
import { Navbar , Nav , NavDropdown , Button } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'

class header extends Component {

    state = {

    }

    logout =()=>{
      window.localStorage.removeItem("sysEmployeeName")
      window.localStorage.removeItem("screens")
      window.location.assign('http://localhost:3000')      
    }

      render() {
        if (this.props.screensNames[0]!==""){
          return(
            <React.Fragment>
                    <Navbar bg="light" variant="dark" >
                     <Navbar.Brand href="http://localhost:3000/home">
                      <img
                        src={logo}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Navbar.Brand>
        
                      <Nav.Link href="http://localhost:3000/home">🏠</Nav.Link>
        
                      <NavDropdown title="Departements" id="nav-dropdown">
                      {
                        this.props.screensNames.map((form,index)=>{
                          if ( this.props.screensNames[index]==='Sales'){
                          let newRequest = 'http://localhost:3000/fillForm'
                          let getMyQuestions = 'http://localhost:3000/getMyQuestions/'+window.localStorage.getItem('sysEmployeeName')
                          let href = 'http://localhost:3000/cases/' + this.props.screensNames[index]
                          return(
                                <NavDropdown title="Sales" id="nav-dropdown" drop={"right"}>
                                <NavDropdown.Item href={newRequest}>New Request</NavDropdown.Item>
                                <NavDropdown.Item href={getMyQuestions}>Answer Questions</NavDropdown.Item>
                                <NavDropdown.Item href={href}>Show Requests</NavDropdown.Item>
                                </NavDropdown> 
                            )
                          }
                          if ( this.props.screensNames[index]==='Admin'){
                            let editEmplyoyee = 'http://localhost:3000/editEmplyoyee'
                            let editPermission = 'http://localhost:3000/editPermission'
                            return(
                                  <NavDropdown title="Admin" id="nav-dropdown" drop={"right"}>
                                  <NavDropdown.Item href={editEmplyoyee}>Add/Edit Employee</NavDropdown.Item>
                                  <NavDropdown.Item href={editPermission}>Permissions</NavDropdown.Item>
                                  </NavDropdown> 
                              )
                            }
                          else{
                            let href = 'http://localhost:3000/cases/' + this.props.screensNames[index]
                          return (
                            <NavDropdown.Item href={href}>{this.props.screensNames[index]}</NavDropdown.Item>
                          )
                          }
                        }
                        )
                      }
                    </NavDropdown>
                    <NavDropdown title="⚙" id="nav1-dropdown">
                        <NavDropdown.Item href={"http://localhost:3000/changePass"}>Change password</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar>
                
              </React.Fragment>
          )
        }
        if (window.localStorage.getItem("screens")){
        return (
          <React.Fragment>
            <Navbar bg="light" variant="dark" >
             <Navbar.Brand href="http://localhost:3000/home">
              <img
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

              <Nav.Link href="http://localhost:3000/home">🏠</Nav.Link>

              <NavDropdown title="Departements" id="nav-dropdown">
              {

                window.localStorage.getItem("screens").split(',').map((form,index)=>{
                  if ( window.localStorage.getItem("screens").split(',')[index]==='Sales'){
                  let newRequest = 'http://localhost:3000/fillForm'
                  let getMyQuestions = 'http://localhost:3000/getMyQuestions/'+window.localStorage.getItem('sysEmployeeName')
                  let href = 'http://localhost:3000/cases/' + window.localStorage.getItem("screens").split(',')[index]
                  return(
                        <NavDropdown title="Sales" id="nav-dropdown" drop={"right"}>
                        <NavDropdown.Item href={newRequest}>New Request</NavDropdown.Item>
                        <NavDropdown.Item href={getMyQuestions}>Answer Questions</NavDropdown.Item>
                        <NavDropdown.Item href={href}>Show Requests</NavDropdown.Item>
                        </NavDropdown> 
                    )
                  }
                  if ( window.localStorage.getItem("screens").split(',')[index]==='Admin'){
                    let editEmplyoyee = 'http://localhost:3000/editEmplyoyee'
                    let editPermission = 'http://localhost:3000/editPermission'
                    return(
                          <NavDropdown title="Admin" id="nav-dropdown" drop={"right"}>
                          <NavDropdown.Item href={editEmplyoyee}>Add/Edit Employee</NavDropdown.Item>
                          <NavDropdown.Item href={editPermission}>Permissions</NavDropdown.Item>
                          </NavDropdown> 
                      )
                    }
                  else{
                    let href = 'http://localhost:3000/cases/' + window.localStorage.getItem("screens").split(',')[index]
                  return (
                    <NavDropdown.Item href={href}>{window.localStorage.getItem("screens").split(',')[index]}</NavDropdown.Item>
                  )
                  }
                }
                )
              }
            </NavDropdown>
                    <NavDropdown title="⚙" id="nav1-dropdown">
                        <NavDropdown.Item href={"#"}>Change password</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
        </Navbar>
        
      </React.Fragment>
    )
  }
  else{
    return(
      <React.Fragment>
            <Navbar bg="light" variant="dark" >
             <Navbar.Brand href="http://localhost:3000">
              <img
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
        </Navbar>
        
      </React.Fragment>
    )
  }
  
  }
}

export default header
