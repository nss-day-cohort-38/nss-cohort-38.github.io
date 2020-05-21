import React, { Component } from 'react'
import classPhoto from './class_photo_gradient.png'
import classPhotoFun from './class_photo_fun.png'
import classPhotoWhite from './class_photo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
import './About.css'
import "./studentCard.css"
import ApiManager from '../../modules/ApiManager'
import StudentCard from './studentCard'
import AboutUs from "./About"
import Podcasts from "./Podcasts"
import Technologies from './Technologies'
import Thanks from './Thanks';
import allStudents from '../../modules/students'


class Home extends Component {
  state = {
    students: [],
    joinedStudentsArray: []
  }

  componentDidMount() {
    // ApiManager.getAll("students")
    //     //create array for students who are not hired
        const notHiredYet = allStudents.filter(student => !student.isHired)
    //     //create array for students who are hired
        const hired = allStudents.filter(student => student.isHired)
    //     // Join the two arrays together
        const joinedStudentsArray = notHiredYet.concat(hired)
        // set the joined array to state
        this.setState({
          students: joinedStudentsArray
        })
  }

  render() {
    return (
      <>
        <h1 class="hidden-header">We Are Cohort 38</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={classPhoto}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={classPhotoFun}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={classPhotoWhite}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <section id="about">
          <AboutUs />
        </section>
        {/* <Podcasts></Podcasts> */}
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
        <section id="thanks">
          <Thanks />
        </section>

        <footer>© 2020. Nashville Software School Day Cohort 38.</footer>
      </>
    )
  }
}

export default Home
