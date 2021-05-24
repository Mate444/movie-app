import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

  // constructor > render > componentDidMount
  // ante un update > reder > componentDidUpdate
  // si no lo renderizo mas > componentWillUnmount 

  componentDidMount(){
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }
  
    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <h1>{this.props.movie.Title}</h1>
                <h4>{this.props.movie.Year}</h4>
                <p>{this.props.movie.Plot}</p>
                {console.log(this.props.movie)}
                {console.log(this.props)}
            </div>
      
        );
    }
}

function mapStateToProps(state){
  return {
    movie: state.movieDetail
  }
}

function mapDispatchToProps(dispatch){
  return{
    getMovieDetail: id => dispatch(getMovieDetail(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);
