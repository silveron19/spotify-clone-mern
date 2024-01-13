import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pict: { type: String, required: true },
    song_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'songs',
        required: true,
      },
    ],
  },
  { collection: 'artists' }
);

module.exports = mongoose.model('artists', artistSchema);
