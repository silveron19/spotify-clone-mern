const mongoose = require('mongoose');

const playlistSongSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    playlist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'playlists',
      required: true,
    },
    song_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'songs',
      required: true,
    },
    position: { type: Number, required: true },
  },
  { collection: 'playlists_songs' }
);

module.exports = mongoose.model('playlists_songs', playlistSongSchema);
