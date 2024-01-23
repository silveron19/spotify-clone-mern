import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <>
      <FontAwesomeIcon className="extend-icon" icon={faAngleLeft} />
      <FontAwesomeIcon className="extend-icon" icon={faAngleRight} />
    </>
  );
}

export default Header;
