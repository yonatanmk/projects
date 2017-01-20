import { v4 } from 'uuid';

const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

// ^^ same as
// const addTodo = (text) => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text,
//   };
// };

export default addTodo;
