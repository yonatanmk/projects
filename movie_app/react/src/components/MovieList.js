import React from 'react';
import { Link } from 'react-router';

const MovieList = ({movies, firstSearch, handleMovieClick}) => {
  // if (movies.length === 0 && !firstSearch) {
  //
  //   return setTimeout(()=>{return <p>We Could Not Find Anything</p>; }, 500);
  // }
  movies = movies.map((movie) => {
    let className = "small-6 medium-4 large-2 columns movie-box";
    let image;
    if (movie.poster_path) {
      image = <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />;
    } else {
      image = <img src={`http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`} />;
    }

    if (movie == movies[movies.length-1]) {
      className += " end";
    }

    return(
      <div key={movie.id} className={className}>
        <Link to={`/movie/${movie.id}`}>
          <p>{movie.title}</p>
          {image}
        </Link>
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
