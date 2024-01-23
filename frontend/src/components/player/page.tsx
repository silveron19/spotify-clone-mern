import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import {
  faHeadset,
  faLayerGroup,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

function Player() {
  return (
    <div className="player">
      <div className="player-container">
        <div className="player-options">
          <FontAwesomeIcon className="step-icon" icon={faStepBackward} />
          <FontAwesomeIcon className="player-icon" icon={faPauseCircle} />
          <FontAwesomeIcon className="step-icon" icon={faStepForward} />
        </div>
        <div className="tracker">
          <p>--;-</p>
          <div className="tracker-bar"></div>
          <p>--;-</p>
        </div>
        <div className="player-other-options">
          <FontAwesomeIcon icon={faLayerGroup} />
          <FontAwesomeIcon icon={faHeadset} />
          <FontAwesomeIcon icon={faVolumeUp} />
          <div className="tracker-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
