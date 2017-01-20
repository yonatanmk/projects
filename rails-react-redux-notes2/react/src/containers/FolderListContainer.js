import React from 'react';
import FolderList from '../components/FolderList';
import { connect } from 'react-redux';
import { setFolderData, setNoteData, setSelectedFolder, deselectFolderAction} from '../actions';

const mapStateToProps = (state) => {
  return {
    folders: state.folders,
    selectedFolderId: state.selectedFolderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFolderClick: (id, selectedFolderId) => {
      if (id == selectedFolderId) {
        dispatch(deselectFolderAction(id));
      }
      else {
        dispatch(setSelectedFolder(id));
      }
    }
  };
};

const FolderListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderList);

export default FolderListContainer;
