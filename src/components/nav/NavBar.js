import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from './36logo.png'
import './NavBar.css'

const NavBar = () => (
      <header>
        <div className="flexContainer">
          <img src={logo} alt="Cohort 36 Logo" id="classLogo"></img>
          <div className="flexContainer2">
            <h1 className="site-title">Cohort 36<br />
              <small>Nashville Software School</small>
            </h1>
            <nav>
              <ul className="container">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/locations">About</Link></li>
                <li><Link className="nav-link" to="/animals">Developers</Link></li>
                <li><Link className="nav-link" to="/employees">Technologies</Link></li>
                <li><Link className="nav-link" to="/owners">Thanks</Link></li>
              </ul>
            </nav>
            </div>
        </div>
      </header>
    )

//use withRouter() when you can't use the Route component
export default withRouter(NavBar);