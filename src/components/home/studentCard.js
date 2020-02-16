import React, { Component } from 'react';
import "./studentCard.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';


class StudentCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`../../images/students/${this.props.student.proImg}`)} alt="student photo" height="1000px"/>
                    </picture>

                    <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                    <p>Favorite quote: {this.props.student.quote}</p>
                    <div className="icon-container">
                    {/* <FontAwesomeIcon icon={faUserCircle} type="button" className="icons"/> */}
                    <FontAwesomeIcon icon={faGlobe} type="button" className="icons"/>
                    <FontAwesomeIcon icon={faGithub} type="button" className="icons"/>
                    <FontAwesomeIcon icon={faLinkedin} type="button" className="icons"/>
                    <FontAwesomeIcon icon={faEnvelope} type="button" className="icons"/>
                    </div>
                </div>
            </div>
        )
    }
}

        export default StudentCard;