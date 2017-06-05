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

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
   var state = store.getState(); 
    
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});

//unsubscribe();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Gowri'
});



store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Mead'
});

