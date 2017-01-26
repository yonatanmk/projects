import * as api from '../api';
import setNoteData from './setNoteData';

let deleteNote = (noteId, selectedFolderId) => (dispatch) => {
  api.deleteNote(noteId)
  .then((noteId) => {
    dispatch(setNoteData(selectedFolderId));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default deleteNote;
