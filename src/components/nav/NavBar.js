import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from './36logo.png'
import './NavBar.css'

const NavBar = () => (
      <header>
        <div className="flexContainer">
          <img src={logo} alt="Cohort 36 Logo" id="classLogo"></img>
          <div className="flexContainer2">
            <h1 className="site-title flex-item">Cohort 36<br />
              <small>Nashville Software School</small>
            </h1>
            <nav className="flex-item" id="navbar">
              <ul className="container">
                <li><a className="nav-a" href="#home">Home</a></li>
                <li><a className="nav-a" href="#about">About</a></li>
                <li><a className="nav-a" href="#devs">Developers</a></li>
                <li><a className="nav-a" href="#tech">Technologies</a></li>
                <li><a className="nav-a" href="#thanks">Thanks</a></li>
              </ul>
            </nav>
            </div>
        </div>
      </header>
    )

//use withRouter() when you can't use the Route component
export default withRouter(NavBar);