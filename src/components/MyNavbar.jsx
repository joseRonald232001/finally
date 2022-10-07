import React, { useState } from 'react';
import  { Navbar,Container, Nav, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import CarSaidbar from './CarSaidbar';
const MyNavbar = () => {

  const navigate=useNavigate();

  const logaout =()=>{

    localStorage.setItem("token","")
    navigate("/login")
  }

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
<>  
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>e-comerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">login</Nav.Link>
          <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
          <Nav.Link onClick={logaout}>exit</Nav.Link>
          <Nav.Link onClick={ handleShow }> carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<CarSaidbar show={show} handleClose={handleClose}/>


      </>
    );
};

export default MyNavbar;