import React, { Component } from "react";

class Apitesting extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
      links: [],
      film: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/films/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          film: data,
          links: data.characters,
          loading: false
        });
      });
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.film.director;
    fetch(this.state.links[0])
      .then(response => response.json())
      .then(data => {
        this.setState({ character: data });
      });
    return (
      <div>
        <p>{text}</p>
        <p>
          {" "}
          first character's name in the movie is: {this.state.character.name}
        </p>
      </div>
    );
  }
}
export default Apitesting;

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
