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

const todos = (state=[], action) => {  // state refers to array of todos
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

export default todos;
