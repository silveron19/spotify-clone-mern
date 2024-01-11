import { tryCatch } from '../../utils/tryCatch.js';
import songs from '../song/Model.js';
import users from '../user/Model.js';
import playlists from './Model.js';

const getPlaylists = tryCatch(async (req, res) => {
  const result = await playlists.find().populate([
    {
      path: 'song_id',
      model: songs,
    },
    {
      path: 'user_id',
      model: users,
    },
  ]);
  if (result.length !== 0) {
    const err = new Error('Playlist not found!');
    err.statusCode = 404;
    throw err;
  }

  return res.status(200).json({ success: true, data: result });
});

export default getPlaylists;
