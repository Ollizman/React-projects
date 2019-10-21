import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
  <h2>Home</h2>
  </div>
  );
}
const About = () => {
  return (
    <div>
  <h2>About</h2>
  </div>
  );
}
const Contact = () => {
  return (
    <div>
  <h2>Contact</h2>
  </div>
  );
}


const App = () => {

  return (
    <div className="App">
      
      <div className="Header">


      <div className="Main">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </nav>

          <Switch>

            <Route exact path="/" component={Home} />
             
            <Route path="/about" component={About} />
            
            <Route path="/contact" component={Contact} />
             
              
         </Switch>
        </Router>


      <div className="Footer">
      <p>Footer</p>

      </div>
      </div>
      </div>
   </div>
  );
}

export default App;