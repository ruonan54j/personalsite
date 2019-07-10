import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Mhealth = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>
                <div class="proj-ind-container">

                    <h1 class="proj-ind-title">mHealth</h1>

                    <hr/>

                    <div class="row">
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/mhealthMockup.jpg')}
                                alt="img"></img>

                        </div>
                        <div class="col">
                            <h2>Overview</h2>
                            <p class="text-proj-ind">
                                mHealth is a dashboard for tracking your mental health. This project was built
                                during a 24 hour hackathon. Test out the app
                                <a href="https://mental-health-tracker.herokuapp.com/">here!</a>
                            </p>

                        </div>

                    </div>

                    <hr class="yellow-line"/>
                    <h2 class="proj-ind-title">Interface</h2>
                    <hr/>
                    <div class="row">
                        <p class="text-proj-ind">
                            This web app was built using PHP and vanilla JS. It implements ClearDB (SQL) and
                            consists of the following features
                        </p>
                        <ol>
                            <li>User friendly survey to regularly assess mood and lifestyle</li>
                            <li>Goals platform to keep you on track</li>
                            <li>Visual graphs to see your progress</li>
                            <li>
                                Daily inspirational quotes from an online API</li>
                        </ol>

                    </div>
                    <hr/>

                    <div class="row">
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/mh1.jpg')}
                                alt="img"></img>

                        </div>
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/mh2.jpg')}
                                alt="img"></img>

                        </div>
                        </div>
                        <div class="row second-row">
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/mh3.jpg')}
                                alt="img"></img>

                        </div>
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/mh4.jpg')}
                                alt="img"></img>

                        </div>

                    </div>
                </div>
            </div>
        </FadeIn>

    );

}

export default Mhealth;