import React from 'react'
import '../navbar/Navbar.css'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


function Navbars() {
  return (

// <Navbar expand="lg" className="">
//       <Container>
//         <NavLink class="navbar-brand" to="/"><img src={logo} alt="My Icon" /></NavLink>
//         <Navbar.Toggle className="button" aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavLink className="nav-link " to="/AboutMe">About Me</NavLink>
//             <NavLink className="nav-link " to="/Background">Background</NavLink>
//             <NavLink className="nav-link " to="/Skills">Skills</NavLink>
//             <NavLink className="nav-link " to="/Project">Project</NavLink>
//             <NavLink className="nav-link " to="/Certification">Certification</NavLink>
//             <NavLink className="nav-link " to="/Contact">Contact Me</NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

<Navbar expand="lg" className="navbar-custom fixed-top">
      <Container>
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="My Icon" />
        </a>
        <Navbar.Toggle className="button" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a className="nav-link" href="#about">About Me</a>
            <a className="nav-link" href="#background">Background</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#certifications">Certifications</a>
            <a className="nav-link" href="#contact">Contact Me</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbars