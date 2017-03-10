import { combineReducers } from 'redux';
import folders from './folders';
import notes from './notes';
import selectedFolderId from './selectedFolderId';
import selectedNote from './selectedNote';
import noteContent from './noteContent';

const appReducer = combineReducers({folders, notes, selectedFolderId, selectedNote, noteContent});

export default appReducer;
