import * as api from '../api';
import setFolderData from './setFolderData';

let addFolder = (name) => (dispatch) => {
  api.addFolder(name)
  .then(() => {
    debugger;
    dispatch(setFolderData(dispatch));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default addFolder;
