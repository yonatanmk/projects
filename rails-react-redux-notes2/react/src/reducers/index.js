import { combineReducers } from 'redux';
import folders from './folders';
import notes from './notes';
import selectedFolderId from './selectedFolderId';
import selectedNoteId from './selectedNoteId';
import noteContent from './noteContent';

const appReducer = combineReducers({folders, notes, selectedFolderId, selectedNoteId, noteContent});

export default appReducer;
