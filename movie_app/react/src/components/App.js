import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import SearchFormContainer from '../containers/SearchFormContainer';

const App = () => {
  return (
    <div>
      <SearchFormContainer />
      <MovieListContainer />
    </div>
  );
};

export default App;
