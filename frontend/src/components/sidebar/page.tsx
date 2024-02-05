'use client';

import { NextComponentType } from 'next';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faHome,
  faPlus,
  faRecordVinyl,
  faSearch,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Playlist from '../playlist/page';
import { playlistType } from '@/types/playlistTypes';

const Sidebar: NextComponentType = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <Link href="/home" className="sidebar-content">
          <FontAwesomeIcon className="home-icon" icon={faHome} />
          <p>Home</p>
        </Link>
        <Link href="/search" className="sidebar-content">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <p>Search</p>
        </Link>
        <div className="sidebar-other">
          <div className="options">
            <div className="library">
              <FontAwesomeIcon className="song-icon" icon={faRecordVinyl} />
              <p>Your Library</p>
            </div>
            <div className="more-options">
              <FontAwesomeIcon className="add-icon" icon={faPlus} />
              <FontAwesomeIcon
                className="arrow-right-icon"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="options">
            <FontAwesomeIcon className="search" icon={faSearch} />
            <div className="recents-menu">
              <p>Recents</p>
              <FontAwesomeIcon className="list-icon" icon={faList} />
            </div>
          </div>
          <div className="list-playlist">
            <Playlist type={playlistType.LIKED} />
            <Playlist type={playlistType.PLAYLIST} />
            <Playlist type={playlistType.FOLDER} />
            <Playlist type={playlistType.FOLDER} />
            <Playlist type={playlistType.FOLDER} />
            <Playlist type={playlistType.FOLDER} />
            <Playlist type={playlistType.FOLDER} />
            <Playlist type={playlistType.FOLDER} />
          </div>
        </div>
      </div>
    </div>
  );
};



Sidebar.getInitialProps = async () => {
  // Mengambil data atau melakukan operasi lain di sini
  return {};
};

export default Sidebar;
