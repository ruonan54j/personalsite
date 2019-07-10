import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Castle = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>
                <div className="proj-ind-container">
                    <h1 className="proj-ind-title">Castle Lab</h1>

                    <hr/>

                    <div className="row">
                        <div className="col">
                            <img
                                className="img-proj-ind"
                                src={require('../../assets/Images/castleMockup.jpg')}
                                alt="img"></img>

                        </div>
                        <div className="col">
                            <h2>Overview</h2>
                            <p className="text-proj-ind">
                                Currently, I'm working as a full stack developer at Castle Lab.
                                <br/><br/>
                                We specialize in creating design driven dynamic websites for clients accross all
                                industries. Visit our website
                                <a href="https://www.castlelab.ca/">here!</a>
                            </p>

                        </div>

                    </div>
                    <hr className="yellow-line"/>
                    <h2 className="proj-ind-title">Interface</h2>
                    <hr/>

                    <div className="row">

                        <div className="col">
                            <h2>About</h2>
                            <p className="text-proj-ind">
                                The interface is a portal for our real estate clients to manage the listings
                                shown on their website. Clients can choose to manually upload their listings or
                                pull the data directly through entering an "MLSID".
                                <br/><br/>
                                Realtor websites are designed on Webflow so the interface is also fully
                                integrated with the Webflow CMS.
                            </p>

                        </div>

                        <div className="col">
                            <img
                                className="img-proj-ind img-right-ind"
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
