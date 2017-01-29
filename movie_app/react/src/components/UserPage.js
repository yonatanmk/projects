import React from 'react';
import { Link } from 'react-router';
import IndexMovieBox from './IndexMovieBox';

const UserPage = ({user}) => {
  let userMovies;
  if (user) {
    userMovies = user.movies.map((movie) => {
      return (
        <IndexMovieBox
          key={movie.id}
          movie={movie}
          movies={user.movies}
        />
      );
    });
  }
  return (
    <div>
      <h1>Your Movies</h1>
      {userMovies}
    </div>
  );
};

export default UserPage;
