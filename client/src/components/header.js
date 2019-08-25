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
             <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
              <Nav.Link href="http://localhost:3000/fillForm">Fill Form</Nav.Link>
              <Nav.Link href="http://localhost:3000/distributionFeedback">Distribution</Nav.Link>
              <Nav.Link href="http://localhost:3000/sourcingFeedback">Sourcing</Nav.Link>
              <Nav.Link href="http://localhost:3000/fleatFeedback">Fleat</Nav.Link>
              <Nav.Link href="http://localhost:3000/cifFeedBack">CI</Nav.Link>
              <Nav.Link href="http://localhost:3000/prFeedback">PR Feedback</Nav.Link>


        </Navbar>
      </React.Fragment>
    )
  }
}

export default header
