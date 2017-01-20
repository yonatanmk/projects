import React from 'react';
import Note from '../components/Note';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    selectedNoteId: state.selectedNoteId
  };
};

const NoteContainer = connect(mapStateToProps, null)(Note);

export default NoteContainer;
