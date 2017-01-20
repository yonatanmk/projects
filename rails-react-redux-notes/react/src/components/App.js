import React from 'react';
import FolderListContainer from '../containers/FolderListContainer';
import NoteListContainer from '../containers/NoteListContainer';
import NoteContainer from '../containers/NoteContainer.js';

const App = () => {
  return (
    <div>
      <FolderListContainer />
      <NoteListContainer />
      <NoteContainer />
    </div>
  );
};

export default App;
