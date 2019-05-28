import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/number/is-nan';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Resume from './components/Resume';

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
        
        </div>
      </Router>
      
      );
    }
  }
  



ReactDOM.render(
    <App/>, document.getElementById('app')
);
