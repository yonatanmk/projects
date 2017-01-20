let setNoteData = (dispatch, selectedFolderId) => {
  fetch(`folders/${selectedFolderId}/notes.json`)
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
    .then(notes => {
      dispatch({
        type: 'SET NOTES',
        notes
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setNoteData;
