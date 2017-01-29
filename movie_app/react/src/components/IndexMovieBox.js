import React from 'react';
import { Link } from 'react-router';
import * as api from '../api';
import { addUserMovie } from '../actions';

const IndexMovieBox = ({movie, movies, user, handleButtonClick}) => {
  let className = "small-6 medium-4 large-2 columns index-box";
  if (movie == movies[movies.length-1]) {
    className += " end";
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

  let onAddButtonClick = () => {
    handleButtonClick(user, movie, 'seen');
  };

  let onLikeButtonClick = () => {
    handleButtonClick(user, movie, 'like');
  };

  let onWantButtonClick = () => {
    handleButtonClick(user, movie, 'want');
  };

  return (
    <div key={movie.id} className={className}>
        <p>{movie.title}</p>
        <Link to={`/movies/${movie.id}`}><button>Show Movie</button></Link>
        <button onClick={onWantButtonClick}>Want to See</button>
        <button onClick={onAddButtonClick}>Already Seen</button>
        <button onClick={onLikeButtonClick}>Like This Movie</button>
        <div className='index-image'>
          <img src={image_url} />
        </div>
    </div>
  );
};

export default IndexMovieBox;
