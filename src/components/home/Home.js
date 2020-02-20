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
    joinedStudentsArray: []
  }

  componentDidMount() {
    ApiManager.getAll("students")
      .then((studentsArray) => {
        //create array for students who are not hired
        const notHiredYet = studentsArray.filter(student => !student.isHired)
        //create array for students who are hired
        const hired = studentsArray.filter(student => student.isHired)
        // Join the two arrays together
        const joinedStudentsArray = notHiredYet.concat(hired)
        // set the joined array to state
        this.setState({
          students: joinedStudentsArray
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
          <AboutUs />
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
        <br />
        <br />
        <section id="tech">
          <Technologies />
        </section>
        <br />
        <br />
        <section id="thanks">
          <Thanks />
        </section>

        <footer>© 2020. Nashville Software School Day Cohort 36.</footer>
      </>
    )
  }
}

export default Home