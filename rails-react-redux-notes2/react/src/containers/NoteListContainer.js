import React from 'react';
import NoteList from '../components/NoteList';
import { connect } from 'react-redux';
import { setNoteData, selectNoteAction, deselectNoteAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    selectedFolderId: state.selectedFolderId,
    selectedNoteId: state.selectedNoteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNoteClick: (id, selectedNoteId) => {
      if (id == selectedNoteId) { dispatch(deselectNoteAction()); }
      else { dispatch(selectNoteAction(id)); }
    }
  };
};

const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default NoteListContainer;
