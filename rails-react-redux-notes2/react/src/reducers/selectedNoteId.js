let selectedNoteId = (state = null, action) => {
    switch (action.type) {
      case 'SELECT NOTE':
        return action.id;
      case 'DESELECT NOTE':
        return null;
      case 'DESELECT FOLDER':
        return null;
      default:
        return state;
    }
};

export default selectedNoteId;
