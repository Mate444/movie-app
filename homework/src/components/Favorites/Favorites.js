import React, { Component } from "react";
import { connect } from "react-redux";
 
 import { removeMovieFavorite } from "../../actions/index";
// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  
  render() {
    
    {console.log(this)}
    return (
      <div>
        <h2>Películas Favoritas</h2>
        
          {this.props.movies.map((movie, index) => {
            return <ul key={index}>
             
              <p>{movie.title}</p>
          
            <li>
              <button onClick={() => this.props.removeMovieFavorite({title: movie.title, id: movie.id})}> 
              X 
              </button>
            </li>
               </ul>
               
          })}
          
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
