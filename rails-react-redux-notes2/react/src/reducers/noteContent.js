let noteContent = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE NOTE CONTENT':
      return action.body;
    default:
      return state;
  }
};

export default noteContent;
