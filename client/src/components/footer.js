import React, { Component } from "react";
import { Navbar , Nav , NavDropdown , Form , Button , FormControl } from "react-bootstrap";
import ReactDOM from 'react-dom'
import logo from '../images/air-liquide-creative-oxygen.svg'

class footer extends Component {

    state = {
      }


      render() {
        return (
          <React.Fragment>
          <Navbar bg="light" expand="lg">
             <Navbar.Brand href="#home">
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


export default footer;
