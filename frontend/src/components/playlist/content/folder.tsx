import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

const FolderContent: React.FC = (): ReactElement => (
  <>
    <div className="folder-container">
      <FontAwesomeIcon className="folder" icon={faFolder} />
    </div>
    <div>
      <p className="playlist-title">New Folder</p>
      <p>0 playlists</p>
    </div>
  </>
);

export default FolderContent;
