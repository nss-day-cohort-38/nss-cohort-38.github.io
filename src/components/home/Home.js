import React, { Component } from 'react'
import classPhoto from './c36-class-photo-temporary.png'
import './Home.css'
import './About.css'
import ApiManager from '../../modules/ApiManager'
import StudentCard from './studentCard'
import AboutUs from "./About"


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
    console.log("this.state", this.state)
    return (
      <>
        <img src={classPhoto} alt="Cohort 36 Class Photo" id="homeImage"></img>
        <AboutUs/>
        <div className="container-cards">
        {this.state.students.map(student =>
          <StudentCard
            key={student.id}
            student={student}
            {...this.props}
          />
        )}
        </div>
      </>
    )
  }
}

export default Home