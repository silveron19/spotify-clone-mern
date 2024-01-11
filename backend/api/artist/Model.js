import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    pict: { type: String, required: true },
    song_id: [
      {
        type: String,
        ref: 'songs',
        required: true,
      },
    ],
  },
  { collection: 'artists' }
);

module.exports = mongoose.model('artists', artistSchema);
