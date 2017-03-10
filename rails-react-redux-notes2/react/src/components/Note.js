import React from 'react';

const Note = (props) => {
  debugger;
  let textarea;
  if (props.note) {
    return (
      <div>
        <button onClick={() => {
          props.handleUpdateClick(props.selectedFolderId, props.note.id, textarea.value);
        }}>
          Update
        </button>
        <button onClick={() => {
          props.handleDeleteClick(props.note.id, props.selectedFolderId);
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
