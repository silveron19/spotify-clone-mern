import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import './style.css';
import Image from 'next/image';

function Card() {
  return (
    <div className="card">
      <Image
        className="song-img"
        src="/nextjs.png"
        alt="card picture"
        width={140}
        height={140}
      />
      <p className="song-title">NextJs</p>
      <p className="song-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        eum, eaque commodi temporibus omnis odio, earum molestias officiis
        consequuntur, atque libero? Ducimus, ratione exercitationem! Sit
        perferendis sunt cupiditate exercitationem assumenda!
      </p>
    </div>
  );
}

export default Card;
