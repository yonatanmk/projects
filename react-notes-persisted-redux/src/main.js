import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import setFolderData from '../fetch/getFolderData';

import App from './components/App';



let appReducer = (state = {
  notes: [],
  folders: [],
  selectedFolderId: null,
  selectedNoteId: null
  }, action) => {
    switch (action.type) {
      case 'SET FOLDERS':
        return Object.assign({}, state, {folders: action.folders});
      case 'TOGGLE SELECTED FOLDER':
        if (action.id === state.selectedFolderId) {
          return Object.assign({}, state, {selectedFolderId: null, selectedNoteId: null, notes: []});
        }
        else {
          return Object.assign({}, state, {selectedFolderId: action.id});
        }
      case 'SET NOTES':
        if (state.selectedFolderId) {
          return Object.assign({}, state, {notes: action.notes});
        }
        else return state;
      case 'TOGGLE SELECTED NOTE':
        if (action.id === state.selectedNoteId) {
          return Object.assign({}, state, {selectedNoteId: null});
        }
        else {
          return Object.assign({}, state, {selectedNoteId: action.id});
        }
      default:
        return state;
    }
};

let store = createStore(appReducer);

setFolderData(store.dispatch);

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('app')
);
