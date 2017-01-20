configure import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';

// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
// ^^ similar to thunk source code

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [thunk];

  // if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger()); //remove in production
  // }

  return createStore(
    todoApp,
    //persisted state here if it exists
    composeEnhancers(applyMiddleware(...middlewares))
  );

};
