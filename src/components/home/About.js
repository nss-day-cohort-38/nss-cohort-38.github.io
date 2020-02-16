import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';


class AboutUs extends Component {
    render() {
        return (
            <section className="about-us">
                <h1 className="hello">Meet Cohort 36!</h1>
                
                <p className="about-paragraph">With a diverse array of people from many different industries, we are anything from military veterans to writers, musicians, IT professionals, graphic designers, medics, waiters, salespeople, librarians, and stay at home moms. We come from many different backgrounds, but we all have something in common. We are a passionate, hardworking, problem solving group of people who came together for the experience of a lifetime. <br /><br />Six months ago, we set out to conquer ReactJS, JavaScript, Python, and Django. Throughout our journey, we laughed together, cried together, failed together, triumphed together, learned how to learn together, and we became family. We have grown not only as developers, but also as humans, realizing that the sky is the limit if you have determination and an endless thirst for learning. Now we are ready to channel our passion for software development into jobs where we can continue learning and making a difference.<br/><h3>We are software developers. </h3><h2>We are Cohort 36.</h2></p>
            </section>
        )
    }
}

        export default AboutUs;