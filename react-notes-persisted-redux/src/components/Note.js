import React from 'react';

const Note = (props) => {
  let text = '';
  let note = props.notes.find((note)=>{return note.id == props.selectedNoteId;});
  if (note) {
    text = note.body;
  }
  return (
    <div className='small-4 column'>
      <p>{text}</p>
    </div>
  );
};

export default Note;
