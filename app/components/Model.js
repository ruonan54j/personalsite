import React, {Component} from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';

const Model = () => {

    return (
        <FadeIn>
            <div>
                <Navbar/>

                <div class="proj-ind-container">

  <h1 class="proj-ind-title">3D Model</h1>

  <hr/>

  <div class="row">
    <div class="col">
    
      <img class="img-proj-ind" src={require('../../assets/Images/rocket.jpg')} alt="img"></img>

    </div>
    <div class="col">
      <h2>Overview</h2>
      <p class="text-proj-ind">
        Besides programming, I also have a passion for 3D modelling. I was part of the UBC Rocket team in first year University and worked on a subteam to design the nosecone. We even added a mount for a Go Pro to film the launch!
      </p>

    </div>

  </div>

  <hr class="yellow-line" />
  <h2 class="proj-ind-title">Here are some other 3D models I have made</h2>
  <hr/>

  <div class="row">
    <div class="col">
      <img class="img-proj-ind" src={require('../../assets/Images/claw1.jpg')} alt="img"></img>

    </div>
<div class="col">
      <img class="img-proj-ind" src={require('../../assets/Images/rocket2.jpg')} alt="img"></img>

    </div>
    </div>
<div class="row second-row">
<div class="col">
      <img class="img-proj-ind" src={require('../../assets/Images/claw2.jpg')} alt="img"></img>

    </div>
<div class="col">
      <img class="img-proj-ind" src={require('../../assets/Images/rocket4.jpg')}  alt="img"></img>

    </div>

  </div>
</div>
            </div>
        </FadeIn>
    );
}

export default Model;
