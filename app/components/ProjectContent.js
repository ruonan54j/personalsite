import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class ProjectContent extends React.Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

    componentDidMount() {
        AOS.init({duration: 2000});
    }

    routeChange(path) {
      window.location.hash = "#/"+path;
    }
  
    render() {
        AOS.init();

        return (

            <div className="">

                <div className="intro row">

                    <div id="home-left" className="col">

                        <div id="logo-cont">

                            <h1 className="name-title">RUONAN</h1>
                            <hr className="hr-intro"></hr>
                            <div id="desc-main">
                                <div className="desc-intro">
                                    Hi, nice to meet you! I am a full stack developer currently living in Vancouver.
                                </div>
                                <br/>
                                <div className="desc-intro">
                                    I have a passion for building things and want to drive social change through
                                    technology.
                                    <br/><br/>

                                    <a href="mailto:ruonanjia54@gmail.com" className="contact-link">
                                        <i class="fas fa-envelope icon-custom"></i>
                                    </a>

                                    <a href="https://github.com/ruonan54j" target="blank" className="contact-link">
                                        <i class="fab fa-github-square icon-custom"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ruonan54j/"
                                        target="blank"
                                        className="contact-link">
                                        <i class="fab fa-linkedin icon-custom"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <img id="mockup_main" src={require('../../assets/Images/selfie.JPG')}></img>

                    </div>

                </div>

                <div className="projects container">
                    <h1 className="proj-title">Recent Projects</h1>
                    <hr/>
                    <p className="instr-p">Click on card to view more</p>
                    <div className="row">
                     
                        <div className="card col" onClick={()=>this.routeChange("castle")}>
                            <img
                                className="img-proj"
                                src={require('../../assets/Images/castleMockup.jpg')}
                                alt="img"></img>
                            <div className="proj-hover">Castle Lab</div>
                        </div>
                  

                        <div className="card col" onClick={()=>this.routeChange("mhealth")}>
                            <img
                                className="img-proj"
                                src={require('../../assets/Images/mhealthMockup.jpg')}
                                alt="img"></img>
                            <div className="proj-hover">mHealth</div>
                        </div>
                        <div className="col card" onClick={()=>this.routeChange("model")}>
                            <img
                                className="img-proj"
                                src={require('../../assets/Images/rocket.jpg')}
                                alt="img"></img>
                            <div className="proj-hover">3D Modelling</div>
                            
                        </div>

                    </div>
                    <div className="row">
                        <div className="card col" onClick={()=>this.routeChange("robocop")}>
                            <img
                                className="img-proj"
                                src={require('../../assets/Images/robo.jpg')}
                                alt="img"></img>
                            <div className="proj-hover">RoboCop</div>
                        </div>
                        <div className="card col">
                            <img
                                className="img-proj"
                                src={require('../../assets/Images/front.jpg')}
                                alt="img"></img>
                            <div className="proj-hover">Front End Projects</div>
                        </div>
                        <div className="col card">
                            <img
                                className="img-proj"
                                src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/18045916/GM05.gif"
                                alt="img"></img>
                            <div className="proj-hover">3D Modelling</div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default withRouter(ProjectContent);