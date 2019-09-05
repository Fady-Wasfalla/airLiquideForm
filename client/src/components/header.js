import React, { Component } from "react";
import { Navbar , Nav , NavDropdown } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'

class header extends Component {

    state = {

    }

    reDirect=(dept)=>{
      let path = ""
      switch(dept) {
          case "Distribution" :  path= "/cases/Distribution" ; break;
          case "Sourcing" : path= "/cases/Sourcing" ; break;
          case "Fleat" : path= "/cases/Fleat" ; break;
          case "PR" : path= "/cases/PR" ; break;
          case "CI" :  path= "/cases/CI" ; break;
          case "Finance" : path= "/cases/Finance" ; break;
          case "Sales" : path= "/cases/Sales" ; break;
          default:
            
        }
      this.props.history.push(path);
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

              <Nav.Link href="http://localhost:3000/fillForm">Fill Form</Nav.Link>

            
              <NavDropdown title="Departements" id="nav-dropdown">
              {
                this.props.screensNames.map((form,index)=>{
                  let href = 'http://localhost:3000/cases/' + this.props.screensNames[index]
                  if ( this.props.screensNames[index]==='Sales'){
                    return(
                      <NavDropdown.Item  disabled>{this.props.screensNames[index]}
                      
                      </NavDropdown.Item>
                    )
                  }
                  else{
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
