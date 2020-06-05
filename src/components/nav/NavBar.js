import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from './38logo.png'
import './NavBar.css'
import { Navbar, Nav, Button } from "react-bootstrap"
// Author: Lauren Riddle
// Purpose: To create the Navbar for the class website

const NavBar = () => (
  <header>
    <div className="flexContainer">
      <div className="flexContainer2">
        <nav className="flex-item navbar-fixed-top" id="navbar">
          <Navbar collapseOnSelect expand="lg" className="nav-width navbar-collapse">
          <Navbar.Brand href="#home"><img src={require(`./{38}logo.png`)} alt="Cohort 36 Logo" id="classLogo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <ul className="container" id="center-nav-elements">
                <Nav.Link className="nav-a" href="#about">About</Nav.Link>
                <Nav.Link className="nav-a" href="#devs">Developers</Nav.Link>
                <Nav.Link className="nav-a" href="#tech">Technologies</Nav.Link>
                <Nav.Link className="nav-a" href="#thanks">Thanks</Nav.Link>
                <Button href="https://www.eventbrite.com/e/nss-virtual-demo-day-web-development-cohort-38-tickets-107845151752" target="_blank" variant="outline-light" id="rsvpButton">RSVP FOR DEMO DAY JULY 1</Button>
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
