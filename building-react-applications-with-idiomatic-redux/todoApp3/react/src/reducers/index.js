import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
  todos,
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

export default todoApp;

export const getVisibleTodos = (state, filter) => 
  fromTodos.getVisibleTodos(state.todos, filter);
