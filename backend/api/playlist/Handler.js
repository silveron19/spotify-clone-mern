import getPlaylists from '../../services/playlist.js';
import tryCatch from '../../utils/tryCatch.js';

const getPlaylistsHandler = tryCatch(async (req, res) => {
  const result = await getPlaylists();
  if (result.length === 0) {
    const err = new Error('Playlist not found!');
    err.statusCode = 404;
    throw err;
  }

  return res.status(200).json({ success: true, data: result });
});

export default getPlaylistsHandler;
