import * as api from '../api';

import { setNotesAction } from './index';

let setNoteData = (selectedFolderId) => (dispatch) => {
  api.fetchNotes(selectedFolderId)
  .then(notes => {
    dispatch(setNotesAction(notes));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setNoteData;
