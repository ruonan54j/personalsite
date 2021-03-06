import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
    let path = ""+window.location.href;

    return (
        
        <nav className="navbar row">
            
            <div className="col-sm-8 tab1">
                <Link to="/" className="rj-logo" href="#">RJ</Link>
            </div>
            
            
            <div className="col-sm-2 tab2"> <a href="/" className={window.location.href.indexOf('resume') < 0 ? "nav-tab nav-tab-u": "nav-tab"}>Projects</a> </div>
               
            <div className="col-sm-2 tab3"> <Link to="/resume" className={window.location.href.indexOf('resume') > 0 ?"nav-tab nav-tab-u":"nav-tab"}>Resume</Link> </div>
            
        </nav>
       
      
        );
    
}

export default Navbar;