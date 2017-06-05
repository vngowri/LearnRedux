var redux = require('redux');

console.log('Starting redux example');

//var stateDefault = {
//    name: 'annonymous',
//      hobbies: [],
//      movies: []
//    
//};
//var oldReducer = (state = stateDefault, action)=> {    
//    switch (action.type) {
//        case 'CHANGE_NAME':
//            return {
//                ...state,
//                name: action.name
//            };
//        case 'ADD_HOBBY':
//            return {
//                ...state,
//                hobbies: [
//                ...state.hobbies, 
//                {
//                    id: nextHobbyId++, 
//                    hobby: action.hobby
//                }
//            ]
//            };
//    
//        case 'REMOVE_HOBBY':
//            return {
//                ...state,
//                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)           
//            };    
//    
//        case 'ADD_MOVIE':
//            return {
//                ...state,
//                movies: [
//                ...state.movies, 
//                {
//                    id: nextMovieId++, 
//                    title: action.title,
//                    genre: action.genre
//                }
//            ]
//            };
//
//        case 'REMOVE_MOVIE':
//            return {
//                ...state,
//                movies: state.movies.filter((movie) => movie.id !== action.id)
//            };
//        default:
//            return state;
//    };    
//};


//name reducer and action generator
//------------------
var nameReducer = (state = 'Annonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name                    
        default:
            return state;
    };
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    };
};

//hobby reducer and action generator
//----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++, 
                    hobby: action.hobby
                }
                
            ]; 
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)                      
        default:
            return state;
    };
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby        
    };
}

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
}

//movie reducer and action generator
//----------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++, 
                    title: action.title,
                    genre: action.genre
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state;
    };
    
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
      title,
      genre      
  };
    
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
      id      
  };
    
};

var reducer = redux.combineReducers({
   name: nameReducer,
   hobbies: hobbiesReducer,
    movies: moviesReducer
    
});

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

store.dispatch(changeName('Gowri'));

store.dispatch({
    type:  'ADD_HOBBY',    
    hobby: 'Running'
});

store.dispatch(changeName('Mead'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(1));

store.dispatch(addMovie('Ghost','Thriller'));

store.dispatch(addMovie('X-Ray','Sci-Fi'));

store.dispatch(changeName('Tila'));

store.dispatch(removeMovie(2));

store.dispatch(addMovie('Strom','Drama'));

store.dispatch(addHobby('Biking'));


