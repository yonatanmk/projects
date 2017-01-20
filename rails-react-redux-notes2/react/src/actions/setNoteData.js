import * as api from '../api';

import { setNotes } from './index';

let setNoteData = (selectedFolderId) => (dispatch) => {
  api.fetchNotes(selectedFolderId)
  .then(notes => {
    dispatch(setNotes(notes));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setNoteData;
