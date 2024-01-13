import validateToken from '../utils/validateToken.js';

const validateAccessToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  try {
    req.user = await validateToken(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ error: error.message || 'Invalid access token' });
  }
};

export default validateAccessToken;
