var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state={stateDefault}, action) => {       
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;    
    }                                                                         
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));



//subscribe to changes
var unsubscribe = store.subscribe( ()=> {
   var state = store.getState();
   document.getElementById('app').innerHTML = state.searchText;
    
});

//unsubscribe();

store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'complete'
});

store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'finish'
});


store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'work'
});

