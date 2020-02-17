import React, { Component } from 'react'
import './ClassWebsite.css'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

class ClassWebsite extends Component {

  render() {
    return (
      <>
        <section id="home">
          <NavBar />
        </section>
        <ApplicationViews />
      </>
    )
  }
}

export default ClassWebsite