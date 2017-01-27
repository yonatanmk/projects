import React, { Component } from 'react';
import { setCurrentMovie, addMovie, setSelectedMovie } from '../actions';

class MovieShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.movies.length > 0) {
      let movie = this.props.movies.find((movie)=>{return movie.id == this.props.params.id;});
      this.props.dispatch(addMovie(movie));
    }
    // use fetch to get movie getSelectedMovie()
    this.props.dispatch(setSelectedMovie(this.props.params.id));
  }

  render() {
    if (this.props.selectedMovie){
      let movie = this.props.selectedMovie;
      return(
        <div>
          <h1>{movie.title}</h1>
          <img src={`http://image.tmdb.org/t/p/w185/${movie.image_url}`} />
          <p>{movie.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default MovieShow;
