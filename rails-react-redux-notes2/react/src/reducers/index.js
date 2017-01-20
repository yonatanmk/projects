import { combineReducers } from 'redux';
import folders from './folders';
import notes from './notes';
import selectedFolderId from './selectedFolderId';
import selectedNoteId from './selectedNoteId';

const appReducer = combineReducers({folders, notes, selectedFolderId, selectedNoteId});

export default appReducer;
