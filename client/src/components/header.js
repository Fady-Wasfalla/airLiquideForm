import React, { Component } from "react";
import { Navbar , Nav , NavDropdown , Form , Button , FormControl } from "react-bootstrap";
import ReactDOM from 'react-dom'
import logo from '../images/air-liquide-creative-oxygen.svg'

class header extends Component {

    state = {
      }


      render() {
        return (
          <React.Fragment>
          <Navbar bg="dark" expand="lg">
             <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
        </Navbar>
        </React.Fragment>
        )
      }

}


export default header;
