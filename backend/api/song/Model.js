import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    link: { type: String, required: true },
    duration: { type: String, required: true },
    pict: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { collection: 'songs' }
);

const songs = mongoose.model('songs', songSchema);

export default songs;
