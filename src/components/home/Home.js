import React, { Component } from 'react'
import classPhoto from './class_photo.png'
import './Home.css'
import './About.css'
import ApiManager from '../../modules/ApiManager'
import StudentCard from './studentCard'
import AboutUs from "./About"
import Technologies from './Technologies'


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
        <Technologies/>
      </>
    )
  }
}

export default Home