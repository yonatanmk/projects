import React, { Component } from 'react';

const NoteList = (props) => {
  let notes = props.notes.map((note)=>{
    let thisClassName = "noteListElement";
    if (props.selectedNoteId == note.id) {
      thisClassName += " selected";
    }

    let handleNoteClick = () => {
      props.handleNoteClick(note.id, props.selectedNoteId);
    };

    let noteBody = note.body.substring(0, 20);
    if (note.body.length > 20) {
      noteBody += "...";
    }

    let year = note.updated_at.substring(0,2);
    let month = note.updated_at.substring(5,7);
    let day = note.updated_at.substring(8,10);

    return (
      <div className={thisClassName} onClick={handleNoteClick} key={note.id}>
        <h5>{noteBody}</h5>
        <p>{`Last updated on: ${month}/${day}/${year}`}</p>
      </div>
    );
  });
  if (props.selectedFolderId && notes.length == 0) {
    notes = [(
      <div className='noteListElement' key={0}>
        <h5>No Notes Present</h5>
      </div>
    )];
  }

  return (
    <div className='small-4 column'>
      {notes}
    </div>
  );
};

export default NoteList;
