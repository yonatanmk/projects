import React from 'react';

const NoteListHeader = ({handleAddNoteClick, selectedFolderId}) => {
  return (
    <div>
      <button onClick={() => handleAddNoteClick(selectedFolderId)}>
        Add Note
      </button>
    </div>
  );
};

export default NoteListHeader;
