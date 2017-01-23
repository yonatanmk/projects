export const fetchMovies = (query) => {
  // let data = {
  //   query
  // };
  // data = JSON.stringify(data);
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

// fetch("http://www.abx.com?x=2&y=3")

// return fetch(`/notes/${id}`, {
//   method: "PUT",
//   headers: { 'Content-Type': 'application/json' },
//   body: content
// })

//
// let data = {
//   note:{
//     body
//   }
// };
// let content = JSON.stringify(data);
// return fetch(`/notes/${id}`, {
//   method: "PUT",
//   headers: { 'Content-Type': 'application/json' },
//   body: content
// })
