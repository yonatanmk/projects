import React from 'react';
import FolderListContainer from '../containers/FolderListContainer';
import NoteListContainer from '../containers/NoteListContainer';
import NoteContainer from '../containers/NoteContainer.js';
import AddFolderContainer from '../containers/AddFolderContainer.js';

const App = () => {
  return (
    <div>
      <div className='folders-box small-4 column'>
        <FolderListContainer />
        <AddFolderContainer />
      </div>
      <div className='folders-box small-4 column'>
        <NoteListContainer />
      </div>
      <div className='folders-box small-4 column'>
        <NoteContainer />
      </div>
    </div>
  );
};

export default App;
