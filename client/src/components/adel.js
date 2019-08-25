import React, { Component } from "react";
import { Col } from "react-bootstrap";
import logo from '../images/air-liquide-creative-oxygen.svg'

class adel extends Component {

    state = {
      }
      render() {
        return (
          <React.Fragment>
              
          <Col md={5}/>
              <img
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
              <p>do it in the same way</p>

        </React.Fragment>
        )
      }

}


export default adel;
