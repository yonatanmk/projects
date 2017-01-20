import React from 'react';

// make this a presentational component.  It doesn't specify behavior, and
// simply takes props.
const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}>
    {text}
  </li>
);

export default Todo;
