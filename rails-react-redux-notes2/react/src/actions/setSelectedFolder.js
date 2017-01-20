import * as api from '../api';
import { setNotes, selectFolder } from './index';

let setSelectedFolder = (selectedFolderId) => (dispatch) => {
  api.fetchNotes(selectedFolderId)
  .then(notes => {
    dispatch(selectFolder(selectedFolderId, notes));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setSelectedFolder;

//a comment
