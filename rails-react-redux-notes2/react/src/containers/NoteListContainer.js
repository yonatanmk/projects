import React from 'react';
import NoteList from '../components/NoteList';
import { connect } from 'react-redux';
import { setNoteData, selectNote, deselectNote } from '../actions';

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    selectedFolderId: state.selectedFolderId,
    selectedNoteId: state.selectedNoteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNoteData: (selectedFolderId) => dispatch(setNoteData(selectedFolderId)),
    handleNoteClick: (id, selectedNoteId) => {
      if (id == selectedNoteId) { dispatch(deselectNote(id)); }
      else { dispatch(selectNote(id)); }
    }
  };
};

const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default NoteListContainer;
