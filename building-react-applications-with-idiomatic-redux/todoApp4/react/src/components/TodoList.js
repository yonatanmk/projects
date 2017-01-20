import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick,}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

//{...todo} takes each key-value pair of the todo object
//and maps it as a prop of the todo component

export default TodoList;
