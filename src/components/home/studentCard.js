import React, { Component } from 'react';
import "./studentCard.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';


class StudentCard extends Component {
    render() {
        return (
            <div className="student-card">
                <div className="card-content">
                    <div className="card-fx">
                        {/* <picture> */}
                        <img src={require(`../../images/students/${this.props.student.proImg}`)} alt="student-serious-photo" />
                        <img src={require(`../../images/students/${this.props.student.funImg}`)} className="student-fun-photo" />
                        {/* </picture> */}
                    </div>

                    <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                    <p>Favorite quote: {this.props.student.quote} -{this.props.student.quoteAuthor}</p>
                    <div className="icon-container">
                    { this.props.student.portfolio !== "" ? 
                    ( <a href={`${this.props.student.portfolio}`} target="_blank"><FontAwesomeIcon icon={faGlobe}  className="icons" fill="none"/></a>) 
                    : (<></>)}

                    { this.props.student.github !== "" ? 
                    (<a href={`${this.props.student.github}`} target="_blank"><FontAwesomeIcon icon={faGithub}  className="icons"/></a>) 
                    : (<></>)}
                    { this.props.student.linkedIn !== "" ? 
                    (<a href={`${this.props.student.linkedIn}`} target="_blank"><FontAwesomeIcon icon={faLinkedin}  className="icons"/></a>) 
                    : (<></>)}
                    { this.props.student.linkedIn !== "" ? 
                    (<a href={`mailto:${this.props.student.email}`}><FontAwesomeIcon icon={faEnvelope}  className="icons"/></a>) 
                    : (<></>)}
                    </div>
                </div>
            </div>
        )
    }
}

        export default StudentCard;