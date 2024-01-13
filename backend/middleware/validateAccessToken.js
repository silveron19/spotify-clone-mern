import validateToken from '../utils/validateToken.js';

const validateAccessToken = async (req, res, next) => {
  try {
    req.user = await validateToken(
      req.body['accessToken'],
      process.env.ACCESS_TOKEN_SECRET
    );
    next();
  } catch (error) {
    res.status(401).json({ error: error.message || 'Invalid access token' });
  }
};

export default validateAccessToken;
