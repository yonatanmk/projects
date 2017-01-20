import React from 'react';

const AddNote = ({handleAddNoteClick, selectedFolderId}) => {
  return (
    <div>
      <button onClick={() => handleAddNoteClick(selectedFolderId)}>
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
