let setFolderData = (dispatch) => {
  fetch('/folders.json')
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
    .then(folders => {
      dispatch({
        type: 'SET FOLDERS',
        folders
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setFolderData;
