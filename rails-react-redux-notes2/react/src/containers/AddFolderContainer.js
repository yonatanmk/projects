import React from 'react';
import { connect } from 'react-redux';
import { addFolder } from '../actions';
import AddFolder from '../components/AddFolder';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddFolderClick: (name) => {
      dispatch(addFolder(name));
    }
  };
};

const AddFolderContainer = connect(null, mapDispatchToProps)(AddFolder);

export default AddFolderContainer;
