import jwt from 'jsonwebtoken';

export default function generateRefreshToken(user) {
  return jwt.sign(
    {
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        shared_data: user.shared_data,
      },
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );
}
