import React from 'react';
import { Link } from 'react-router';
import MovieBox from './MovieBox';

const MovieList = ({movies, firstSearch, handleMovieClick}) => {

  movies = movies.map((movie) => {
    

    return (
      <MovieBox
        key={movie.id}
        movie={movie}
        movies={movies}
      />
    );
  });
  return (
    <div>
      {movies}
    </div>
  );
};

export default MovieList;
