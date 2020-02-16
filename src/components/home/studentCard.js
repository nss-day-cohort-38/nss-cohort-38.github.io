import React, { Component } from 'react';
import "./studentCard.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


class StudentCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={`../../images/students/${this.props.student.proImg}`} alt="student photo" />
                    </picture>

                    <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                    <p>Favorite quote: {this.props.student.quote}</p>
                    <FontAwesomeIcon icon={faUserCircle} type="button" />
                    <FontAwesomeIcon icon={faGithub} type="button" />
                    <FontAwesomeIcon icon={faLinkedin} type="button" />
                </div>
            </div>
        )
    }
}

        export default StudentCard;