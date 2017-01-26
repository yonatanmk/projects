import React from 'react';

const Note = (props) => {
  let textarea, noteForm;
  if (props.note) {
    return (
      <div>
        <button onClick={() => {
          props.handleUpdateClick(props.selectedFolderId, props.selectedNoteId, textarea.value);
        }}>
          Update
        </button>
        <button onClick={() => {
          props.handleDeleteClick(props.selectedNoteId, props.selectedFolderId);
        }}>
          Delete
        </button>
        <textarea
          onChange={props.handleNoteChange}
          value={props.note.body}
          ref={node => {textarea = node;}}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Note;
