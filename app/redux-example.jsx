var redux = require('redux');

console.log('Starting redux example');

var nextHobbyId = 1;
var nextMovieId = 1;
var stateDefault = {
    name: 'annonymous',
      hobbies: [],
      movies: []
    
};


var reducer = (state = stateDefault, action)=> {    
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                ...state.hobbies, 
                {
                    id: nextHobbyId++, 
                    hobby: action.hobby
                }
            ]
            };
    
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)           
            };    
    
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                ...state.movies, 
                {
                    id: nextMovieId++, 
                    title: action.title,
                    genre: action.genre
                }
            ]
            };

        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
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
    
    console.log('New State', store.getState());
});

//unsubscribe();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Gowri'
});

store.dispatch({
    type:  'ADD_HOBBY',    
    hobby: 'Running'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Mead'
});

store.dispatch({
    type:  'ADD_HOBBY',    
    hobby: 'Walking'
});

store.dispatch({
    type:  'REMOVE_HOBBY',    
    id: 1
});

store.dispatch({
    type:  'ADD_MOVIE',    
    title: 'Ghost',
    genre: 'Thriller'
});

store.dispatch({
    type:  'ADD_MOVIE',    
    title: 'X-Ray',
    genre: 'Sci-Fi'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Tila'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2
});

store.dispatch({
    type:  'ADD_MOVIE',    
    title: 'Strom',
    genre: 'Drama'
});

store.dispatch({
    type:  'ADD_HOBBY',    
    hobby: 'Biking'
});


