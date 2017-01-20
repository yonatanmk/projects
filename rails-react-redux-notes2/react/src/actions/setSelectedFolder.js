import * as api from '../api';
import { selectFolderAction } from './index';

let setSelectedFolder = (selectedFolderId) => (dispatch) => {
  api.fetchNotes(selectedFolderId)
  .then(notes => {
    dispatch(selectFolderAction(selectedFolderId, notes));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setSelectedFolder;

//a comment
