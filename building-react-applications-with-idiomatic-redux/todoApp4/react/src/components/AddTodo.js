import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actionCreators';

let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input ref={node => {input = node;}} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo = connect()(AddTodo);
// the above statement is similar to
// AddTodo = connect(
//   state => {
//     return {};
//   },
//   dispatch => {
//     return {dispatch};
//   }
// )(AddTodo);

export default AddTodo;
