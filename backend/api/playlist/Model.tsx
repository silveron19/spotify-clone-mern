import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    user: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    ],
  },
  { collection: 'playlists' }
);

module.exports = mongoose.model('playlists', playlistSchema);
