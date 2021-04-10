import React, { useState } from 'react'
import {BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import './Header.css';
import logo from '../images/logo.png';
import { Button,Nav,NavDropdown,Navbar } from 'react-bootstrap';

function Header() {
  
    return (
             
                 
                 <Navbar collapseOnSelect expand="lg"  variant="light">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Brand href="#home">
  <div className="leftside">
                 <img  src={logo}></img>
                     

                 </div>

    </Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Aboutus">About Us</Nav.Link>
      <Nav.Link href="/Contactus">Contact Us</Nav.Link>
    
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
               
  
       
        )
    }
    

export default Header
