let selectedNote = (state = null, action) => {
    switch (action.type) {
      case 'SELECT NOTE':
        return action.note;
      case 'DESELECT NOTE':
        return null;
      case 'DESELECT FOLDER':
        return null;
      case 'CHANGE NOTE CONTENT':
        return {...state, body: action.body};
      default:
        return state;
    }
};

export default selectedNote;
