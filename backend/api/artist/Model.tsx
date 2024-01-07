import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    genre: { type: String, required: true },
  },
  { collection: 'artists' }
);

module.exports = mongoose.model('artists', artistSchema);
