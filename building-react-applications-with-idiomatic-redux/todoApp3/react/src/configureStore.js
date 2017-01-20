import throttle from 'lodash/throttle';
import { createStore, compose } from 'redux';
import {loadState, saveState} from './utilities/localStorage';
import todoApp from './reducers';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());  //syntax for color in console in chrome
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedState = loadState();
  let store = createStore(todoApp, persistedState, composeEnhancers());

  // if (process.env.NODE_ENV !== 'production') {
  store.dispatch = addLoggingToDispatch(store); //remove in production
  // }


  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};

export default configureStore;
