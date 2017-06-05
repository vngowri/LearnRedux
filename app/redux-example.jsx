var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'annonymous'}, action)=> {    
    
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }    
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Gowri'
});

console.log('Name should be Gowri', store.getState());
