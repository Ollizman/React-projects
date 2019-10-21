import * as actionTypes from '../../actions';

const initialState = {
    counter: 0
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state, counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
                return {
                    ...state, counter: state.counter - 1
                };
        case actionTypes.ADD:
                return {
                    ...state, counter: state.counter + action.value
                };
        case actionTypes.REMOVE:
                return {
                    ...state, counter: state.counter - action.value
                };
        case actionTypes.RESET:
                return {
                    ...state, counter: 0
                };
        default:
                break;
    }
    return state;
}



export default counterReducer;

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