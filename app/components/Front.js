import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Front = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>
                <div class="proj-ind-container">

                    <h1 class="proj-ind-title">Early Front End Projects</h1>

                    <hr/>
                    <div class="fe-list">
                        <ul>
                            <a href="https://codepen.io/rjiaaa/full/PLvpaE" target="blank">
                                <li>Calculator App</li>
                            </a>
                            <a href="https://codepen.io/rjiaaa/full/zbQZjY" target="blank">
                                <li>Tic Tac Toe</li>
                            </a>
                            <a href="https://codepen.io/rjiaaa/full/BbeWxr" target="blank">
                                <li>Weather App</li>
                            </a>
                            <a href="https://codepen.io/rjiaaa/full/JzqWBX" target="blank">
                                <li>Retro Simon Game</li>
                            </a>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/front2.jpg')}
                                alt="img"></img>

                        </div>
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/front3.jpg')}
                                alt="img"></img>

                        </div>
                    
                    
                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/Front.jpg')}
                                alt="img"></img>

                        </div>

                        <div class="col">
                            <img
                                class="img-proj-ind"
                                src={require('../../assets/Images/front4.jpg')}
                                alt="img"></img>

                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>

    );

}

export default Front;