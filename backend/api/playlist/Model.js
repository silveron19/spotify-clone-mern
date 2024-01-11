import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    song_id: [{ type: String, ref: 'songs', required: true }],
    user_id: [{ type: String, ref: 'users', required: true }],
  },
  { collection: 'playlists' }
);

const playlists = mongoose.model('playlists', playlistSchema);

export default playlists;
