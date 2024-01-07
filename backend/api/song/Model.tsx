import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true },
    duration: { type: String, required: true },
    image: { type: String, required: true },
    count: { type: Number, required: true },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artists',
      required: true,
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'albums',
      required: true,
    },
  },
  { collection: 'songs' }
);

module.exports = mongoose.model('songs', songSchema);
