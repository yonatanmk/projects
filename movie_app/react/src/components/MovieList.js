import React from 'react';

const MovieList = ({movies}) => {
  movies = movies.map((movie) => {
    return(
      <div>
        <p>{movie.title}</p>
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
