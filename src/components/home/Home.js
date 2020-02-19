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
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={classPhoto} alt="Cohort 36 Class Photo" id="homeImage"></img>
              <div className="carousel-caption">
                {/* <h3>This is suppose to over lay above the image!!</h3>
                <p>Paragraph is suppose to over lay above the image!!</p> */}
              </div>      
            </div>

            <div className="item">
              <img src={classPhotoFun} alt="Cohort 36 Class Photo" id="homeImage"></img>
              <div className="carousel-caption">
                {/* <h3>This is suppose to over lay above the image!!</h3>
                <p>Paragraph is suppose to over lay above the image!!</p> */}
              </div>      
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
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
        <section id="thanks"></section>
      </>
    )
  }
}

export default Home