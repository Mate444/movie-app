const GET_MOVIES = "GET_MOVIES";
const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export function addMovieFavorite(payload){
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    }
}
export function getMovies(title){
    
    return (dispatch) => {
          return  fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
        .then(response => response.json())
        .then(json => {
            dispatch({type: GET_MOVIES, payload: json})
        })
    }
}
export function getMovieDetail(id){
    return (dispatch) => {
        fetch(`https://www.omdbapi.com/?apikey=20dac387&i=` +id)
        .then((response) => response.json)
        .then((json) => {
        dispatch({type: GET_MOVIE_DETAIL, payload: json})})
    }
}
export function removeMovieFavorite(payload){
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload
    }
}
