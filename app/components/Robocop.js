import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Robocop = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>

                <div className="proj-ind-container">

                    <h1 className="proj-ind-title">RoboCop</h1>

                    <hr/>

                    <div className="row">
                        <div className="col">
                            <img
                                className="img-proj-ind"
                                src={require('../../assets/Images/robo1_1.jpg')}
                                alt="img"></img>

                        </div>
                        <div className="col">
                            <h2>Overview</h2>
                            <p className="text-proj-ind">
                                For a project course, my team built a home security patrol bot. RoboCop takes in
                                a set of coordinates and patrols the given path.
                            </p>

                        </div>

                    </div>

                    <hr className="yellow-line"/>
                    <h2 className="proj-ind-title">Interface</h2>
                    <hr/>

                    <div className="row">
                        <div className="col">
                            <p className="text-proj-ind">
                                <h2 className="robo-desc">Overview</h2>
                                RoboCop connects to wifi through a Raspberry Pi and recieves coordinates through
                                a web interface. It takes pictures of intruders on command and sends them to
                                your smartphone
                            </p>
                            <div></div>

                        </div>
                        <div className="col">
                            <img
                                className="img-proj-ind"
                                src={require('../../assets/Images/robo2.jpg')}
                                alt="img"></img>

                        </div>

                        <div className="row">

                            <div className="col">
                                <h2>Hardware</h2>
                                <p>
                                    On the hardware side, I worked on the stepper motor library and getting the
                                    camera working with the Raspberry Pi. I also hooked up speakers to the Raspberry
                                    Pi but it wasn't implemented in the final product
                                </p>
                            </div>
                            <div className="col">
                                <h2>Software</h2>
                                <p>
                                    On the software side, I worked on the front end web inteface to create an
                                    interactive graph where users can plot a set of coordinates for the robot to
                                    follow
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </FadeIn>
            );
        }

            export default Robocop;