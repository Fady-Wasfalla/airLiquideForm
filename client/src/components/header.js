import React, { Component } from "react";
import { Navbar , Nav , NavDropdown } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'

class header extends Component {

    state = {

    }

      render() {
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
                this.props.screensNames.map((form,index)=>{
                  
                  if ( this.props.screensNames[index]==='Sales'){
                  let newRequest = 'http://localhost:3000/fillForm'
                  let getMyQuestions = 'http://localhost:3000/getMyQuestions/'+sessionStorage.getItem('employeeName')
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
        </Navbar>

        
      </React.Fragment>
    )
  }
}

export default header
