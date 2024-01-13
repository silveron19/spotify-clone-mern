import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    song_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'songs', required: true }],
    user_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }],
  },
  { collection: 'playlists' }
);

const playlists = mongoose.model('playlists', playlistSchema);

export default playlists;
