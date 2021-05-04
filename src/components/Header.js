import React from 'react'
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import '../App.css'
const Header = () => {
    return (
        <div style={{backgroundColor:'#1B1B1B'}}>
             <Navbar>
    <Navbar.Brand style={{color:'red', fontWeight:'bold'}} id='brand'>Flux</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" style={{color:'#ffffff'}}>Home</Nav.Link>
      <Nav.Link href="#features" style={{color:'#ffffff'}}>Features</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'#ffffff'}}>Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger" style={{color:'white'}} className='search-button'>Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Header
