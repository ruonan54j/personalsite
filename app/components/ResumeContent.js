import React, { Component } from 'react';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
 
class ResumeContent extends React.Component {
    
    constructor(props) {
        super(props); 
    
        this.state = {
          section:1
        };

        this.listenToScroll = this.listenToScroll.bind(this);

    }
    
    componentDidMount() {
        document.getElementById("scroll-div").addEventListener('scroll', this.listenToScroll);
        AOS.init({
          duration : 2000
        });
        
    }

    componentWillUnmount() {
        document.getElementById("scroll-div").removeEventListener('scroll', this.listenToScroll)
      }


      listenToScroll(){
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            var html = document.documentElement;
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || html.clientHeight)+20 &&
                rect.right <= (window.innerWidth || html.clientWidth)
            );
        }

        if (isInViewport(document.getElementById("education"))){
            this.setState({section:1});

        }
        else if (isInViewport(document.getElementById("skills"))){
            this.setState({section:2});
        }

        else if (isInViewport(document.getElementById("exp")) || isInViewport(document.getElementById("exp2"))){
            this.setState({section:3});
        }
        
        else if (isInViewport(document.getElementById("teams")) || isInViewport(document.getElementById("teams2"))){
            this.setState({section:4});
        }

        else if (isInViewport(document.getElementById("involve"))){
            this.setState({section:5});
        }
        console.log(this.state.section);
      }

      dirSection(el){
          document.getElementById(el).scrollIntoView({behavior: "smooth"});
          if(el==='education'){
              this.setState({section:1});
          }
          if(el==='skills'){
            this.setState({section:2});
        }
        if(el==='exp'){
            this.setState({section:3});
        }
        if(el==='teams'){
            this.setState({section:4});
        }
        if(el==='involve'){
            this.setState({section:5});
        }
      }
      
      

    render(){
    AOS.init();
    
    return ( 
      
        <div className="resume-container">
         <div className="options-resume">
         <h1 className={this.state.section == 1 ? 'yellow-opt':'opt-tab'} onClick={() => this.dirSection("education")}>Education</h1>
         <h1 className={this.state.section == 2 ? 'yellow-opt':'opt-tab'} onClick={() => this.dirSection("skills")}> Skills</h1>
         <h1 className={this.state.section == 3 ? 'yellow-opt':'opt-tab'} onClick={() => this.dirSection("exp")}>Work Experience</h1>
         <h1 className={this.state.section == 4 ? 'yellow-opt':'opt-tab'} onClick={() => this.dirSection("teams")}>Student Teams</h1>
         <h1 className={this.state.section == 5 ? 'yellow-opt':'opt-tab'} onClick={() => this.dirSection("involve")}>School Involvements</h1>
        
         <div>
         
        </div>
        
         </div>
            <div className="bd-overlay" id="scroll-div">
            <div className="border-container" id="education">
                <h1 className="resume-title">Education</h1>
                <div className="resume-desc">
                <p><strong>University of British Columbia | BSc | Computer Science Major </strong><br></br> <br></br> Expected Graduation: May, 2022</p>
                </div>
            </div>

            <div className="border-container" id="skills">
                <h1 className="resume-title">Technical Skills</h1>
                <div className="resume-desc">
                <p><strong>Programming Languages :</strong> 
                Java, React, JavaScript/CSS/HTML, PHP, C/C++, Python, VBA, Assembly, Verilog <br></br> <br></br>  
                <strong>Version Control :</strong> GitHub, SVN <br></br> <br></br>  <strong>
                    Graphic Design Tools :</strong> SolidWorks, 3Ds Max, Photoshop</p>
                </div>
            </div>

            <div className="border-container" id="exp">
                <h1 className="resume-title">Castle Lab | Full Stack Developer</h1>
                <div className="resume-desc">
                <p>Develop responsive and dynamic websites for realtors <br></br> <br></br>  
                    Built a full stack interface for realtors to manage their listings on (integrated with Webflow) <br></br> <br></br> 
                    Currently, startup is expanding to take on bigger projects from a broader range of clients
                    </p>
                </div>
            </div>


            <div className="border-container" id="exp2">
                <h1 className="resume-title">Netgear | Certification Engineer Intern</h1>
                <div className="resume-desc">
                <p><strong>Developed multiple support tools used within the Certification team </strong> <br></br> <br></br> 
                Wrote scripts in Python and VBA to parse data and automate excel sheets <br></br> <br></br>  
                Worked on C# automated testing script used for testing different sim cards on mobile hotspots <br></br> <br></br>  
                Used Selenium to automate large quantity of file package uploads onto Web Portal
                </p>
                </div>
            </div>

            <div className="border-container" id="teams">
                <h1 className="resume-title">UBC AeroDesign | Avionics Team</h1>
                <div className="resume-desc">
                <p>Coded scrolling graph using Processing to display real time data recorded by a small model aircraft</p>
                </div>
            </div>

            <div className="border-container" id="teams2">
                <h1 className="resume-title">UBC Rocket | Aerostructures Team</h1>
                <div className="resume-desc">
                <p>3D modelled nose cone designs and researched optimal fin specifications  <br></br> <br></br>  Conducted strength tests on 3D printed nose cone plate to test design</p>
                </div>
            </div>


            <div className="border-container-last" id="involve">
                <h1 className="resume-title">School Involvements</h1>
                <div className="resume-desc">
                <p><strong> IEEE</strong> | June 2018 - current | Social Media and Recruitment Executive <br></br> <br></br>  <strong> SUBC</strong> | July 2018 - current | Website Manager</p>
                </div>
            </div>
            </div>
         </div>
         
    );
    }

}

export default ResumeContent;
