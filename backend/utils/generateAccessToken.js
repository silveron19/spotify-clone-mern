import jwt from 'jsonwebtoken';

export default function generateAccessToken(user) {
  return jwt.sign(
    {
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRE }
  );
}
