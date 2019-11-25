import React, { Component } from 'react';
import './CounterHook.css';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';


class Counter extends Component {
 
    checkNumber = () => {
        let color = '';
        this.props.ctr === 0 
      ? color = 'grey' : this.props.ctr %10 === 0 
      ? color = 'yellow' : this.props.ctr%2 === 0 
      ? color = 'even' : color = 'odd';
     return color;
      }


    render() {
        return(
         
        <div className={'counter ' + this.checkNumber()}>
             <p>Hello world! </p>
             <p>You clicked {this.props.ctr} times!!</p>
          <button onClick= {this.props.onIncCounter}>Add</button>
          <button onClick= {this.props.onDecCounter}>Decrease</button>
          <button onClick= {this.props.onAddCounter}>add 5</button>
          <button onClick= {this.props.onRemCounter}>remove 5</button>
          <button onClick= {this.props.reset}>Reset</button>
          <button onClick= {() => this.props.onStoreCounter(this.props.ctr)}>Store</button>
          <ul>
            {this.props.results.map(item => (
              <li key={item.id}  onClick={() => this.props.onDeleteCounter(item.id)}>{item.value}</li>

            ))}
          </ul>
      </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
}
const mapDispatchtoProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onRemCounter: () => dispatch({type: actionTypes.REMOVE, value: 5}),
        reset: () => dispatch({type: actionTypes.RESET}),
        onStoreCounter: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteCounter: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id})

    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);

