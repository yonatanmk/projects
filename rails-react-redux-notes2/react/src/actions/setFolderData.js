import * as api from '../api';
import { setFoldersAction } from './index';

let setFolderData = (dispatch) => {
  api.fetchFolders()
  .then(folders => {
    dispatch(setFoldersAction(folders));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setFolderData;
