import React, { Component } from 'react';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

const mHealthImgs = ['mhealth_mockup1.jpg','dashboard_mhealth.JPG','survey_mhealth.JPG','goals_mhealth.JPG','graph_mhealth.JPG','mhealth2.JPG'];
const mHealthDesc =["mHealth is a dashboard for tracking your mental health. This project was built during a 24 hour hackathon. <span class='highlight-proj'> Test out the app</span> <a href='https://mental-health-tracker.herokuapp.com/' target='blank'>here</a>",
  "This web app was built using <span class='highlight-proj'>PHP and vanilla JS.</span> It implements ClearDB (SQL) and consists of the following dynamic components:",
"1) User friendly survey to regularly assess mood and lifestyle",
"2) Goals platform to keep you on track",
"3) Visual graphs to see your progress",
"4) Daily inspirational quotes from an online API"];

const castleImgs = ['castle mockup.jpg','ex_listings.JPG', 'mlsid.JPG', 'manual.JPG', 'active.JPG', 'edit.JPG'];
const castleDesc=["Currently a full stack developer and Castle Lab. We specialize in creating design driven dynamic websites for clients accross all industry.<span class='highlight-proj'>Visit our website</span> <a href='https://www.castlelab.ca/' target='blank'> here</a>","My most recent project has been to create a interface for realtor clients to manage their listings on. It is <span class='highlight-proj'>integrated with the Webflow API</span> to remotely manage content on a custom interface.",
"This application allows: <br>Upload by MLSID: pulls listing directly from the web to client's website",
"Manual Uploads: uploads a custom listing to website with multiple pictures",
"View all active/sold listings",
"Edit listing feature for slick user experience"];

const modelImgs =['rocket.jpg', 'claw1print.JPG', 'claw1.JPG','claw2print.jpg', 'claw2.JPG'];
const modelDesc=["Besides programming, I also have a passion for 3D modelling. I was part of the <span class='highlight-proj' >UBC Rocket team</span> in first year University and worked on a subteam to design the nosecone. We even added a mount for a Go Pro to film the launch!", "<span class='highlight-proj'>Autonomous claw competition:</span> <br> Built arduino controlled claws with a team for a competition.", "We had 2 designs which I modelled and assembled on Solidworks.", "I don't have pictures of the claws themselves but I did keep the engineer drawings!", "Properly labelled with dimensions and all the right angles.. ( unfortunately, dimensions don't show up because this image was too small )"];

const roboImgs=["robocop.jpg", 'roboin.JPG','hrobo.JPG','srobo.JPG'];
const roboDesc=["For a project course, my team built a <span class='highlight-proj' >home security patrol bot.</span> RoboCop takes in a set of coordinates and patrols the given path.", "RoboCop connects to wifi through a Raspberry Pi and recieves coordinates through a web interface. It takes pictures of intruders on command and sends them to your smartphone", 
"<span class='highlight-proj' >This is the hardware overview of the project: </span> <br> On the hardware side, I worked on the stepper motor library and getting the camera working with the Raspberry Pi. I also hooked up speakers to the Raspberry Pi but it wasn't implemented in the final product","<span class='highlight-proj' >This is the software overview of the project:</span> <br/> I worked on the front end web inteface to create an interactive graph where users can plot coordinates"];

const frontendImgs=['front-end2.jpg','calc.JPG', 'simonGame.JPG', 'tictac.png'];
const frontendDesc=["Here are some early front end projects I made when I first started coding! This is a location based <a href='https://codepen.io/rjiaaa/full/BbeWxr' target='blank'>weather app</a>",
"Classic <a href='https://codepen.io/rjiaaa/full/PLvpaE' target='blank'>Calculator</a> programming challenge", "Retro multi-mode <a href='https://codepen.io/rjiaaa/full/JzqWBX' target='blank'>Simon Game</a>", 
"Non-responsibe but pure logic based <a href='https://codepen.io/rjiaaa/full/zbQZjY' target='blank'>Tic Tac Toe Game</a>. (Only one way to win!)"];

class ProjectContent extends React.Component {
    constructor(props) {
        super(props);
        this.switchView = this.switchView.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.state = {
            content: 1,
            slideH: 0,
            slideC: 0,
            slideM: 0,
            slideR: 0,
            slideF: 0
        };
      }

      componentDidMount(){
        AOS.init({
          duration : 2000
        });
      }
      
      switchView(id1, id2) {
        if(this.state.content === 1){
          this.setState({content : 0});
          document.getElementById("content-layout").style.display='none';
        }
        else{
          this.setState({content : 1});
          document.getElementById("content-layout").style.display='block';
        }
        console.log('Click happened'+id1);
        document.getElementById(id2).style.display = 'none';
        document.getElementById(id1).style.display = 'flex';
        AOS.init({
          duration : 2000
        });
      }


      prevSlide(slideCurr, id_desc) {
        
        if(slideCurr==="slideH"){
          var curr = this.state.slideH-1;
          if(curr < 0)
          return;
          //$("#mhealth2").hide();
          document.getElementById(id_desc).innerHTML = mHealthDesc[this.state.slideH];
          this.setState({slideH:curr});
          //$("#mhealth2").fadeIn();
        }
        if(slideCurr==="slideC"){
          var curr = this.state.slideC-1;
          if(curr < 0)
          return;
          //$("#castle2").hide();
          document.getElementById(id_desc).innerHTML = castleDesc[this.state.slideC];
          this.setState({slideC:curr});
          //$("#castle2").fadeIn();
        }
        if(slideCurr==="slideM"){
          var curr = this.state.slideM-1;
          if(curr < 0)
          return;
          //$("#model2").hide();
          document.getElementById(id_desc).innerHTML = modelDesc[this.state.slideM];
          this.setState({slideM:curr});
          //$("#model2").fadeIn();
        }

        if(slideCurr==="slideR"){
          var curr = this.state.slideR-1;
          if(curr < 0)
          return;
          //$("#robo2").hide();
          document.getElementById(id_desc).innerHTML = roboDesc[this.state.slideR];
          this.setState({slideR:curr});
          //$("#robo2").fadeIn();
        }

        if(slideCurr==="slideF"){
          
          var curr = this.state.slideF-1;
          if(curr < 0)
          return;
          //$("#front2").hide();
          document.getElementById(id_desc).innerHTML = frontendDesc[this.state.slideF];
          this.setState({slideF:curr});
          //$("#front2").fadeIn();
        }
    }

      nextSlide(slideCurr, id_desc) {
          if(slideCurr==="slideH"){
            var curr = this.state.slideH+1;
            if (curr === mHealthImgs.length)
            return;
            //$("#mhealth2").hide();
            document.getElementById(id_desc).innerHTML = mHealthDesc[this.state.slideH];
            this.setState({slideH:curr});
            //$("#mhealth2").fadeIn();
          }
          if(slideCurr==="slideC"){
            var curr = this.state.slideC+1;
            if (curr === castleImgs.length)
            return;
            //$("#castle2").hide();
            document.getElementById(id_desc).innerHTML = castleDesc[this.state.slideC];
            this.setState({slideC:curr});
            //$("#castle2").fadeIn();
          }
          if(slideCurr==="slideM"){
            var curr = this.state.slideM+1;
            if (curr === modelImgs.length)
            return;
            //$("#model2").hide();
            document.getElementById(id_desc).innerHTML = modelDesc[this.state.slideM];
            this.setState({slideM:curr});
            //$("#model2").fadeIn();
          }

          if(slideCurr==="slideR"){
            var curr = this.state.slideR+1;
            if (curr === roboImgs.length)
            return;
            //$("#robo2").hide();
            document.getElementById(id_desc).innerHTML = roboDesc[this.state.slideR];
            this.setState({slideR:curr});
            //$("#robo2").fadeIn();
          }

          if(slideCurr==="slideF"){
            var curr = this.state.slideF+1;
            if (curr == frontendImgs.length)
            return;
            //$("#front2").hide();
            document.getElementById(id_desc).innerHTML = frontendDesc[this.state.slideF];
            this.setState({slideF:curr});
            //$("#front2").fadeIn();
          }
      }

    render(){
      AOS.init();
    
    return (
       
        <div className="project-div">

        <div className="project-container">
        
        <div className="intro">
       
   
        <div id="home-v2">

        <div id = "logo-cont">
        <svg id="logo" width="259" height="29" viewBox="0 0 259 49" xmlns="http://www.w3.org/2000/svg">
    
    
        <path d="M24.416 46L13.792 27.76H6.75198V46H0.927979V1.39201H15.328C18.6986 1.39201 21.536 1.96801 23.84 3.12001C26.1866 4.27201 27.936 5.82934 29.088 7.79201C30.24 9.75467 30.816 11.9947 30.816 14.512C30.816 17.584 29.92 20.2933 28.128 22.64C26.3786 24.9867 23.7333 26.544 20.192 27.312L31.392 46H24.416ZM6.75198 23.088H15.328C18.4853 23.088 20.8533 22.32 22.432 20.784C24.0106 19.2053 24.8 17.1147 24.8 14.512C24.8 11.824 24.032 9.73334 22.496 8.24001C20.96 6.74667 18.5706 6.00001 15.328 6.00001H6.75198V23.088Z" stroke="black"
        />
        <path d="M45.5615 1.39201V29.552C45.5615 33.4773 46.5428 36.4213 48.5055 38.384C50.4681 40.304 53.1561 41.264 56.5695 41.264C59.9828 41.264 62.6495 40.304 64.5695 38.384C66.5321 36.4213 67.5135 33.4773 67.5135 29.552V1.39201H73.3375V29.552C73.3375 33.264 72.5908 36.4 71.0975 38.96C69.6041 41.4773 67.5775 43.3547 65.0175 44.592C62.5001 45.8293 59.6628 46.448 56.5055 46.448C53.3481 46.448 50.4895 45.8293 47.9295 44.592C45.4121 43.3547 43.4068 41.4773 41.9135 38.96C40.4628 36.4 39.7375 33.264 39.7375 29.552V1.39201H45.5615Z" stroke="black"/>
        <path d="M103.277 46.448C99.1383 46.448 95.3623 45.488 91.949 43.568C88.5356 41.6053 85.8263 38.896 83.821 35.44C81.8583 31.9413 80.877 28.016 80.877 23.664C80.877 19.312 81.8583 15.408 83.821 11.952C85.8263 8.45334 88.5356 5.74401 91.949 3.82401C95.3623 1.86134 99.1383 0.880005 103.277 0.880005C107.458 0.880005 111.256 1.86134 114.669 3.82401C118.082 5.74401 120.77 8.43201 122.733 11.888C124.696 15.344 125.677 19.2693 125.677 23.664C125.677 28.0587 124.696 31.984 122.733 35.44C120.77 38.896 118.082 41.6053 114.669 43.568C111.256 45.488 107.458 46.448 103.277 46.448ZM103.277 41.2C106.392 41.2 109.186 40.4747 111.661 39.024C114.178 37.5733 116.141 35.5253 117.549 32.88C119 30.2347 119.725 27.1627 119.725 23.664C119.725 20.1653 119 17.0933 117.549 14.448C116.141 11.76 114.178 9.712 111.661 8.304C109.186 6.85334 106.392 6.12801 103.277 6.12801C100.162 6.12801 97.3463 6.85334 94.829 8.304C92.3543 9.712 90.3916 11.76 88.941 14.448C87.533 17.0933 86.829 20.1653 86.829 23.664C86.829 27.1627 87.533 30.2347 88.941 32.88C90.3916 35.5253 92.3543 37.5733 94.829 39.024C97.3463 40.4747 100.162 41.2 103.277 41.2Z" stroke="black"/>
        <path d="M168.437 46H162.613L139.189 10.48V46H133.365V1.32801H139.189L162.613 36.784V1.32801H168.437V46Z" stroke="black"/>
        <path d="M204.733 36.08H185.277L181.693 46H175.549L191.677 1.64801H198.397L214.461 46H208.317L204.733 36.08ZM203.133 31.536L195.005 8.81601L186.877 31.536H203.133Z" stroke="black"/>
        <path d="M256.562 46H250.738L227.314 10.48V46H221.49V1.32801H227.314L250.738 36.784V1.32801H256.562V46Z" stroke="black"/>
        </svg>
        <div id="underline"></div>
        <div id ="desc-main">
          <div id="desc-part1">
          Hi, nice to meet you! I am a <span className="highlight-txt">programmer & entrepreneur</span> currently living in Vancouver.
          </div>
          <br/>
          <div id="desc-part2">
          I have a passion for building things and want to drive social change through technology.
          <br/>
          <a href="mailto:ruonanjia54@gmail.com" className="contact-link">Email</a>
          <a href="https://github.com/ruonan54j" target="blank" className="contact-link">Github</a> 
          <a href="https://www.linkedin.com/in/ruonan54j/" target="blank" className="contact-link">LinkedIn</a>
          </div>

        </div>
      </div>
      </div>
    
      <img id="mockup_main" src={require('../../assets/Images/selfie.JPG')} ></img>
       
      
     

        </div>
    
        <div id="castle2" className="row project-row2 fade-div">
            <div className="col proj-desc2">
            <h1 className="proj-title">Castle</h1>
            <hr className="yellow-hr"/>
            <p className="proj-desc2" id="castle-desc" dangerouslySetInnerHTML={{__html:castleDesc[this.state.slideC]}}>
            </p>
            <div className="row btn-row">
            <button className="btn buttons" onClick={() => this.switchView("castle1", "castle2")}>close</button>
                <button className="btn buttons" onClick={() => this.prevSlide("slideC", "castle-desc")}>prev</button>
                <button className="btn buttons" onClick={() => this.nextSlide("slideC", "castle-desc")}>next</button>
              </div>
            </div>
            
            
            <div className="col subproject-div2" data-aos="fade-up"> 
            <img id = "castle-img" className="proj-ind"  src={require('../../assets/Images/'+ castleImgs[this.state.slideC])} />
            
            </div>
            
        </div>

        

        <div id="mhealth2" className="row project-row2 fade-div">
            <div id="mhealthL" className="col proj-desc2">
            <h1 className="proj-title">mHealth</h1>
            <hr className="yellow-hr"/>
            <p className="proj-desc2" id="mhealth-desc" 
           dangerouslySetInnerHTML={{__html:mHealthDesc[this.state.slideH]}}>
            
            </p>

            <div className="row btn-row">
            <button className="btn buttons" onClick={() => this.switchView("mhealth1", "mhealth2")}>close</button>
                <button className="btn buttons" onClick={() => this.prevSlide("slideH", "mhealth-desc")}>prev</button>
                <button className="btn buttons" onClick={() => this.nextSlide("slideH", "mhealth-desc")}>next</button>
              </div>
            </div>
            
            
            <div className="col subproject-div2" data-aos="fade-up"> 
            <img id = "mhealth-img" className="proj-ind" src={require('../../assets/Images/'+ mHealthImgs[this.state.slideH])}/>
            
            </div>
        </div>


        <div id="model2" className="row project-row2 fade-div">
            <div className="col proj-desc2">
            <h1 className="proj-title">3D Modelling Projects</h1>
            <hr className="yellow-hr"/>
            <p className="proj-desc2" id="model-desc"dangerouslySetInnerHTML={{__html:modelDesc[this.state.slideM]}}>
            </p>
            <div className="row btn-row">
            <button className="btn buttons" onClick={() => this.switchView("model1", "model2")}>close</button>
                <button className="btn buttons" onClick={() => this.prevSlide("slideM", "model-desc")} >prev</button>
                <button className="btn buttons" onClick={() => this.nextSlide("slideM", "model-desc")} >next</button>
              </div>
            </div>
            
            
            <div className="col subproject-div2" data-aos="fade-up"> 
            <img id = "model-img" className="proj-ind"  src={require('../../assets/Images/'+ modelImgs[this.state.slideM])}/>
            
            </div>
            
        </div>

        <div id="robo2" className="row project-row2 fade-div">
        <div className="col proj-desc2">
        <h1 className="proj-title">RoboCop: Patrol Bot</h1>
        <hr className="yellow-hr"/>
        <p className="proj-desc2" id="robo-desc" dangerouslySetInnerHTML={{__html:roboDesc[this.state.slideR]}}>
        </p>
        <div className="row btn-row">
            <button className="btn buttons" onClick={() => this.switchView("robo1", "robo2")} >close</button>
                <button className="btn buttons" onClick={() => this.prevSlide("slideR", "robo-desc")} >prev</button>
                <button className="btn buttons" onClick={() => this.nextSlide("slideR", "robo-desc")} >next</button>
              </div>
        </div>
        
        
        <div className="col subproject-div2" data-aos="fade-up"> 
        <img id = "robo-img" className="proj-ind"  src={require('../../assets/Images/'+ roboImgs[this.state.slideR])}/>
        </div>
        
        </div>
    
        
        
        <div id="front2" className="row project-row2 fade-div">
            <div className="col proj-desc2">
            <h1 className="proj-title">Front-End projects</h1>
            <hr className="yellow-hr"/>
            <p className="proj-desc2" id="front-desc" dangerouslySetInnerHTML={{__html:frontendDesc[this.state.slideF]}}>
            </p>
            <div className="row btn-row">
            <button className="btn buttons" onClick={() => this.switchView("front1", "front2")}>close</button>
                <button className="btn buttons" onClick={() => this.prevSlide("slideF", "front-desc")}>prev</button>
                <button className="btn buttons" onClick={() => this.nextSlide("slideF", "front-desc")}>next</button>
              </div>
            </div>
            
            
            <div className="col subproject-div2" data-aos="fade-up"> 
            <img id = "front-img" className="proj-ind"  src={require('../../assets/Images/'+ frontendImgs[this.state.slideF])} />
            </div>
            
        </div>
        <div id="content-layout">
        <h1>Recent Projects</h1>
        <div className="row">
        <div className="col-sm-8">
        <div id="castle1" className="card">
            <div>
            <img className="proj-ind clickable" onClick={() => this.switchView("castle2", "castle1")} src={require("../../assets/Images/castle mockup.jpg")}/>
            </div>
        </div>
        </div>

        <div className="col-sm-4">
        <div id = "mhealth1" className="card">
            <div>
            <img className="proj-ind clickable" onClick={() => this.switchView("mhealth2", "mhealth1")} src={require("../../assets/Images/mhealth_mockup1.jpg")}/>
            </div>
            </div>


        <div id="model1" className="card">
            <div>
            <img className="proj-ind clickable" onClick={() => this.switchView("model2", "model1")} src={require("../../assets/Images/rocket.jpg")}/>
            </div>  
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-4">

        <div id="front1" className="card">
        <div>
            <img className="proj-ind clickable" onClick={() => this.switchView("front2", "front1")} src={require("../../assets/Images/front-end2.jpg")}/>
          </div>
        </div>

        <div className="card">
        <h1 className="projThis" id="projThis">This website! <br></br> Coded in React</h1>
        </div>

        </div>

        <div className="col-sm-8">
        <div id="robo1" className="card">
        <div>
            <img className="proj-ind clickable" onClick={() => this.switchView("robo2", "robo1")} src={require("../../assets/Images/robocop.jpg")}/>
        </div>
        </div>
        </div>
      </div>
    </div>
        
       </div>
        </div>

      
        
        );
    }
}

export default ProjectContent;