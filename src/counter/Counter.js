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



/*import React, { useState } from 'react';
import './CounterHook.css';
import { connect } from 'react-redux';

 //Hookilla sama countteri.

 const CounterHook = () => {
    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter + 1);
    }
    const remove = () => {
        /*if(counter > 0 ) {
        setCounter(counter - 1);
        }
        counter <= 0 ? setCounter(0) : setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    let test = counter === 0 
    ? "counter grey" : counter %10 === 0 
    ? "counter yellow" : counter%2 === 0 
    ? "counter even" : "counter odd";

     counterChangedHandler = ( action,value ) => {
    switch (action) {
      
        case 'inc':
            this.setState( ( prevState ) => { return { counter: prevState.counter + 1}})
            break;
        case 'dec':
            this.setState( ( prevState ) => { return { counter: prevState.counter - 1}})
            break;
        case 'add':
            this.setState( ( prevState ) => { return { counter: prevState.counter + value}})
            break;
        case 'rem':
            this.setState( ( prevState ) => { return { counter: prevState.counter - value}})
            break;
        default:
        break;
    }
}
    
    
    return(
        <div className={test}>
            <p>Hello world! </p>
            <p>You clicked {counter} times!!</p>
            <button onClick= {add}>Add</button>
            <button onClick= {remove}>Decrease</button>
            <button onClick= {reset}>Reset</button>
   <button onClick= {() => {this.counterChangedHandler('rem', 5)}}>dec 5</button> 

        </div>

     )
 }

    
export default CounterHook;*/