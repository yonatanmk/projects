import React from 'react';
import NoteList from '../components/NoteList';
import { connect } from 'react-redux';
import setNoteData from '../../fetch/setNoteData';

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    selectedFolderId: state.selectedFolderId,
    selectedNoteId: state.selectedNoteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNoteData: (selectedFolderId) => {setNoteData(dispatch, selectedFolderId);},
    handleNoteClick: (id) => {
      dispatch({
        type: 'TOGGLE SELECTED NOTE',
        id
      });
    }
  };
};

const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default NoteListContainer;
