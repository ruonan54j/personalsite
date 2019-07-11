import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/number/is-nan';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Resume from './components/Resume';
import Castle from './components/Castle';
import Robocop from './components/Robocop';
import Mhealth from './components/Mhealth';
import Model from './components/Model';
import Front from './components/Front';

var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


class App extends React.Component {
 
    render() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            require('./components/IE-style.css');
        }
        else  // If another browser, return 0
        {
            require('./components/Chrome-edge-style.css');
        }

      return (
        <Router>
        <div>
           
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/castle" component={Castle} />
          <Route path="/robocop" component={Robocop} />
          <Route path="/model" component={Model} />
          <Route path="/mhealth" component={Mhealth} />
          <Route path="/front" component={Front} />
        
        </div>
      </Router>
      
      );
    }
  }
  



ReactDOM.render(

   <Router>
        <Route path="/" component={ App }/>
    </Router>, document.getElementById('app')
);
