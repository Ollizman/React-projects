import * as actionTypes from '../../actions';

const initialState = {
    results: []
}


const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case actionTypes.STORE_RESULT:
                return {
                    ...state, results: state.results.concat({id: new Date(), value: action.result})
                };
        case actionTypes.DELETE_RESULT:
                return {
                    ...state, results: state.results.filter(result => result.id !== action.resultElementId)
                };
       default:
           break;
    }
    return state;
}



export default resultsReducer;

/*

    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if (action.type === 'RESET') {
        return {
            ...state,
            counter: state.counter = 0
        }
    }
    
    return state;

*/