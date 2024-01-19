import validateToken from '../utils/validateToken.js';

const validateRefreshToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    req.user = await validateToken(token, process.env.REFRESH_TOKEN_SECRET);
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ error: error.message || 'Invalid refresh token' });
  }
};
export default validateRefreshToken;
