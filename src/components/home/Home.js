import React, { Component } from 'react'
import classPhoto from './class_photo_gradient.png'
import classPhotoFun from './class_photo_fun.png'
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
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={classPhoto} alt="Cohort 36 Class Photo" id="homeImage"></img>
              <div className="carousel-caption">
                {/* <h3>This is suppose to over lay above the image that scrolls!</h3>
                <p>Paragraph is suppose to over lay above the image that scrolls!</p> */}
              </div>      
            </div>

            <div className="item">
              <img src={classPhotoFun} alt="Cohort 36 Class Photo" id="homeImage"></img>
              <div className="carousel-caption">
                {/* <h3>This is suppose to over lay above the image that scrolls!</h3>
                <p>Paragraph is suppose to over lay above the image that scrolls!</p> */}
              </div>      
            </div>
          </div>
        </div>

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