import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pict: { type: String, required: true },
  },
  { collection: 'artists' }
);

const artist = mongoose.model('artists', artistSchema);

export default artist;
