import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import NoteListHeader from '../components/NoteListHeader';

const mapStateToProps = (state) => {
  return {
    selectedFolderId: state.selectedFolderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddNoteClick: (selectedFolderId) => {
      if (selectedFolderId) {
        dispatch(addNote(selectedFolderId));
      }
    }
  };
};

const NoteListHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(NoteListHeader);

export default NoteListHeaderContainer;
