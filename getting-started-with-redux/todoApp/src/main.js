import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';

/**
 * Manual implementation of Provider
 */
// class Provider extends Component {
//   // react special method to set context on this props to all children
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }
//   render() {
//     return this.props.children;
//   }
// }
// Provider.childContextTypes = {
//   store: PropTypes.object,
// };
//

const todo = (state={}, action) => {  // state refers to individual todo
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed});
    default:
      return state;
  }
};



export const todos = (state=[], action) => {  // state refers to array of todos
  switch(action.type) {
    case 'ADD_TODO': // ES6 array array concat
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO': // array.map returns a new array
      return state.map(t => todo(t, action));
    case 'REMOVE_TODO':
      return [];
    default:
      return state;
  }
};

const visibilityFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

/**
 * Manual implementation of todoApp + combineReducer
 */
// const todoApp = (state={}, action) => {
//   // first return value will be {todos: undefined, visibilityFilter: undefined}
//   return {
//     todos: todos(
//       state.todos,
//       action,
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action,
//     )
//   };
// };

/**
 * Manual implementation of combineReducer
 */
// const combineReducers = (reducers) => {
//   return (state={}, action) => {
//     return Object.keys(reducers).reduce(  // use reduce function
//       (nextState, key) => {
//         nextState[key] = reducers[key](
//           state[key],
//           action,
//         );
//         return nextState;
//       },
//       {},  // start with empty object
//     );
//   };
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(todoApp, {}, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todo')
);
