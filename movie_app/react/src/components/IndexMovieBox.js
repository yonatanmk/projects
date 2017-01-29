import React from 'react';
import { Link } from 'react-router';
import * as api from '../api';
import { addUserMovie } from '../actions';

const IndexMovieBox = ({movie, movies, user, userMovies, handleButtonClick}) => {
  let className = "small-6 medium-4 large-2 columns index-box";
  if (movie == movies[movies.length-1]) {
    className += " end";
  }
  let userMovie = userMovies.find((userMovie)=>{return userMovie.id == movie.id;});
  if (userMovie) {
    movie.status = userMovie.status;
  }
  if (movie.status) {
    switch (movie.status) {
      case 'seen':
        className += " gray";
        break;
      case 'want':
        className += " blue";
        break;
      case 'like':
        className += " green";
        break;
      case 'dislike':
        className += " red";
        break;
      default:
        className += " gray";
        break;
    }
  }



  let image_url;
  if (movie.poster_path) {
    image_url = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  } else {
    image_url = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
  }

  let onButtonClick = (event) => {
    handleButtonClick(user, movie, event.target.value);
  };

  return (
    <div key={movie.id} className={className}>
      <p>{movie.title}</p>
      <Link to={`/movies/${movie.id}`}><button>Show Movie</button></Link>
      <button onClick={onButtonClick} value='want'>Want to See</button>
      <button onClick={onButtonClick} value='add'>Already Seen</button>
      <button onClick={onButtonClick} value='like'>Like This Movie</button>
      <button onClick={onButtonClick} value='dislike'>Dislike This Movie</button>
      <div className='index-image'>
        <img src={image_url} />
      </div>
    </div>
  );
};

export default IndexMovieBox;
