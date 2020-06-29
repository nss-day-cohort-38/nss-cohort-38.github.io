import React, { Component } from 'react';
import './About.css'
// Author: Lauren Riddle
// Purpose: To create the About Us component for cohort 36


class AboutUs extends Component {
    render() {
        return (
            <>
                <div className='about-background'>
                    <section className="about-us shadowing">
                        <h1 className="hello">Meet Cohort 38!</h1>
                        <p className="about-paragraph">We are a group of people with diverse work experience including musicians, health care professionals, military veterans, and more. We came together to learn ReactJS, JavaScript, Python, and Django at Nashville Software School. We had no idea that we'd quickly find there is much <span className="charater-traits-blue">more to coding than learning a language</span> and that COVID-19 would arrive and <span className="charater-traits-blue">challenge us like never before</span>.<br /><br /> Initially, we discovered the importance of <span className="charater-traits-yellow">clear group communication, developing fundamental problem solving skills, and enjoying the path of trial and error</span>. However, COVID-19 affected us during our first independent ReactJS projects and we had to quickly adapt from learning full time on site to fully remote. Nonetheless, we continued to gather remotely and support each other in continuing our path to growing as software developers.<br /><br /> Our <span className="charater-traits-blue">determination, passion for code, and relentless optimism </span> has helped us realize that we can learn throughout our obstacles and from how we face them. Now we are ready to move forward into jobs where we can continue our learning journeys and contribute to a new working environment.</p><br />
                        <h3 className="software-devs">We are software developers. </h3><br /><h2 className="c36">We are Cohort 38.</h2>
                    </section>
                </div>
            </>
        )
    }
}

export default AboutUs;
