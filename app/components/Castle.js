import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Castle = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>
                <div class="proj-ind-container">
                    <h1 class="proj-ind-title">Castle Lab</h1>

                    <hr/>

                    <div class="row">
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/castleMockup.jpg')}
                                alt="img"></img>

                        </div>
                        <div class="col">
                            <h2>Overview</h2>
                            <p class="text-proj-ind">
                                Currently, I'm working as a full stack developer at Castle Lab.
                                <br/><br/>
                                We specialize in creating design driven dynamic websites for clients accross all
                                industries. Visit our website
                                <a href="https://www.castlelab.ca/">here!</a>
                            </p>

                        </div>

                    </div>
                    <hr class="yellow-line"/>
                    <h2 class="proj-ind-title">Interface</h2>
                    <hr/>

                    <div class="row">

                        <div class="col">
                            <h2>About</h2>
                            <p class="text-proj-ind">
                                The interface is a portal for our real estate clients to manage the listings
                                shown on their website. Clients can choose to manually upload their listings or
                                pull the data directly through entering an "MLSID".
                                <br/><br/>
                                Realtor websites are designed on Webflow so the interface is also fully
                                integrated with the Webflow CMS.
                            </p>

                        </div>

                        <div class="col">
                            <img
                                class="img-proj-ind img-right-ind"
                                src={require('../../assets/Images/listings.jpg')}
                                alt="img"></img>

                        </div>
                    </div>

                </div>
            </div>
        </FadeIn>

    );

}

export default Castle;
