export const fetchMovies = (query) => {
  return fetch(`/api/v1/movies?query=${query}`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json());
};

export const fetchMovie = (id) => {
  return fetch(`/api/v1/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json());
};

export const addMovie = (movie) => {
  let data = {
    movie:{
      id: movie.id,
      title: movie.title,
      image_url: movie.poster_path,
      release_date: movie.release_date,
      description: movie.overview,
      adult: movie.adult
    }
  };
  let body = JSON.stringify(data);
  return fetch(`/api/v1/movies`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json());
};
