import React from 'react';
import NoteList from '../components/NoteList';
import { connect } from 'react-redux';
import { setNoteData, selectNoteAction, deselectNoteAction } from '../actions';

const mapStateToProps = (state) => {

  return {
    notes: state.notes,
    selectedFolderId: state.selectedFolderId,
    selectedNote: state.selectedNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNoteClick: (note, selectedNote) => {
      if (selectedNote && note.id == selectedNote.id) { dispatch(deselectNoteAction()); }
      else { dispatch(selectNoteAction(note)); }
    }
  };
};

const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default NoteListContainer;
