export {default as setFolderData} from './setFolderData';
export {default as setNoteData} from './setNoteData';
export {default as setSelectedFolder} from './setSelectedFolder';

export const setFolders = (folders) => {
  return {
    type: 'SET FOLDERS',
    folders
  };
};

export const selectFolder = (id, notes) => ({
  type: 'SELECT FOLDER',
  id,
  notes
});

export const deselectFolder = (id) => ({
  type: 'DESELECT FOLDER',
  id
});

export const setNotes = (notes) => {
  return {
    type: 'SET NOTES',
    notes
  };
};

export const selectNote = (id) => ({
  type: 'SELECT NOTE',
  id
});

export const deselectNote = (id) => ({
  type: 'DESELECT NOTE',
  id
});
