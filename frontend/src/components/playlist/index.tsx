import React, { ReactElement } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import PlaylistContent from './content/playlist';
import FolderContent from './content/folder';
import LikedContent from './content/liked';
import { playlistType } from '@/types/playlistTypes';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface PlaylistProps {
  type?: playlistType;
}

const Playlist: React.FC<PlaylistProps> = ({ type }): ReactElement => {
  let content;
  if (type === playlistType.LIKED) {
    content = <LikedContent />;
  } else if (type === playlistType.FOLDER) {
    content = <FolderContent />;
  } else if (type === playlistType.PLAYLIST) {
    content = <PlaylistContent />;
  } else {
    throw new Error(`Invalid type prop: ${type}`);
  }

  return (
    <div className="playlist">
      <div className="playlist-detail">{content}</div>
      <FontAwesomeIcon className="caret-right" icon={faCaretRight} />
    </div>
  );
};

export default Playlist;
