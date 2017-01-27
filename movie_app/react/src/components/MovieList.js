import React from 'react';
import { Link } from 'react-router';

const MovieList = ({movies, firstSearch, handleMovieClick}) => {
  // if (movies.length === 0 && !firstSearch) {
  //
  //   return setTimeout(()=>{return <p>We Could Not Find Anything</p>; }, 500);
  // }
  movies = movies.map((movie) => {
    let className = "small-6 medium-4 large-2 columns index-box";
    let image_url;
    if (movie.poster_path) {
      image_url = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
    } else {
      image_url = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
    }

    if (movie == movies[movies.length-1]) {
      className += " end";
    }

    //195 px

    return(
      <div key={movie.id} className={className}>
          <p>{movie.title}</p>
          <Link to={`/movies/${movie.id}`}><button>Show Movie</button></Link>
          <button>Want to See</button>
          <button>Already Seen</button>
          <button>Like This Movie</button>
          <div className='index-image'>
            <img src={image_url} />
          </div>
      </div>
    );
  });
  return (
    <div>
      {movies}
    </div>
  );
};

export default MovieList;
