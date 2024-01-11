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
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: NextComponentType = () => {
  const [navWidth, setNavWidth] = useState<number>(10);

  return (
    <nav className="navbar">
      <div className='navbar-container' style={{ minWidth: `${navWidth}rem` }}>
        <Link href="/" className="navbar-content">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </Link>
        <Link href="/search" className="navbar-content">
          <FontAwesomeIcon icon={faSearch} />
          <p>Search</p>
        </Link>
        <div className="navbar-content">
          <div className="library">
            <FontAwesomeIcon icon={faRecordVinyl} />
            <p>Your Library</p>
          </div>
          <div>
            <FontAwesomeIcon className="add-playlist" icon={faPlus} />
            <FontAwesomeIcon className="show-more" icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="navbar-resize"></div>
    </nav>
  );
};

Navbar.getInitialProps = async () => {
  // Mengambil data atau melakukan operasi lain di sini
  return {};
};

export default Navbar;
