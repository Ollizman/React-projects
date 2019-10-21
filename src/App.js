import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Speedgame from './speedgame/Speedgame';
import Counter from './counter/Counter';
import Memorygame from './memorygame/Memorygame';



class App extends Component {

/*
1. Router
HashRouter /../#..
BrowserRouter /../..
2. Route Switch

*/
home = () => {
  return(
    <div>
  <h2>Home</h2>
  <p>This is home page</p>
  </div>
  )
}
about = () => {
  return(
    <div>
    <h2>About</h2>
    <p>We practise basci react apps</p>
    </div>
  )
}

projects = ({ match }) => {
  return(
    <div className="project-container">
    <h2>Projects</h2>
    <p><Link to={`${match.url}/counter`}>Contergame</Link></p>
    <p><Link to={`${match.url}/speedgame`}>Speedgame 2.7</Link></p>
    <p><Link to={`${match.url}/memorygame`}>Memorygame</Link></p>

    <div className="projects">

     <Route 
     path = {`${match.path}/:name`}
     render = { (props) => <this.project {...props} />}
     />
    
    </div>
    </div>
  )
}

project = ({match}) => {
  return(
    <div>
      <p>This is my project {match.params.name}</p>
      {match.params.name === 'speedgame' ? 
          <Speedgame /> :
        match.params.name === 'memorygame' ?
          <Memorygame />    :
      
          <Counter />        
    }
   </div>
  )
}
nav = () => {
  return (
    <div className="nav">
   
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

render()  {

  return (
    <div className="container">
      <Router>

    {this.nav()}

    <Switch>
      <Route exact path="/" component={this.home} />

      <Route path="/about" component={this.about} />

      <Route path="/projects" component={this.projects} />

    </Switch>


      </Router>
    </div>

  );

};
}
export default App;

/*const Counter = () => {
  return(
    <div>
  <h2>Counter</h2>
  <p>This is home page</p>
  </div>
  )
}
const Speedgame = () => {
  return(
    <div>
  <h2>Speedgame</h2>
  <p>This is home page</p>
  </div>
  )
}
const Portfolio = () => {
  return(
    <div>
  <h2>Portfolio</h2>
  <p>This is home page</p>
  </div>
  )
}
    <Switch>
      <Route path={`${match.url}/counter`} component={Counter} />

      <Route path={`${match.url}/speedgame`} component={Speedgame} />

      <Route path={`${match.url}/portfolio`} component={Portfolio} />

    </Switch>

          <Route 
      path = {`${match.path}/:name`}
      render={match.params.name === 'counter' ? ({ match }) => (
        <div>
          {' '}
          <h3> {match.params.name} </h3>
            <Counter />
          
          </div>
      ):  ({ match }) => (
      <div>
         
          <h3> {match.params.name} </h3>
            <Speedgame />
          
          </div>
      )
    }      
     />
*/
