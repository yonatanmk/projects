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
