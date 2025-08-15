import React from 'react'
import '../navbar/Navbar.css'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


function Navbars() {
  return (
//     <nav class=" navbar navbar-expand-lg  ">
//   <div class="container nav">
//     <Link class="navbar-brand   " to="/"><img src={logo} alt="My Icon" /></Link>
//     <button class="navbar-toggler Navbar_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <Link class="nav-link " to="/AboutMe">About Me</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link " to="/Background">Background</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link " to="/Skills">Skills</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link " to="/Project">Project</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link " to="/Certification">Certification</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link " to="/Contact">Contact Me</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

<Navbar expand="lg" className="">
      <Container>
        <NavLink class="navbar-brand" to="/"><img src={logo} alt="My Icon" /></NavLink>
        <Navbar.Toggle className="button" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link " to="/AboutMe">About Me</NavLink>
            <NavLink className="nav-link " to="/Background">Background</NavLink>
            <NavLink className="nav-link " to="/Skills">Skills</NavLink>
            <NavLink className="nav-link " to="/Project">Project</NavLink>
            <NavLink className="nav-link " to="/Certification">Certification</NavLink>
            <NavLink className="nav-link " to="/Contact">Contact Me</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Navbars