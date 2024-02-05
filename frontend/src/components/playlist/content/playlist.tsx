import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

const PlaylistContent: React.FC = (): ReactElement => (
  <>
    <div className="folder-container">
      <FontAwesomeIcon className="folder" icon={faMusic} />
    </div>
    <div>
      <p className="playlist-title">My Playlist #1</p>
      <p>0 songs</p>
    </div>
  </>
);

export default PlaylistContent;
