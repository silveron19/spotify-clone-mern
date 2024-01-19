'use client';

import { NextComponentType } from 'next';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faHome,
  faList,
  faPlus,
  faRecordVinyl,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import Playlist from '../playlist/page';

const Sidebar: NextComponentType = () => {
  const [navWidth, setNavWidth] = useState<number>(20);

  return (
    <nav className="sidebar">
      <div className="sidebar-container" style={{ minWidth: `${navWidth}rem` }}>
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
            <div className="more-option">
              <FontAwesomeIcon className="add-playlist" icon={faPlus} />
              <FontAwesomeIcon className="show-more" icon={faArrowRight} />
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
            <Playlist type="liked" />
            <Playlist type="folder" />
            <Playlist type="folder" />
            <Playlist type="folder" />
            <Playlist type="folder" />
          </div>
        </div>
      </div>
      <div className="sidebar-resize"></div>
    </nav>
  );
};

Sidebar.getInitialProps = async () => {
  // Mengambil data atau melakukan operasi lain di sini
  return {};
};

export default Sidebar;
