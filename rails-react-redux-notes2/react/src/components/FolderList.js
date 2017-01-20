import React from 'react';

const FolderList = (props) => {
  let folders = props.folders.map((folder)=>{
    let thisClassName = "folderListElement";
    if (props.selectedFolderId == folder.id) {
      thisClassName += " selected";
    }

    let handleClick = () => {
      props.handleFolderClick(folder.id, props.selectedFolderId);
    };

    return (
      <div className={thisClassName} onClick={handleClick} key={folder.id}><h5>{folder.name}</h5></div>
    );
  });

  return (
    <div>
      {folders}
    </div>
  );
};

export default FolderList;
