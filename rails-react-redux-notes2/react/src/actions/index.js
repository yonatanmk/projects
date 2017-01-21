export {default as setFolderData} from './setFolderData';
export {default as setNoteData} from './setNoteData';
export {default as setSelectedFolder} from './setSelectedFolder';
export {default as addFolder} from './addFolder';
export {default as addNote} from './addNote';
export {default as updateNote} from './updateNote';

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

export const deselectFolderAction = () => ({
  type: 'DESELECT FOLDER',
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

export const deselectNoteAction = () => ({
  type: 'DESELECT NOTE'
});
