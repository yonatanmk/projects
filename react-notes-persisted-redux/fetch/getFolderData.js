let setFolderData = (dispatch) => {
  fetch('http://localhost:4567/folders.json')
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
      let folders = body.folders;
      dispatch({
        type: 'SET FOLDERS',
        folders
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setFolderData;
