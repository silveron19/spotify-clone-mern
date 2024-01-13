import jwt from 'jsonwebtoken';

export default function generateAccessToken(user) {
  return jwt.sign(
    {
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        shared_data: user.shared_data,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '5m' }
  );
}
