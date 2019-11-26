import React from "react";
import "./Cards.css";
import PropTypes from "prop-types";

function Card(props) {
  Card.defaultProps = {
    name: "",
    url: "",
    active: false
  };

  Card.propTypes = {
    //setting accepted prop types and that the prop is required for active prop.
    active: PropTypes.bool.isRequired, //function based component, Cards.propTypes = {}
    name: PropTypes.string
  };

  const { url, name, click, active } = props;
  console.log("rendered: ", name);
  const Image = () =>
    active ? (
      <img src={url} alt={name} style={{ borderRadius: "20%" }} />
    ) : (
      <div />
    );

  const activeStyle = active ? "active" : "";

  return (
    <div className={"card " + activeStyle} onClick={click}>
      <Image />
    </div>
  );
}
function areEqual(prevProps, nextProps) {
  const { found, active } = nextProps;
  if (found === 1 || active === prevProps.active) {
    return true;
  }
  return false;
}

export default React.memo(Card, areEqual);

/*

import React, { Component } from 'react';
import './Cards.css';
import PropTypes from 'prop-types'


class Card extends Component {

    static defaultProps = {
        name: '',
        url: '',
        active: false
    }

    urlCheck = () => this.props.url.startsWith('https://cdn.pixabay.com/photo/')

    static propTypes = { //setting accepted prop types and that the prop is required for active prop.
        active: PropTypes.bool.isRequired, //function based component, Cards.propTypes = {}
        name: PropTypes.string
    }
    /*
    React Docs on PropTypes:
 https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


shouldComponentUpdate = (nextProps) => {
    const { found, active } = nextProps
    if (found === 1 || active === this.props.active || this.urlCheck === false) {
        return false
    }
    return true
}
render() {
    const { url, name, click, active } = this.props
    console.log('rendered: ', name)
    const Image = () => active ? <img
        src={url}
        alt={name}
        style={{ borderRadius: '20%' }}
    /> : <div />

    const activeStyle = active ? "active" : ''

    return (
        <div className={'card ' + activeStyle} onClick={click} >
            <Image />
        </div>
    )
}
}
export default Card

*/
