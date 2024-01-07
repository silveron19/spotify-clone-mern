import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    release_date: { type: String, required: true },
  },
  { collection: 'albums' }
);

module.exports = mongoose.model('albums', albumSchema);
