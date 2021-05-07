import React from 'react'
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import '../App.css'
import {Link} from "react-router-dom"; 
const Header = () => {
    return (
        <div style={{backgroundColor:'#1B1B1B'}}>
             <Navbar>
    <Navbar.Brand style={{color:'red', fontWeight:'bold'}} id='brand'>Flux</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" style={{color:'#ffffff'}}>Home</Nav.Link>
      <Nav.Link href="WebDevelopment" style={{color:'#ffffff'}}>Web Development</Nav.Link>
      <Nav.Link href="Portfolio" style={{color:'#ffffff'}}>Portfolio Design</Nav.Link>
      <Nav.Link href="SEO" style={{color:'#ffffff'}}>SEO</Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link href="Contact" style={{color:'#ffffff'}}>Contact Us</Nav.Link>
    </Form>
  </Navbar>
        </div>
    )
}

export default Header
