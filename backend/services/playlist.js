import playlists from '../api/playlist/Model.js';
import songs from '../api/song/Model.js';
import users from '../api/user/Model.js';

async function getPlaylists() {
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

  return result;
}

async function deletePlaylists(_id) {
  const result = await playlists.deleteOne({ _id });

  return result;
}

export { getPlaylists, deletePlaylists };
