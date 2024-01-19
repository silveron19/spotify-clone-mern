import mongoose from 'mongoose';

const enumGender = {
  values: ['Male', 'Female', 'Prefer not to identify'],
  message: 'Invalid gender!',
};

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    phone_number: { type: String, maxlength: [15, 'Invalid phone number!'] },
    email: {
      type: String,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email!'],
      required: true,
    },
    password: {
      type: String,
      minlength: [8, 'The password must be at least 8 characters long!'],
      required: true,
    },
    gender: {
      type: String,
      enum: enumGender,
      required: true,
    },
    birth_date: { type: String, required: true },
    country: { type: String, required: true },
    shared_data: { type: Boolean, required: true, default: false },
    is_premium: { type: Boolean, required: true, default: false },
    join_date: { type: Date, default: Date.now() },
    role: {
      type: String,
      required: true,
      enum: ['superadmin', 'admin', 'user'],
      default: 'user',
    },
    refreshToken: { type: String },
  },
  { collection: 'users' }
);

const users = mongoose.model('users', userSchema);

export default users;
