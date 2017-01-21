import React from 'react';
import Note from '../components/Note';
import { connect } from 'react-redux';

import { updateNote } from '../actions';

const mapStateToProps = (state) => {
  return {
    note: state.notes.find((note)=>{return note.id == state.selectedNoteId;}),
    selectedNoteId: state.selectedNoteId,
    selectedFolderId: state.selectedFolderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateClick: (selectedFolderId, selectedNoteId, text) => {
      if (selectedFolderId && selectedNoteId) {
        dispatch(updateNote(selectedFolderId, selectedNoteId, text));
      }
    }
  };
};

const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(Note);

export default NoteContainer;
