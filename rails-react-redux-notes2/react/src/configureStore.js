import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { setFolderData } from './actions';
import appReducer from './reducers';

import App from './components/App';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(appReducer, {}, composeEnhancers(applyMiddleware(thunk)));
  setFolderData(store.dispatch);

  return store;
};

export default configureStore;
