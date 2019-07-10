import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Robocop = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>

                <div class="proj-ind-container">

                    <h1 class="proj-ind-title">RoboCop</h1>

                    <hr/>

                    <div class="row">
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/robo1_1.jpg')}
                                alt="img"></img>

                        </div>
                        <div class="col">
                            <h2>Overview</h2>
                            <p class="text-proj-ind">
                                For a project course, my team built a home security patrol bot. RoboCop takes in
                                a set of coordinates and patrols the given path.
                            </p>

                        </div>

                    </div>

                    <hr class="yellow-line"/>
                    <h2 class="proj-ind-title">Interface</h2>
                    <hr/>

                    <div class="row">
                        <div class="col">
                            <p class="text-proj-ind">
                                <h2 class="robo-desc">Overview</h2>
                                RoboCop connects to wifi through a Raspberry Pi and recieves coordinates through
                                a web interface. It takes pictures of intruders on command and sends them to
                                your smartphone
                            </p>
                            <div></div>

                        </div>
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/robo2.jpg')}
                                alt="img"></img>

                        </div>

                        <div class="row">

                            <div class="col">
                                <h2>Hardware</h2>
                                <p>
                                    On the hardware side, I worked on the stepper motor library and getting the
                                    camera working with the Raspberry Pi. I also hooked up speakers to the Raspberry
                                    Pi but it wasn't implemented in the final product
                                </p>
                            </div>
                            <div class="col">
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