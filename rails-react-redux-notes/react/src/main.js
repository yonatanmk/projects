import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import setFolderData from '../fetch/setFolderData';

import App from './components/App';

let folders = (state = [], action ) => {
  switch (action.type) {
    case 'SET FOLDERS':
      return action.folders;
    default:
      return state;
  }
};

let notes = (state = [], action) => {
  switch (action.type) {
    case 'SET NOTES':
      return action.notes;
    case 'DESELECT FOLDER':
      return [];
    default:
      return state;
  }
};

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

let appReducer = combineReducers({folders, notes, selectedFolderId, selectedNoteId});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(appReducer, {}, composeEnhancers(applyMiddleware(thunk)));

setFolderData(store.dispatch);

$(function() {
  ReactDOM.render(
    <Provider store = {store} >
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
