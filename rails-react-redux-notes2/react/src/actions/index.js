export {default as setFolderData} from './setFolderData';
export {default as setNoteData} from './setNoteData';
export {default as setSelectedFolder} from './setSelectedFolder';
export {default as addFolder} from './addFolder';
export {default as addNote} from './addNote';

export const setFoldersAction = (folders) => {
  return {
    type: 'SET FOLDERS',
    folders
  };
};

export const selectFolderAction = (id, notes) => ({
  type: 'SELECT FOLDER',
  id,
  notes
});

export const deselectFolderAction = (id) => ({
  type: 'DESELECT FOLDER',
  id
});

// export const addFolderAction = (name) => ({
//   type: 'ADD FOLDER',
//   name
// });
//
// export const deleteFolderAction = (id) => ({
//   type: 'DELETE FOLDER',
//   id
// });

export const setNotesAction = (notes) => {
  return {
    type: 'SET NOTES',
    notes
  };
};

export const selectNoteAction = (id) => ({
  type: 'SELECT NOTE',
  id
});

export const deselectNoteAction = (id) => ({
  type: 'DESELECT NOTE',
  id
});
