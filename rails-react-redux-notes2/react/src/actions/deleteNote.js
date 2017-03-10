import * as api from '../api';
import { setNoteData, deselectNoteAction } from '../actions';

let deleteNote = (noteId, selectedFolderId) => (dispatch) => {
  api.deleteNote(noteId)
  .then(() => {
    dispatch(deselectNoteAction());
    dispatch(setNoteData(selectedFolderId));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default deleteNote;
