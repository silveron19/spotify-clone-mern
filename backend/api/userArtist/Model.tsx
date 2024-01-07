import mongoose from 'mongoose';

const userArtistSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artists',
      required: true,
    },
  },
  { collection: 'users_artists' }
);

module.exports = mongoose.model('users_artists', userArtistSchema);
