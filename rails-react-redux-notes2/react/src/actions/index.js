export {default as setFolderData} from './setFolderData';
export {default as setNoteData} from './setNoteData';
export {default as setSelectedFolder} from './setSelectedFolder';
export {default as addFolder} from './addFolder';
export {default as addNote} from './addNote';
export {default as updateNote} from './updateNote';
export {default as deleteNote} from './deleteNote';

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

export const setNotesAction = (notes) => {
  return {
    type: 'SET NOTES',
    notes
  };
};

export const selectNoteAction = (note) => ({
  type: 'SELECT NOTE',
  note
});

export const deselectNoteAction = () => ({
  type: 'DESELECT NOTE'
});

export const updateNoteBody = (body) => ({
  type: 'CHANGE NOTE CONTENT',
  body
});
