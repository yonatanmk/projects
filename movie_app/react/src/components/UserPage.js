import React from 'react';
import { Link } from 'react-router';
import MovieBox from './MovieBox';

const UserPage = ({user}) => {
  let userMovies;
  if (user) {
    userMovies = user.movies.map((movie) => {
      return (
        <MovieBox
          key={movie.id}
          movie={movie}
          movies={user.movies}
        />
      );
    });
  }
  return (
    <div>
      <h1>This is the User Page</h1>
      {userMovies}
    </div>
  );
};

export default UserPage;
