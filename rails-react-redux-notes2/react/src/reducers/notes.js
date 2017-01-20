let notes = (state = [], action) => {
  switch (action.type) {
    case 'SET NOTES':
    case 'SELECT FOLDER':
      return action.notes;
    case 'DESELECT FOLDER':
      return [];
    default:
      return state;
  }
};

export default notes;
