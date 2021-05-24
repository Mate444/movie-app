import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
      
  }
  
  render() {
    
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="form-container" type="submit">BUSCAR</button>
        </form>
       { /*<ul>*/}
         {this.props.movies.map((movie, index) => {
         return <ul key={index}>
          <NavLink to={`/movie/${movie.imdbID}`}>
            {movie.Title}
          </NavLink>
             {/*console.log(this.props.movies)*/}
                <li>
                
                  <button className="form-container" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>♥</button>
                </li>
               
              </ul>
         })}
        {/* </ul>*/}
       
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  }
} 
function mapDispatchToProps(dispatch){
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Buscador)