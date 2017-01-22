import { combineReducers } from 'redux';

let selectedFolderId = (state = null, action) => {
  switch (action.type) {
      case 'SELECT FOLDER':
        return action.id;
      case 'DESELECT FOLDER':
        return null;
    default:
      return state;
  }
};

let selectedNoteId = (state = null, action) => {
    switch (action.type) {
      case 'SELECT NOTE':
        return action.id;
      case 'DESELECT NOTE':
        return null;
      case 'DESELECT FOLDER':
        return null;
      default:
        return state;
    }
};

const appReducer = combineReducers({selectedFolderId, selectedNoteId});

export default appReducer;
