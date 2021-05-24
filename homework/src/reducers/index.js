const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
};
function rootReducer(state = initialState, action){
    switch(action.type) {
        case("ADD_MOVIE_FAVORITE"): {
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            }
        }
        case("GET_MOVIES"): {
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        }
        case("REMOVE_MOVIE_FAVORITE"): {
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload.id)
            }
        }
        case("GET_MOVIE_DETAIL"): {
            console.log(state)
            return {
                ...state,
                movieDetail: action.payload
            }
        }
        default: {
            return state
        }
    }       
}
export default rootReducer