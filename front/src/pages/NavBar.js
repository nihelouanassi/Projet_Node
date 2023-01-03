import React from 'react';
import { Navbar, Nav,Dropdown } from 'react-bootstrap';
import {logout} from "../services/user";
import { Link, useNavigate } from 'react-router-dom';

const NavBar =()=> {

  let navigate = useNavigate(); 



  const Logout = async () => {

    try {
      console.log(localStorage.getItem("userId"))
        await logout(localStorage.getItem("userId"));
        
        localStorage.setItem("userEmail", '');
            localStorage.setItem("userId", '');
            localStorage.setItem("userFirstname", '');
            localStorage.setItem("userLastname", '');
        navigate("/Login");
    }catch (error) {
        console.log(error);
    }
};

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/Posts">My App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      {localStorage.getItem("userFirstname") !== ''? (
        <div className="ml-auto">
          <Dropdown >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {localStorage.getItem("userFirstname")}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            
            <Dropdown.Item onClick={Logout} >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        
      ) : (
        <Nav>
          <Nav.Link href="/Login" >
            Login
          </Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
);
}

export default NavBar;
