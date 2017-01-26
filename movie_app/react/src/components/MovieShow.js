import React, { Component } from 'react';
import { setCurrentMovie, addMovie, setSelectedMovieAction } from '../actions';

class MovieShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let movie = this.props.movies.find((movie)=>{return movie.id == this.props.params.id;});
    this.props.dispatch(addMovie(movie));
    this.props.dispatch(setSelectedMovieAction(movie, this));
  }

  render() {
    if (this.props.selectedMovie){
      let movie = this.props.selectedMovie;
      return(
        <div>
          <h1>{movie.title}</h1>
          <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />;
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default MovieShow;
