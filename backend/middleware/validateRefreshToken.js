import validateToken from '../utils/validateToken.js';

const validateRefreshToken = async (req, res, next) => {
  try {
    req.user = await validateToken(
      req.body['refreshToken'],
      process.env.REFRESH_TOKEN_SECRET
    );
    next();
  } catch (error) {
    res.status(401).json({ error: error.message || 'Invalid refresh token' });
  }
};
export default validateRefreshToken;
