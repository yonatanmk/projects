import React from 'react';
import FolderList from '../components/FolderList';
import { connect } from 'react-redux';
import setFolderData from '../../fetch/getFolderData';
import setNoteData from '../../fetch/setNoteData';

const mapStateToProps = (state) => {
  return {
    folders: state.folders,
    selectedFolderId: state.selectedFolderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderData: () => {setFolderData(dispatch);},
    handleFolderClick: (id) => {
      dispatch({
        type: 'TOGGLE SELECTED FOLDER',
        id
      });
      setNoteData(dispatch, id);
    }
  };
};

const FolderListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderList);

export default FolderListContainer;
