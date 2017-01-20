import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import AddNote from '../components/AddNote';

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

const AddNoteContainer = connect(mapStateToProps, mapDispatchToProps)(AddNote);

export default AddNoteContainer;
