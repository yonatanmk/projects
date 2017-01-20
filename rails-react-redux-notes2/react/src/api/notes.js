let fetchNotes = (selectedFolderId) => {
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

export default fetchNotes;
