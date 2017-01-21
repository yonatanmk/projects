import React from 'react';

const NoteListHeader = ({handleAddNoteClick, selectedFolderId}) => {
  if (selectedFolderId) {
    return (
      <div>
        <button onClick={() => handleAddNoteClick(selectedFolderId)}>
          Add Note
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NoteListHeader;
