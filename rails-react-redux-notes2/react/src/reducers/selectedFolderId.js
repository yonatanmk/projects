let selectedFolderId = (state = null, action) => {
  switch (action.type) {
      case 'SELECT FOLDER':
        return action.id;
      case 'DESELECT FOLDER':
        return null;
    default:
      return state;
  }
};

export default selectedFolderId;
