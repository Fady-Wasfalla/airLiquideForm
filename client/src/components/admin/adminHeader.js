import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/air-liquide-creative-oxygen.svg'

class adminHeader extends Component {
  test =()=> {
    console.log(12)
  }
  render () {
    return (
      <React.Fragment>
        <Navbar bg='light' variant='dark'>
          <Navbar.Brand href='#home'>
            <img
              src={logo}
              width='100'
              height='30'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Employee Control' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'></NavDropdown.Item>
            <NavDropdown.Item href='http://localhost:8000/api/employees'>Add New Employee</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'>Deactivate Employee</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Update Employee Info</NavDropdown.Item>     
            {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default adminHeader
