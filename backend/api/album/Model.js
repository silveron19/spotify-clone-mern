import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    pict: { type: String, required: true },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artist',
      required: true,
    },
  },
  { collection: 'albums' }
);

const albums = mongoose.model('albums', albumSchema);

export default albums;
