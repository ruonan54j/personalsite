import React, { Component } from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';
import ProjectContent from './ProjectContent';

const Home = () => {
 
  return ( 
    <FadeIn>
    <Navbar/>
    <ProjectContent/>
    </FadeIn>
  
  );

}

export default Home;
