import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    birth_date: { type: String, required: true },
    country: { type: String, required: true },
    shared_data: { type: Boolean, required: true, default: false },
    is_premium: { type: Boolean, required: true, default: false },
    refreshToken: { type: String },
  },
  { collection: 'users' }
);

const users = mongoose.model('users', userSchema);

export default users;
