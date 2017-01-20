let folders = (state = [], action ) => {
  switch (action.type) {
    case 'SET FOLDERS':
      return action.folders;
    default:
      return state;
  }
};

export default folders;
