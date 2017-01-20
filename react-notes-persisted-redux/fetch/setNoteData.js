let setNoteData = (dispatch, selectedFolderId) => {
  fetch(`http://localhost:4567/folders/${selectedFolderId}/notes.json`)
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
    .then(response => response.json())
    .then(body => {
      let notes = body.notes;
      dispatch({
        type: 'SET NOTES',
        notes
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setNoteData;
