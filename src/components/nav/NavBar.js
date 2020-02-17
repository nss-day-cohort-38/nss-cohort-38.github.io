import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from './36logo.png'
import './NavBar.css'
import { Navbar, Nav } from "react-bootstrap"


const NavBar = () => (
      <header>
        <div className="flexContainer">
          <img src={logo} alt="Cohort 36 Logo" id="classLogo"></img>
          <div className="flexContainer2">
            <h1 className="site-title flex-item">Cohort 36<br />
              <small>Nashville Software School</small>
            </h1>
            <nav className="flex-item" id="navbar">
            <Navbar  expand="lg" className="nav-width">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
              <ul className="container">
                <li><Nav.Link className="nav-a" href="#home">Home</Nav.Link></li>
                <li><Nav.Link className="nav-a" href="#about">About</Nav.Link></li>
                <li><Nav.Link className="nav-a" href="#devs">Developers</Nav.Link></li>
                <li><Nav.Link className="nav-a" href="#tech">Technologies</Nav.Link></li>
                <li><Nav.Link className="nav-a" href="#thanks">Thanks</Nav.Link></li>
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