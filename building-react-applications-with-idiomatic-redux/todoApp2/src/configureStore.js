import throttle from 'lodash/throttle';
import { createStore, compose } from 'redux';
import {loadState, saveState} from './utilities/localStorage';
import todoApp from './reducers';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedState = loadState();
  let store = createStore(todoApp, persistedState, composeEnhancers());

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};

export default configureStore;
