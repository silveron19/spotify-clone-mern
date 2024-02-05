import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

const LikedContent: React.FC = (): ReactElement => (
  <>
    <div className="liked-container">
      <FontAwesomeIcon className="folder" icon={faHeart} />
    </div>
    <div>
      <p className="playlist-title">Liked Songs</p>
      <p>
        Playlist <span className="dot"></span> 1 song
      </p>
    </div>
  </>
);

export default LikedContent;
