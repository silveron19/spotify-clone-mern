import React, { ReactElement } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import './style.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface PlaylistProps {
  type?: string;
}

const Playlist: React.FC<PlaylistProps> = ({ type }): ReactElement => {
  return (
    <div className="playlist">
      <div className="playlist-detail">
        {type === 'liked' ? (
          <div className="liked-container">
            <FontAwesomeIcon className="folder" icon={faHeart}/>
          </div>
        ) : (
          <div className="folder-container">
            <FontAwesomeIcon className="folder" icon={faFolder} />
          </div>
        )}

        <div>
          <p className="playlist-title">New Folder</p>
          <p>0 playlists</p>
        </div>
      </div>
      <FontAwesomeIcon className="extend-icon" icon={faAngleRight} />
    </div>
  );
};

export default Playlist;
