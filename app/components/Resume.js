import React, { Component } from 'react';
import Navbar from './Navbar';
import FadeIn from 'react-fade-in';
import ResumeContent from './ResumeContent';

const Resume = () => {
 
    return ( 
        <FadeIn>
        <div>
        <Navbar/>
        <ResumeContent/>
        </div>
        </FadeIn>
    
    );
  
}

export default Resume;
