import * as api from '../api';
import setNoteData from './setNoteData';
import { selectNoteAction } from './index';

let addNote = (selectedFolderId) => (dispatch) => {
  api.addNote(selectedFolderId)
  .then((noteId) => {
    dispatch(setNoteData(selectedFolderId));
    dispatch(selectNoteAction(noteId));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default addNote;
