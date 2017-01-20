export const fetchNotes = (selectedFolderId) => {
  return fetch(`folders/${selectedFolderId}/notes.json`)
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

export const addNote = (folder_id) => {
  let data = {
    note:{
      folder_id,
      body: 'New Note'
    }
  };
  let body = JSON.stringify(data);
  return fetch(`/folders/${folder_id}/notes`, {
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
    });
};

// let data = {
//   note: {
//     body: "New Note!",
//     folder_id: this.state.selectedFolderId
//   }
// }
// let jsonStringData = JSON.stringify(data);
//
// fetch('/notes.json', {
//   method: 'post',
//   headers: { 'Content-Type': 'application/json' },
//   body: jsonStringData
// })
