import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import {
  faHeadset,
  faLayerGroup,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import Tracker from '../tracker/page';

function Player() {
  return (
    <div className="player-container">
      <div className="player-center">
        <div className="player-options">
          <FontAwesomeIcon className="step-icon" icon={faStepBackward} />
          <FontAwesomeIcon className="player-icon" icon={faPauseCircle} />
          <FontAwesomeIcon className="step-icon" icon={faStepForward} />
        </div>
        <Tracker type="time" />
      </div>
      <div className="player-right">
        <FontAwesomeIcon icon={faLayerGroup} />
        <FontAwesomeIcon icon={faHeadset} />
        <FontAwesomeIcon icon={faVolumeHigh} />
        <Tracker type="volume" />
      </div>
    </div>
  );
}

export default Player;
