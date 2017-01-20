import React from 'react';

const AddFolder = ({handleAddFolderClick}) => {
  let input;
  return (
    <div>
      <input type='text' ref={node => {input = node;}} placeholder='New Folder'/>
      <button onClick={() => {
        handleAddFolderClick(input.value);
        input.value = '';
      }}>
        Add Folder
      </button>
    </div>
  );
};

export default AddFolder;

// <form id='folder-form' onSubmit={this.handleSubmit}>
//   <input type='text' onChange={this.handleChange} value={this.state.value} placeholder='New Folder'/>
// </form>
//
// let AddTodo = ({dispatch}) => {
//   let input;
//   return (
//     <div>
//       <input ref={node => {input = node;}} />
//       <button onClick={() => {
//         dispatch(addTodo(input.value));
//         input.value = '';
//       }}>
//         Add Todo
//       </button>
//     </div>
//   );
// };
