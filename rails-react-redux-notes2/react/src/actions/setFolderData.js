import * as api from '../api';
import { setFolders } from './index';

let setFolderData = (dispatch) => {
  api.fetchFolders()
  .then(folders => {
    dispatch(setFolders(folders));
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default setFolderData;
