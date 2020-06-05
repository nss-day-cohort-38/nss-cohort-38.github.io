import React from 'react';
import './Technologies.css'
// Author: Sam Pita
// Purpose: To display the technologies Cohort 36 has gained knowledge and practice in


const Technologies = () => (
    <>
        <section className="technologies">
            <h2 id="techTitle">Technologies</h2>
            <div className="technologiesContainer">
                <div className="cardContainer">
                    <img className="techImage" src={require(`./javascript.png`)} alt="JavaScript Icon"></img>
                    <div className="technologyText">Javascript</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./reactJS.png`)} alt="React Icon"></img>
                    <div className="technologyText">React JS</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./python.png`)} alt="Python Icon"></img>
                    <div className="technologyText">Python</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./django.png`)} alt="Django Icon"></img>
                    <div className="technologyText">Django</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./git.png`)} alt="Git Icon"></img>
                    <div className="technologyText">Git</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./github.png`)} alt="GitHub Icon"></img>
                    <div className="technologyText">GitHub</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./html5.png`)} alt="HTML5 Icon"></img>
                    <div className="technologyText">HTML5</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./css3.png`)} alt="CSS3 Icon"></img>
                    <div className="technologyText">CSS3</div>
                </div>
                {/* <div className="cardContainer">
                    <img className="techImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" alt="Bootstrap Icon"></img>
                    <div className="technologyText">Bootstrap</div>
                </div> */}
                {/* <div className="cardContainer">
                    <img className="techImage" src="https://nss-day-cohort-34.github.io/Class-Website/images/techs/webpack.png" alt="Webpack Icon"></img>
                    <div className="technologyText">Webpack</div>
                </div> */}
                <div className="cardContainer">
                    <img className="techImage" src={require(`./npm.png`)} alt="NPM Icon"></img>
                    <div className="technologyText">NPM</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./json.png`)} alt="JSON Icon"></img>
                    <div className="technologyText">JSON</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./sql.png`)} alt="SQL Icon"></img>
                    <div className="technologyText">SQL</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./tplus.png`)} alt="TablePlus Icon"></img>
                    <div className="technologyText">TablePlus</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./vsc.png`)} alt="VSCode Icon"></img>
                    <div className="technologyText">Visual Studio Code</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./postman.png`)} alt="Postman Icon"></img>
                    <div className="technologyText">Postman</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./zoom.jpg`)} alt="Zoom Icon"></img>
                    <div className="technologyText">Zoom</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src={require(`./andy.png`)} alt="AndyHeartDog"></img>
                    <div className="technologyText">Andy Heart Dog</div>
                </div>
            </div>
        </section>
    </>
)
export default Technologies;
