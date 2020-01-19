import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Speedgame from "./speedgame/Speedgame";
import Counter from "./counter/Counter";
import Memorygame from "./memorygame/Memorygame";
import Typinggame from "./typinggame/Typinggame";
import FormPrac2 from "./Forms/FormPrac2";
import MemeApp from "./Meme/MemeApp";
import Typinggame from "./typinggame/Typinggame";

class App extends Component {
  home = () => {
    return (
      <>
        <h2>Home</h2>
        <p>
          In this page there are some projects, that i have done during my
          studies of React programming
        </p>
      </>
    );
  };
  about = () => {
    return (
      <>
        <h2>About</h2>
        <ul>
          <li>
            <h4>Memorygame : </h4>
            Löydä 8 eläinparia mahdollisimman vähillä yrityksillä! <br />
            Optimoitu renderöintiä React Memo():n avulla
          </li>
          <li>
            <h4>Typing game : </h4>
            Testaa kirjoitusnopeutesi! <br />
            Tehty Hookeilla. Laskee kirjoitetut sanat ja kirjaimet
            kovakoodatun(30sec) ajan sisällä
          </li>
          <li>
            <h5>Counter: </h5>
            tehty Hookseilla sekä käyttäen Redux kirjastoa state hallintaan.
          </li>
          <li>
            <h5> Speedgame: </h5>
            alkuvaiheen projekti.
          </li>
          <li>
            <h5> Form pracs: </h5>
            Testailtu formien tekemistä Reactilla.
          </li>
          <li>
            <h5>Meme Generator: </h5>
            Rajapinnasta haettuja meemejä renderöidään näytölle satunnaisesti
            tekstin kera.
          </li>
        </ul>
      </>
    );
  };

  projects = ({ match }) => {
    return (
      <div className="project-container">
        <h2> Projects </h2>
        <p>
          <Link to={`${match.url}/counter`}>Contergame -- </Link>
          <Link to={`${match.url}/speedgame`}>Speedgame 2.7 -- </Link>
          <Link to={`${match.url}/memorygame`}>Memorygame -- </Link>
        </p>
        <p>
          <Link to={`${match.url}/formprac2`}>Form Practise 2 -- </Link>
          <Link to={`${match.url}/meme`}>Meme Generator -- </Link>
          <Link to={`${match.url}/typing`}>Typing game -- </Link>
        </p>

        <div className="projects">
          <Route
            path={`${match.path}/:name`}
            render={props => <this.project {...props} />}
          />
        </div>
      </div>
    );
  };

  project = ({ match }) => {
    return (
      <>
        <p>This is my project {match.params.name}</p>
        {match.params.name === "speedgame" ? (
          <Speedgame />
        ) : match.params.name === "memorygame" ? (
          <Memorygame />
        ) : match.params.name === "counter" ? (
          <Counter />
        ) : match.params.name === "formprac2" ? (
          <FormPrac2 />
        ) : match.params.name === "meme" ? (
          <MemeApp />
        ) : match.params.name === "typing" ? (
          <Typinggame />
        ) : (
          <div />
        )}
      </>
    );
  };
  nav = () => {
    return (
      <div className="nav">
        <nav>
          <Link to="/"> Home </Link>

          <Link to="/about"> About</Link>

          <Link to="/projects"> Projects </Link>
        </nav>
      </div>
    );
  };

  render() {
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
  }
}
export default App;

/*
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
