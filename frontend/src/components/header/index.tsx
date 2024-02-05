import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import './style.css';
import React from 'react';

function Header() {
  return (
    <div className="top-navbar">
      <div className="navigation-action">
        <FontAwesomeIcon className="left-angle-icon" icon={faAngleLeft} />
        <FontAwesomeIcon className="right-angle-icon" icon={faAngleRight} />
      </div>
      <div className="nav-other">
        <Link className="premium-btn" href="/premium">
          Explore Premium
        </Link>
        <Link className="download-btn" href="/download">
          Install App
        </Link>
        <Link href="/content-feed">
          <FontAwesomeIcon className="bell-icon" icon={faBell} />
        </Link>
        <div className="acc-logo">S</div>
      </div>
    </div>
  );
}

export default Header;
