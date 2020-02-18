import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from './36logo.png'
import './NavBar.css'
import { Navbar, Nav, Button } from "react-bootstrap"


const NavBar = () => (
  <header>
    <div className="flexContainer">
      <div className="flexContainer2">
        {/* <h1 className="site-title flex-item">Cohort 36<br />
          <small>Nashville Software School</small>
        </h1> */}
        <nav className="flex-item navbar-fixed-top" id="navbar">
          <Navbar collapseOnSelect expand="lg" className="nav-width navbar-collapse">
          <Navbar.Brand href="#home"><img src={logo} alt="Cohort 36 Logo" id="classLogo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <ul className="container" id="center-nav-elements">
                <Nav.Link className="nav-a" href="#about">About</Nav.Link>
                <Nav.Link className="nav-a" href="#devs">Developers</Nav.Link>
                <Nav.Link className="nav-a" href="#tech">Technologies</Nav.Link>
                <Nav.Link className="nav-a" href="#thanks">Thanks</Nav.Link>
                <Button variant="outline-light" id="rsvpButton">RSVP FOR DEMO DAY MARCH 27</Button>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    </div>
  </header>
)

//use withRouter() when you can't use the Route component
export default withRouter(NavBar);