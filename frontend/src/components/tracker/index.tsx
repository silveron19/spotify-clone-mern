import React, { ReactElement } from 'react';
import './style.css';

interface TrackerProps {
  type: 'volume' | 'time';
}

const Tracker: React.FC<TrackerProps> = ({ type }): ReactElement => {
  return (
    <>
      {type === 'volume' ? (
        <div className="tracker">
          <div className="tracker-bar" style={{ minWidth: '6rem' }}></div>
          <div className="ball"></div>
        </div>
      ) : (
        <div className="tracker">
          <span className="current-time">--;-</span>
          <div className="tracker-bar" style={{minWidth: '20rem'}}></div>
          <span className="duration">--;-</span>
        </div>
      )}
    </>
  );
};

export default Tracker;
