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

var store = redux.createStore(reducer);

store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'complete'
});

console.log('Search text should be complete: ', store.getState());
