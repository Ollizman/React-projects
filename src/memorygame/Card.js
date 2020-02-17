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
    active: PropTypes.bool.isRequired,
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
