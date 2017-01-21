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
  return fetch(`/notes`, {
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

export const updateNote = (id, body) => {
  let data = {
    note:{
      body
    }
  };
  let content = JSON.stringify(data);
  return fetch(`/notes/${id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: content
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
