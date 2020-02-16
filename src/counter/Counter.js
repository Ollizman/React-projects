import React, { Component } from "react";
import "./CounterHook.css";
import { connect } from "react-redux";
import * as actionTypes from "../actions";
import { Button } from '../Buttons';

class Counter extends Component {
  checkNumber = () => {
    let color = "";
    this.props.ctr === 0
      ? (color = "grey")
      : this.props.ctr % 10 === 0
      ? (color = "yellow")
      : this.props.ctr % 2 === 0
      ? (color = "even")
      : (color = "odd");
    return color;
  };

  render() {
    const {
      ctr,
      onIncCounter,
      onDecCounter,
      onAddCounter,
      onRemCounter,
      onDeleteCounter,
      onStoreCounter,
      results,
      reset
    } = this.props;

    return (
      <div className={"counter " + this.checkNumber()}>
        <p>Hello world! </p>
        <p>You clicked {ctr} times!!</p>
        <Button counter onClick={onIncCounter}>Add</Button>
        <Button counter onClick={onDecCounter}>Decrease</Button>
        <Button counter onClick={onAddCounter}>add 5</Button>
        <Button counter onClick={onRemCounter}>remove 5</Button>
        <Button counter onClick={reset}>Reset</Button>
        <Button counter onClick={() => onStoreCounter(ctr)}>Store</Button>
        <ul>
          {results.map(item => (
            <li key={item.id} onClick={() => onDeleteCounter(item.id)}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchtoProps = dispatch => {
  const {
    INCREMENT,
    DECREMENT,
    ADD,
    REMOVE,
    RESET,
    STORE_RESULT,
    DELETE_RESULT
  } = actionTypes;
  return {
    onIncCounter: () => dispatch({ type: INCREMENT }),
    onDecCounter: () => dispatch({ type: DECREMENT }),
    onAddCounter: () => dispatch({ type: ADD, value: 5 }),
    onRemCounter: () => dispatch({ type: REMOVE, value: 5 }),
    reset: () => dispatch({ type: RESET }),
    onStoreCounter: result => dispatch({ type: STORE_RESULT, result: result }),
    onDeleteCounter: id =>
      dispatch({ type: DELETE_RESULT, resultElementId: id })
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
