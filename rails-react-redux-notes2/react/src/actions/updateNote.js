import * as api from '../api';
import setNoteData from './setNoteData';

let updateNote = (selectedFolderId, selectedNoteId, text) => (dispatch) => {
  api.updateNote(selectedNoteId, text)
  .then(() => {
    dispatch(setNoteData(selectedFolderId));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default updateNote;
