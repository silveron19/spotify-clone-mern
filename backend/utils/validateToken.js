import jwt from 'jsonwebtoken';

async function validateToken(token, tokenSecret) {
  return await jwt.verify(token, tokenSecret, (error, payload) => {
    if (error) {
      throw error;
    }
    return payload;
  });
}

export default validateToken;
