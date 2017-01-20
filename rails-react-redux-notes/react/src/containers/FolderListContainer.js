import React from 'react';
import FolderList from '../components/FolderList';
import { connect } from 'react-redux';
import setFolderData from '../../fetch/setFolderData';
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
    handleFolderClick: (id, selectedFolderId) => {
      if (id == selectedFolderId) {
        dispatch({
          type: 'DESELECT FOLDER',
          id
        });
      }
      else {
        dispatch({
          type: 'SELECT FOLDER',
          id
        });
        setNoteData(dispatch, id);
      }
    }
  };
};

const FolderListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderList);

export default FolderListContainer;
