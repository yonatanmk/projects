import React from 'react';

const MovieList = ({movies}) => {
  if (movies.length === 0) {
    return <p>We Could Not Find Anything</p>;
  }
  movies = movies.map((movie) => {
    let className = "column column-block movie-box";
    let image;
    if (movie.poster_path) {
      image = <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />;
    } else {
      image = <img src={`http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`} />;
    }

    return(
      <div key={movie.id} className={className}>
        <p>{movie.title}</p>
        {image}
      </div>
    );
  });
  return (
    <div className='row small-up-1 medium-up-4 large-up-6'>
      {movies}
    </div>
  );
};

export default MovieList;
