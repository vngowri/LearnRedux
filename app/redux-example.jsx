var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'annonymous'}, action)=> {
    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);