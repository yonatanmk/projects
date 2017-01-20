import * as api from '../api';
import setNoteData from './setNoteData';

let addNote = (selectedFolderId) => (dispatch) => {
  api.addNote(selectedFolderId)
  .then(() => {
    dispatch(setNoteData(selectedFolderId));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default addNote;
