import React, { Component } from 'react'
import classPhoto from './class_photo_gradient.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import './About.css'
import "./studentCard.css"
import ApiManager from '../../modules/ApiManager'
import StudentCard from './studentCard'
import AboutUs from "./About"
import Technologies from './Technologies'
import Thanks from './Thanks';


class Home extends Component {
  state = {
    students: [],
  }

  componentDidMount() {
    //get all students from ApiManager and put it in state
    ApiManager.getAll("students")
    .then((studentsArray) => {
        this.setState({
            students: studentsArray
        })
    })
  }

  render() {
    return (
      <>
        <section id="home">
        <img src={classPhoto} alt="Cohort 36 Class Photo" id="homeImage"></img>
        </section>
        <section id="about">
        <AboutUs/>
        </section>
        
        <div id="devs" className="container-cards">
        {this.state.students.map(student =>
          <StudentCard
            key={student.id}
            student={student}
            {...this.props}
          />
        )}
        </div>
        <section id="tech">
          <Technologies/>
        </section>
        <section id="thanks">
          <Thanks/>
        </section>
      </>
    )
  }
}

export default Home