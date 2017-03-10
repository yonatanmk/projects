import React from 'react';
import Note from '../components/Note';
import { connect } from 'react-redux';

import { updateNote, updateNoteState, deleteNote } from '../actions';

const mapStateToProps = (state) => {
  return {
    note: state.selectedNote,
    selectedFolderId: state.selectedFolderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateClick: (selectedFolderId, selectedNoteId, text) => {
      if (selectedFolderId && selectedNoteId) {
        dispatch(updateNote(selectedFolderId, selectedNoteId, text));
      }
    },
    handleNoteChange: (event) => {
      dispatch(updateNoteState(event.target.value));
    },
    handleDeleteClick: (noteId, selectedFolderId) => {
      dispatch(deleteNote(noteId, selectedFolderId));
    }
  };
};

const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(Note);

export default NoteContainer;
